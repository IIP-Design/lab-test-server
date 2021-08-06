// Sets the HTML and text versions of the opt in confirmation email
module.exports = {
  confirmSelectionsEmailSubject: () => 'Confirm your notification selections',

  confirmAllProjectsEmailBody: ( { link } ) => ( {
    html: `<div className=\"email\" style=\"\npadding: 16px;\nfont-family: sans-serif;\n line-height: 1.5;\n font-size: 16px;\n\">\n<p>Almost done!</p>\n\n<p>Please confirm your notification selection for new Playbooks added to Content Commons.</p>\n\n<p><a href=\"${link}\">Yes, send me notifications when new Playbooks are added</a></p>\n\n<p>Can’t click the button above? Copy and paste this link into your browser: ${link}</p>\n\n<p>If you received this email by mistake, simply delete it. You won’t be subscribed to email notifications if you do not click the confirmation link above.</p></div>`,

    text: `Almost done!\n\nPlease confirm your notification selection for new Playbooks added to Content Commons.\n\nCopy and paste this link into your browser: ${link}.\n\nIf you received this email by mistake, simply delete it. You won’t be subscribed to email notifications if you do not click the confirmation link above.`,
  } ),

  confirmSpecificProjectEmailBody: ( { link, playbookTitle } ) => ( {
    html: `<div className=\"email\" style=\"\npadding: 16px;\nfont-family: sans-serif;\n line-height: 1.5;\n font-size: 16px;\n\">\n<p>Almost done!</p>\n\n<p>Please confirm your notification selection for the Playbook titled “${playbookTitle}”.</p>\n\n<p><a href=\"${link}\">Yes, send me notifications when this Playbook is updated</a></p>\n\n<p>Can’t click the button above? Copy and paste this link into your browser: ${link}</p>\n\n<p>If you received this email by mistake, simply delete it. You won’t be subscribed to email notifications if you do not click the confirmation link above.</p></div>`,

    text: `Almost done!\n\nPlease confirm your notification selection for new Playbooks added to Content Commons.\n\nCopy and paste this link into your browser: ${link}.\n\nIf you received this email by mistake, simply delete it. You won’t be subscribed to email notifications if you do not click the confirmation link above.`,
  } )
};
