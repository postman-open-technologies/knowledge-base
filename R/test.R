# install.packages("RPostgreSQL")

require("RPostgreSQL")
drv <- dbDriver("PostgreSQL")
conn <- dbConnect(drv, host=Sys.getenv('POSTMAN_KB_PG_HOST'), dbname=Sys.getenv('POSTMAN_KB_PG_DB'), port=Sys.getenv('POSTMAN_KB_PG_PORT'), user=Sys.getenv('POSTMAN_KB_PG_R_USER'), password = Sys.getenv('POSTMAN_KB_PG_R_PASSWORD'))

query = "
select 
bucket, 
case 
when bucket=0 then '<1'
when bucket=1 then '1-5'
when bucket=2 then '6-10'
when bucket=3 then '11-20'
when bucket=4 then '21-50'
when bucket=5 then '51-100'
when bucket=6 then '101-250'
when bucket=7 then '>250'
end as label,
count(*) as count
from (
  select uri, width_bucket(json_data_size/1024, array[1,6,11,21,51,101,251]) as bucket
  from vw_oas_resource 
  where json_meta->'isValid' = 'true'	
) as t1
group by 1 order by bucket;
"
df = dbGetQuery(conn, query)
df

par(mar = c(7, 4, 2, 2)+1)
x <- barplot(df$count, main = "API specification JSON size", xlab = "Size in Kb", ylab = "Count of APIs", xaxt = 'n')
text(x=x, df$label, xpd=TRUE, srt=-45, adj=0, y=par("usr")[3])

library("ggplot2")
df$label <- factor(df$label, levels = df$label)
ggplot(df, aes(x = label, y = count)) +
  geom_bar(stat = "identity") +
  geom_text(aes(label = count), vjust = -0.3) +
  ggtitle("API specification JSON size") +
  theme(plot.title = element_text(hjust = 0.5, face = "bold")) +
  xlab("Size in Kb") +
  ylab("Count of APIs")



df$label
par("usr")

