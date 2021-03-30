const filenames = require("../../../modules/filenames");
const serviceNames = filenames(__dirname);

module.exports = (svLoc) => {
  const serviceModule = {};
  const db = svLoc.get("db");
  serviceNames.map((serviceName) => {
    const submoduleFactory = require(`./${serviceName}`);
    serviceModule[serviceName] = submoduleFactory(db);
  });

  return serviceModule;
};
