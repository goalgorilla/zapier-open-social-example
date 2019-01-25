const legacyFileHydrator = (z, bundle) => {
  return z.legacyScripting.run(bundle, 'hydrate.file');
};

const legacyMethodHydrator = (z, bundle) => {
  return z.legacyScripting.run(bundle, 'hydrate.method');
};

module.exports = {
  legacyFileHydrator: legacyFileHydrator,
  legacyMethodHydrator: legacyMethodHydrator
};
