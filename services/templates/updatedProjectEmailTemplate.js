// Sets the HTML and text versions of the updates email
module.exports = {
  updatedProjectEmailSubject: ( { playbookTitle } ) => `The “${playbookTitle}” Playbook has been updated`,

  updatedProjectEmailBody: ( { link, playbookTitle, userFirstName } ) => ( {
    html: `<div className=\"email\" style=\"\npadding: 16px;\nfont-family: sans-serif;\n line-height: 1.5;\n font-size: 16px;\n\">\n<p>Hi${userFirstName ? ` ${userFirstName}` : ''},</p>\n\n<p>The Playbook you are following has been updated.</p>\n\n<p><a href=\"${link}\">View updates</a></p>\n\n<p>Can’t click the button above? Copy and paste this link into your browser: ${link}</p>\n\n<p>You are receiving this email because you are subscribed to receive notifications when the Playbook titled “${playbookTitle}” has been updated.</p>\n\n<p>If you received this email by mistake, you can <a href=\"\">change your notifications selections or unsubscribe here</a>.</p></div>`,

    text: `Hi${userFirstName ? ` ${userFirstName}` : ''},\n\nThe Playbook you are following has been updated.\n\nCopy and paste this link into your browser: ${link}.\n\nYou are receiving this email because you are subscribed to receive notifications when the Playbook titled “${playbookTitle}” has been updated.\n\nIf you received this email by mistake, you can change your notifications selections or unsubscribe here: ____.`,
  } )
};
