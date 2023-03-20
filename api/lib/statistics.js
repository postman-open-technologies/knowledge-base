const db = require('./db');

module.exports.get = async (type) => {
  result = await db.query(`
  SELECT
  attachment_type,
  code,
  res.collection_id,
  res.class,
  res.json_meta->>'isValid' as is_valid,
  count(distinct err.uri) AS n_apis,
  count(*) AS n_err
  FROM vw_oas_resource_spectral_errors err
  JOIN vw_oas_resource res
  ON err.uri = res.uri
  WHERE attachment_type = $1
  AND code not in ('invalid-ref', 'parser','unrecognized-format')
  GROUP BY 1,2,3,4,5
  ORDER BY
  code,
  n_apis DESC
  `, [type]);
  console.log(result);
  return result.rowCount && result.rows.map(row => {
    return {
      id: row.code,
      scope: row.attachment_type
    };
  })[0];
};