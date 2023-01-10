# Knowledge Base: Infrastructure

The knowledge base is hosted in the Postman AWS Labs cloud and supported by a variety of technologies and tools. 

The core content is stored as files in a master S3 bucket, which are then be loaded in databases, search engines, and other tools for processing and analysis. Postgres is currently our primary database, where we are taking advantage of the JSON data type support and querying features. 

Candidate technologies on our roadmap for strengthening the capabilities and performance include [Neo4J](https://neo4j.com/) (graph/JSON data), [Apache Solr](https://solr.apache.org/) (indexing/search), [OpenLink Virtuoso](https://vos.openlinksw.com/owiki/wiki/VOS) and/or [Apache Jena](https://jena.apache.org/) (RDF).

We are exploring how GraphQL can potentially be used as API endpoints to the knowledge base.
[Hasura](https://hasura.io/), [StepZen](https://stepzen.com/), and [Graphile](https://www.graphile.org/) are being experimented with on top of the Postgres database, as well as [Yoga](https://the-guild.dev/graphql/yoga-server) as a generic platform.
 
External access to back end services is controlled and proxied by an [NGINX](https://www.nginx.com/) server.

Knowledge base APIs are in the early design and development stage and not currently publicly available. We anticipate for these to become available for early access in the first half of 2023 through a [Zuplo](https://zuplo.com/) gateway.

The AWS hosted above solutions are currently running on micro/small t3 EC2 instances.







