// This file is a copy of the POST AWS Lambda function for this app.

const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-2" });
const ses = new AWS.SES();

exports.handler = (event, context, callback) => {
  console.log("Event: " + JSON.stringify(event, null, 2));

  const params = {
    Item: {
      email: event.email ? event.email : "Email not specified",
      name: event.name ? event.name : "Name not specified",
      message: event.message ? event.message : ""
    },
    TableName: "WebsiteContactTable"
  };

  const sender = process.env.SENDER_EMAIL;
  const recipient = event.email;
  const subject = event.name;
  const body_text = event.message;
  const charset = "UTF-8";
  const body_html = `<html>
    <head></head>
        <body>
            <p>${event.message}</p>
        </body>
    </html>`;

  const emailParams = {
    Source: sender,
    Destination: {
      ToAddresses: [recipient]
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset
        },
        Html: {
          Data: body_html,
          Charset: charset
        }
      }
    }
  };

  // Attempt to add data to DynamoDB and send email if successful
  documentClient.put(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      ses.sendEmail(emailParams, function(emailErr, emailData) {
        if (emailErr) console.log(emailErr.message);
        else console.log("Email successfully sent, ID: " + emailData.MessageId);
      });
      callback(null, data);
    }
  });
};
