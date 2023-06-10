const db = require('./db');

const totalAPIs = async () => {
  const result = await db.query(`
  SELECT
  COUNT(*) AS total
  FROM vw_oas_resource;
  `);
  return result.rowCount && result.rows.map(row => row.total)
};

module.exports.get = async (id) => {
  const total = await totalAPIs();

  result = await db.query(`
  SELECT
  code,
  attachment_type,
  SUM(n_apis) AS count
  FROM mat_vw_oas_resource_spectral_errors_stats
  WHERE code = $1
  GROUP BY
  code,
  attachment_type
  `, [id]);
  return result.rowCount && result.rows.map(row => {
    return {
      info: {
        id: row.code,
        scope: row.attachment_type
      },
      data: {
        creationDateTime: new Date().toISOString(),
        total: parseInt(total[0]),
        count: parseInt(row.count)
      }
    };
  })[0];
};