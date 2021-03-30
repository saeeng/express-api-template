module.exports = (db) => {
  return async (key, callback) => {
    const _db = db;
    const result = await db.get(key);
    return [200, result];
  };
};
