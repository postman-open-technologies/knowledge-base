const db = require('./db');

module.exports.all = async () => {
  result = await db.query(`
  SELECT *
  FROM mat_vw_oas_resource_spectral_rules
  WHERE code NOT IN ('invalid-ref', 'parser','unrecognized-format')
  ORDER BY code, attachment_type
  `);
  return result.rows.map(row => {
    return {
      id: row.code,
      scope: row.attachment_type
    };
  });
};

module.exports.get = async (id) => {
  result = await db.query(`
  SELECT *
  FROM mat_vw_oas_resource_spectral_rules
  WHERE code = $1
  AND code NOT IN ('invalid-ref', 'parser','unrecognized-format')
  `, [id]);
  return result.rowCount && result.rows.map(row => {
    return {
      id: row.code,
      scope: row.attachment_type
    };
  })[0];
};