# install.packages("RPostgreSQL")

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select category, count(*) as n,  count(*) / sum(count(*)) over() as pct
from (
	select uri, repo_path, message, path, 
	case 
		when message ~ 'regexes'  then 'REGEX'
		when message ~ '''object'''  then 'NOTOBJ'
		when message ~ 'Unevaluated'  then 'UNEVAL'
		else 'OTH'
	end as category
	from  vw_oas_resource_validation_errors  
	where  path#>>'{0}' = 'paths' and jsonb_array_length(path) = 1
	order by category, message, repo_path
) as t1
group by 1
order by n desc
"
df = dbGetQuery(conn, query)
df

df[df$path == 'paths',]
df[df$category=='REGEX',]$n


