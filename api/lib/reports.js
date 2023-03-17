const db = require('./db');

module.exports.all = async () => {
  result = await db.query(`
  SELECT DISTINCT attachment_type, code
  FROM vw_oas_resource_spectral_errors
  WHERE attachment_type LIKE 'spectral/%'
  AND code NOT IN ('invalid-ref', 'parser','unrecognized-format')
  ORDER BY 1,2
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
  SELECT DISTINCT attachment_type, code
  FROM vw_oas_resource_spectral_errors
  WHERE attachment_type LIKE 'spectral/%'
  AND code = $1
  AND code NOT IN ('invalid-ref', 'parser','unrecognized-format')
  ORDER BY 1,2
  `, [id]);
  return result.rowCount && result.rows.map(row => {
    return {
      id: row.code,
      scope: row.attachment_type
    };
  })[0];
};