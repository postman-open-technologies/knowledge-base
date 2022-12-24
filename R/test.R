# install.packages("RPostgreSQL")

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select tld, count(*) as n from vw_oas_resource_tld group by tld order by n desc limit 10;
"
df = dbGetQuery(conn, query)
df


for (i in 1:nrow(df)) {
  cat(paste("|",i,"|",df[i,'tld'],"|",df[i,'n'],"|\n"))
}
