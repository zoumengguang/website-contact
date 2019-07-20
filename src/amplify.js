import Amplify from "aws-amplify";
import awsconfig from "./awsconfig";
import { I18n } from "aws-amplify";

Amplify.configure(awsconfig);

const authScreenLabels = {
  en: {
    Username: "Email",
    "Enter your username": "Enter your email",
    "Sign in to your account": "Welcome to Website Contact App"
  }
};

I18n.setLanguage("en");
I18n.putVocabularies(authScreenLabels);
