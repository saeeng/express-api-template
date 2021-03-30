module.exports = (db) => {
  return async (key, value, callback) => {
    const _db = db;
    const result = await db.put(key, value);

    return [200, result];
  };
};
