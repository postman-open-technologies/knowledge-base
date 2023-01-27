# install.packages("RPostgreSQL")

library(tidyverse)

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select operation, count(*) as n, count(*) / sum(count(*)) over() as pct
from vw_oas_resource_paths_operations oper
join vw_oas_resource res on oper.uri = res.uri
group by 1 order by 2 desc
"
df = dbGetQuery(conn, query)

query = "
select operation, response, count(*) as n, count(*) / sum(count(*)) over(partition by operation) as pct
from vw_oas_resource_paths_operations_responses
group by 1,2 order by operation, pct desc
"
df2 = dbGetQuery(conn, query)

df2
df2_subset = df2[df2$operation == 'get', -1]
df2_subset_top10 = df2_subset[1:10,]
df2_subset_other = df2_subset[11:nrow(df2_subset),] %>% summarize(response='other',n=sum(n),pct=sum(pct))
df2_subset_stacked = rbind(df2_subset_top10, df2_subset_other)

df2_subset_stacked$response <- factor(df2_subset_stacked$response, levels = df2_subset_stacked$response)
ggplot(df2_subset_stacked, aes(x = response, y = n)) +
  geom_bar(stat = "identity") +
  geom_text(aes(label = paste(format(round(pct*100,1)),'%',sep='') ), vjust = -0.3) +
  ggtitle("Top 10 responses per operation") +
  theme(plot.title = element_text(hjust = 0.5, face = "bold")) +
  xlab("Response code or value") +
  ylab("Count of responses")
