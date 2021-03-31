module.exports = (db) => {
  return async (key, value, callback) => {
    const _db = db;
    const result = await _db.put(key, value);

    return [200, result];
  };
};
