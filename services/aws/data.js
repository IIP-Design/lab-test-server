const { getRecipients } = require( './ses-controller.js' );

module.exports = {
  /**
   * Replace fake recipients with an array of
   * actual addresses to receive the email, e.g.,
   * ['username@america.gov', ...]
   */
  recipients: getRecipients( 4 ), // fake

  /**
   * AWS mailbox simulator accounts
   * @see https://docs.aws.amazon.com/ses/latest/dg/send-email-simulator.html
   */
  awsSimulatorRecipients: [
    'success@simulator.amazonses.com',
    'bounce@simulator.amazonses.com',
    'ooto@simulator.amazonses.com', // out of office
    'complaint@simulator.amazonses.com', // marked as spam by recipient
    'suppressionlist@simulator.amazonses.com' // hard bounce
  ],

  // Mock data from Commons Server
  playbook: {
    id: 'ckpip7lop0ank072004mh69ff',
    title: 'june june',
    author: {
      id: 'ck2m042xo0rnp0720nb4gxjix',
      firstName: 'Edwin',
    }
  },
};
