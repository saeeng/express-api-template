const level = require("level");

module.exports = (serviceLocator) => {
  const dbName = serviceLocator.get("dbName");
  return level(dbName);
};
