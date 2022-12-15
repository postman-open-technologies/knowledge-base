# install.packages("RPostgreSQL")

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select value->>'type' as type, count(*) as n, count(*) / sum(count(*)) over() as pct
from vw_oas_resource_components_securityscheme
group by 1 order by 2 desc
"
df = dbGetQuery(conn, query)

df


