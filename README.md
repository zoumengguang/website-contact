# website-contact
MK Decision Interview Challenge

Link: https://jin-zou.s3-us-west-1.amazonaws.com/index.html

* When testing, if the login does not work on a browser, 
either clear your cookies or use the browser’s equivalent
of a private browsing function (e.g Incognito for Chrome). 

# Notes
- Authentication is provided by AWS Amplify's Auth service.

- Required .env file should be attached to the email.

- Files inside the AWS folder are copies of the Lambda functions required for the challenge. 
These are purely for ease of reference and are not used in the front end.

- Since e-mail sending through AWS SES only works through verified domains/emails through the service
it's easiest to test functionality by using the account email websitecontactapp@gmail.com, which is pre-verified. 
Alternatively verify another email in SES to serve as another valid candidate for testing email sending/receiving. 

- WebsiteContactFunc is the GET Lambda Function used to test data fetching from DynamoDB,
- WebsiteContactWrite is the POST Lambda Function responsible for POST/PUT operations
  into DynamoDB as well as sending an email copy of the message through AWS SES.
