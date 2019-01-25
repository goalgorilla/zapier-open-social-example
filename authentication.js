const testAuth = (z, bundle) => {
  return z.legacyScripting.run(bundle, 'trigger', 'user');
};

module.exports = {
  customConfig: {},
  fields: [
    { key: 'api_key', label: 'API Key', required: true, type: 'string' }
  ],
  test: testAuth,
  type: 'custom'
};
