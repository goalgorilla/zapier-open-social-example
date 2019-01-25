const authentication = require('./authentication');
const userTrigger = require('./triggers/user.js');
const hydrators = require('./hydrators');

const fs = require('fs');
const scriptingSource = fs.readFileSync('./scripting.js', { encoding: 'utf8' });

const beforeRequest = (request, z, bundle) => {
  return z.legacyScripting.beforeRequest(request, z, bundle);
};

const afterResponse = (response, z, bundle) => {
  return z.legacyScripting.afterResponse(response, z, bundle);
};

module.exports = {
  afterResponse: [afterResponse],
  authentication: authentication,
  beforeRequest: [beforeRequest],
  creates: {},
  hydrators: hydrators,
  legacy: {
    authentication: {
      mapping: { Authorization: 'Bearer {{api_key}}' },
      placement: 'header'
    },
    creates: {},
    scriptingSource: scriptingSource,
    searches: {},
    triggers: {
      user: {
        operation: {
          url:
            '{{process.env.OPEN_SOCIAL_URL}}/jsonapi/user/user'
        }
      }
    }
  },
  platformVersion: '7.6.0',
  searches: {},
  triggers: {
    [userTrigger.key]: userTrigger
  },
  version: '1.0.0'
};
