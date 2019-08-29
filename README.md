# Frugalr
You tired of your friends asking you why you are sending them a Venmo? Just send them an itemized invoice. Everyone loves receiving invoices.

So now when your friend owes you money for that eggplant custard pizza you have an easy way to send it to them. They will never have any questions again.

Oh did I mention they will also get a nice invoice sent to them? as a PDF?

## Demo
Why not checkout our demo? I mean even a hackathon application needs a staging and production site!

* Staging Site: https://frugalr-staging.herokuapp.com
* "Production" Site: https://frugalr.herokuapp.com

## Technology Used
* Vue
* TypeScript (cause every app needs type safety, even if it doesn't)
* FireBase Firestore (Might as well use a realtime database)
* SendGrid API
* PDFKit
* Node
* Express
* Deployed to Heroku with a CD Pipeline

## Project setup
After you have cloned the project you will need to setup a few dependencies to run the project locally.
* Inside the root directory create a `.env.local` file. This will hold your environment variables. You will need the following environment variables:

```
VUE_APP_FIREBASE_API_KEY=YOUR FIREBASE KEY
VUE_APP_FIREBASE_PROJECT_ID=YOUR FIREBASE PROJECT ID
VUE_APP_FIREBASE_AUTH_DOMAIN=YOUR FIREBASE AUTH DOMAIN
SENDGRID_API_KEY=YOUR SENDGRID API KEY
URL=http://localhost:8080
```
* You will need to setup a Firebase project on Google. You can do this at https://firebase.google.com
    Once you have setup a Firebase Prject go into your project settings and copy the Api Key, Project Id, and Firebase Auth Domain into their respective environment variables.

* Signup to SendGrid (free account) at:  https://signup.sendgrid.com
* Once signed up copy your API Key into respective environment variable
* Run `npm install` to install the dependencies
* Run `npm run dev` to run both the server and vue application
    This project uses concurrently so it will run both the server and frontend application at once.
    The vue app will proxy requests to the API automatically
* You're ready to send invoices for that eggplant custard pizza!

**NOTE** Payment is not implemented. We didn't want to scare anyone and actually think they would be sending us or someone money