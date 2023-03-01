# install.packages("RPostgreSQL")

library(tidyverse)

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select attachment_type, code, res.collection_id, res.class, res.json_meta->>'isValid' as is_valid, count(distinct err.uri) as n_apis, count(*) as n_err
from vw_oas_resource_spectral_errors err
join vw_oas_resource res on err.uri = res.uri
where attachment_type = 'spectral/postman/http-status-codes'
group by 1,2,3,4,5 order by code, n_apis desc;
"
df = dbGetQuery(conn, query)

collectionIds = unique(df$collection_id)
rulesIds = unique(df$code)
