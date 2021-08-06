const AWS_MAX_RECIPIENTS_PER_MSG = 50;

/**
 * Splits an array into array chunks
 * @param {array} array The array to chunk
 * @param {number} size The number of items per chunk
 * @returns {array} An array of arrays
 */
const getChunkedArray = ( array, size = AWS_MAX_RECIPIENTS_PER_MSG ) => {
  if ( size > AWS_MAX_RECIPIENTS_PER_MSG ) {
    throw new Error( `Chunk size cannot exceed ${AWS_MAX_RECIPIENTS_PER_MSG}.` );
  }

  const result = [];

  for ( let i = 0; i < array.length; i += size ) {
    const chunk = array.slice( i, i + size );

    result.push( chunk );
  }

  return result;
};

/**
 * Create fake email addresses
 * @param {number} count The number of fake email addresses to return
 * @param {string} userName A base email username
 * @param {string} domain An email domain
 * @returns {array} An array of fake email addresses
 */
const getFakeEmailAddresses = ( count, userName = 'maheyyyymmdd', domain = 'america.gov' ) => {
  const userNames = Array( count ).fill( userName );
  
  return userNames.reduce( ( acc, curr, i ) => {
    acc.push( `${curr}${i}@${domain}` );
    
    return acc;
  }, [] );
};

/**
 * Logs response from Nodemailer
 * @param {*} err Error
 * @param {object} info Data about the email message
 */
const handleResponse = ( err, info ) => {
  if ( err ) {
    console.log( err );
  } else {
    console.log( '********************' );
    console.log( 'Notifications sent' );
    console.log( info.envelope );
    console.log( info.messageId );
  };
};

module.exports = {
  /**
   * Returns fake email recipients
   * @param {number} count The number of recipients
   * @returns {array} An array of fake email recipients
   */
  getRecipients: ( count = 1 ) => {
    const fakeEmailAddresses = getFakeEmailAddresses( count );

    return fakeEmailAddresses.length <= AWS_MAX_RECIPIENTS_PER_MSG
      ? fakeEmailAddresses
      : getChunkedArray( fakeEmailAddresses );
  },

  /**
   * Handles Nodemailer transporter method calls
   * @param {object} transporter Nodemailer transporter
   * @param {object} params Nodemailer params
   * @param {requestCallback} handleResponse Logs Nodemailer response
   */
  handleSend: ( transporter, params ) => {
    transporter.once( 'idle', () => {
      if ( transporter.isIdle() ) {
        transporter.sendMail( params, handleResponse );
      }
    } );
  },

  /**
   * Does the recipients array contain chunked arrays?
   * @param {array} recipients 
   * @returns {bool}
   */
  isChunkedArray: recipients => recipients.every( n => Array.isArray( n ) ),

  /**
   * Set up Nodemailer parameters
   * @param {object} fields
   * @param {object} fields.body The html and text versions of the email
   * @param {array} fields.recipients An array of email addresses
   * @param {string} fields.subject The email subject
   * @returns {object} Nodemailer parameters
   */
  setSesParams: ( { body, recipients, subject } ) => ( {
    from: `Content Commons Notifications <${process.env.MAIL_RETURN_ADDRESS}>`,
    bcc: recipients,
    subject,
    ...body,
  } ),
}
