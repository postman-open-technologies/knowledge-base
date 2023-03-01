require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))
