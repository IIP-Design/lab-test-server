require( 'dotenv' ).config();
const aws = require( 'aws-sdk' );
const nodemailer = require( 'nodemailer' );
const { handleSend, isChunkedArray, setSesParams } = require( './ses-controller.js' );
const { playbook, recipients } = require( './data' );
const { updatedProjectEmailSubject, updatedProjectEmailBody } = require( '../templates/updatedProjectEmailTemplate' );

// configure AWS SDK
const ses = new aws.SES( {
  apiVersion: '2010-12-01',
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
} );

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport( {
  SES: { ses, aws },
  sendingRate: 10 // messages per second, max: ~14
} );

const sendEmailUpdates = ( playbook ) => {
  const { author, id, title } = playbook;
  const params = setSesParams( {
    subject: updatedProjectEmailSubject( {
      playbookTitle: title || '',
    } ),
    body: updatedProjectEmailBody( {
      link: `${process.env.FRONTEND_URL}/package/playbook/${id}`,
      playbookTitle: title || '',
      userFirstName: author.firstName || '',
    } )
  } );

  if ( isChunkedArray( recipients ) ) {
    for ( let i = 0; i < recipients.length; i++ ) {
      params.bcc = recipients[i];
      handleSend( transporter, params );
    }
  } else {
    params.bcc = recipients;
    handleSend( transporter, params )
  }
};

sendEmailUpdates( playbook );
