import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

export const sendMailPP = async (req, res) => {

  // Create an SES service object
  const ses = new AWS.SES();

  // Define email parameters
  const params = {
    Destination: {
      ToAddresses: req.body.to
    },
    Template: req.body.template,
    TemplateData: JSON.stringify(req.body.attribute),
    Source: 'ankit@stylopay.com'
  };


  // Send the email
  ses.sendTemplatedEmail(params, (err, data) => {
    if (err) {
      console.log("Error sending email:", err);
    } else {
      console.log("Email sent successfully:", data);
    }
  });
  res.send("ok")
}

export const createTemplate = async (req, res) => {
  try {
    const { templateName, subject, htmlContent, textContent } = req.body;

    // Create an SES service objects
    const ses = new AWS.SES();

    // Define email templates parameters
    const params = {
      Template: {
        TemplateName: templateName,
        SubjectPart: subject,
        HtmlPart: htmlContent,
        TextPart: textContent
      }
    };

    // Call SES to create the email template
    await ses.createTemplate(params).promise();

    res.status(200).json({ message: 'Email template created successfully' });
  } catch (error) {
    console.error('Error creating email template:', error);
    res.status(500).json({ error: 'An error occurred while creating the email templates' });
  }
}
