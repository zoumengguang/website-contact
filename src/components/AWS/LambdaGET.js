// This file is a copy of the GET AWS Lambda function for this app.

const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handler = (event, context, callback) => {
    console.log("Event: " + event);
    
    let scanParams = {
        TableName: "WebsiteContactTable",
        Limit: 100
    }
    
    documentClient.scan(scanParams, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data,);
        }
    });
};
