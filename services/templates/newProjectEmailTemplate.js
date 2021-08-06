// Sets the HTML and text versions of the new project email
module.exports = {
  newProjectEmailSubject: () => 'A new Playbook has been added to Commons!',

  newProjectEmailBody: ( { link, playbookTitle, userFirstName } ) => ( {
    html: `<div className=\"email\" style=\"\npadding: 16px;\nfont-family: sans-serif;\n line-height: 1.5;\n font-size: 16px;\n\">\n<p>Hi${userFirstName ? ` ${userFirstName}` : ''},</p>\n\n<p>A new Playbook titled “${playbookTitle}” has been added to Content Commons. Check it out by clicking the button below!</p>\n\n<p><a href=\"${link}\">View the new Playbook</a></p>\n\n<p>Can’t click the button above? Copy and paste this link into your browser: ${link}</p>\n\n<p>You are receiving this email because you are subscribed to receive notifications when new Playbooks are added to Content Commons.</p>\n\n<p>If you received this email by mistake, you can <a href=\"\">change your notifications selections or unsubscribe here</a>.</p></div>`,

    text: `Hi${userFirstName ? ` ${userFirstName}` : ''},\n\nA new Playbook titled “${playbookTitle}” has been added to Content Commons. Check it out by clicking the button below!\n\nCopy and paste this link into your browser: ${link}.\n\nYou are receiving this email because you are subscribed to receive notifications when new Playbooks are added to Content Commons.\n\nIf you received this email by mistake, you can change your notifications selections or unsubscribe here: ____.`,
  } )
};
