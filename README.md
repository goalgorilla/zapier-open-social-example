# Example App For Zapier Connecting With Open Social API

A simple app which allows you to poll the [Open Social JSON API](https://github.com/goalgorilla/social_json_api) for new users.

This is a proof of concept. Authentication needs some more work as it now only supports injecting the access token directly, thus enforcing developers to set a high expiry time for tokens.

It will be fairly easy to use this Zapier app as a basis to create proper oAuth2 authentication flow.

# How to use it

1. Clone this repo.
2. Replace `localhost` in `/index.js` with the domain of your Open Social site (with Social JSON module installed properly).
3. Use the Zapier CLI to [push](https://zapier.com/developer/start/deploying-your-app) your app.
4. Create a new Zap and you should be able to use the trigger "New user".

You can see an example implementation on our [blog](https://www.getopensocial.com/blog/open-source/zapier-social-json-api-integration)
