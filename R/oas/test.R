# install.packages("RPostgreSQL")

library(tidyverse)

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select 
	source,
	bucket,
	case 
		when bucket=0 then '<1'
		when bucket=1 then '1-5'
		when bucket=2 then '6-10'
		when bucket=3 then '11-20'
		when bucket=4 then '21-50'
		when bucket=5 then '51-100'
		when bucket=6 then '101-250'
		when bucket=7 then '250-999'
		when bucket=8 then '1000+'
	end as label,
	count(*) as n, round((count(*)/sum(count(*)) over(partition by source))*100,2) as pct
from (
select case when collection_id = 'postman_apis' then 'postman' else 'external'end as source, uri, width_bucket(json_data_size/1024, array[1,6,11,21,51,101,251,1000]) as bucket
	from vw_oas_resource 
	where json_meta->'isValid' = 'true'	
) as t1
group by 1,2 order by bucket, source
"
df = dbGetQuery(conn, query)

df$label <- with(df, reorder(label, bucket))
ggplot(df, aes(x = label, y = pct, fill = source)) +
  geom_bar(stat = "identity", position = "dodge") +
  ggtitle("Postman vs External APIs Size Distribution") +
  theme(plot.title = element_text(hjust = 0.5, face = "bold"), legend.position = c(0.92, 0.9)) +
  xlab("Size in Kb") +
  ylab("Percentage of APIs") +
  scale_fill_manual(values = c("postman" = "orange", "external" = "red"))



