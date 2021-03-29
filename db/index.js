const level = require("level");

module.exports = (dbName) => {
  return level(dbName);
};
