const filenames = require("../../../modules/filenames");
const serviceNames = filenames(__dirname);

module.exports = (db) => {
  const serviceModule = {};

  serviceNames.map((serviceName) => {
    const serviceFactory = require(`./${serviceName}`);
    serviceModule[serviceName] = serviceFactory(db);
  });

  return serviceModule;
};
