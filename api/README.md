---
title: Postman Open Technologies Knowledge Base API v0.4.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="postman-open-technologies-knowledge-base-api">Postman Open Technologies Knowledge Base API v0.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API that lets you access the information available on the Knowledge Base.

Please refer to the [contributing instructions](https://raw.githubusercontent.com/postman-open-technologies/knowledge-base/main/api/CONTRIBUTING.md) for information on how to install the API server and run it.

Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a>

Email: <a href="mailto:open@postman.com">Postman Open Technologies</a> Web: <a href="https://www.postman.com/open-tech/">Postman Open Technologies</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="postman-open-technologies-knowledge-base-api-openapi">openapi</h1>

## getOpenAPI

<a id="opIdgetOpenAPI"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/ \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/ HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /`

*Retrieve the OpenAPI definition*

> Example responses

> 200 Response

```json
{
  "openapi": "3.1.1",
  "info": {
    "title": "A minimal OpenAPI definition",
    "version": "1.2.3"
  },
  "components": {}
}
```

```
"string"
```

> default Response

```json
{
  "status": 500,
  "title": "Internal Server Error",
  "details": "Error fetching /",
  "instance": "/",
  "type": "http://localhost:3000/InternalServerError"
}
```

<h3 id="getopenapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The OpenAPI definition, available in JSON or HTML format, depending on the content type that you accept|string|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="postman-open-technologies-knowledge-base-api-reports">reports</h1>

## listReports

<a id="opIdlistReports"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/reports \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/reports HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/reports',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/reports',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/reports', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/reports', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/reports");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/reports", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reports`

*Retrieve a list of the available types of statistical reports*

You can use this path to retrieve the full list of available types of statistical reports. Each response element contains an `id` and a `scope`. The `id` is a unique identifier of the statistical report type and the `scope` identifies what the report is about.

> Example responses

> 200 Response

```json
[
  {
    "id": "info-contact",
    "scope": "spectral/postman/postman-library"
  },
  {
    "id": "info-license",
    "scope": "spectral/postman/postman-library"
  }
]
```

> default Response

```json
{
  "status": 500,
  "title": "Internal Server Error",
  "details": "Error fetching /reports",
  "instance": "/reports",
  "type": "http://localhost:3000/InternalServerError"
}
```

<h3 id="listreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of available types of statistical reports|[Reports](#schemareports)|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="postman-open-technologies-knowledge-base-api-report">report</h1>

## getReport

<a id="opIdgetReport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/reports/{reportId} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/reports/{reportId} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/reports/{reportId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/reports/{reportId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/reports/{reportId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/reports/{reportId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/reports/{reportId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/reports/{reportId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reports/{reportId}`

*Retrieve a specific type of report identified by reportId*

<h3 id="getreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|The ID of the type of report to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "info-contact",
  "scope": "spectral/postman/postman-library"
}
```

> 404 Response

```json
{
  "status": 404,
  "title": "Not Found",
  "details": "Resource /reports/not%20found%20example not found",
  "instance": "/reports/not%20found%20example",
  "type": "http://localhost:3000/NotFoundError"
}
```

> default Response

```json
{
  "status": 500,
  "title": "Internal Server Error",
  "details": "Error fetching /reports/info-contact",
  "instance": "/reports/info-contact",
  "type": "http://localhost:3000/InternalServerError"
}
```

<h3 id="getreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details of a type of report|[Report](#schemareport)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Report type not found|[ProblemDetailsError](#schemaproblemdetailserror)|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="postman-open-technologies-knowledge-base-api-statistic">statistic</h1>

## getStatistics

<a id="opIdgetStatistics"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/statistics/{reportId} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/statistics/{reportId} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/statistics/{reportId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/statistics/{reportId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/statistics/{reportId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/statistics/{reportId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/statistics/{reportId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/statistics/{reportId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /statistics/{reportId}`

*Retrieve a specific type of statistics report identified by `reportId`*

<h3 id="getstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|The type of statistics report to retrieve|

> Example responses

> 200 Response

```json
{
  "info": {
    "id": "info-contact",
    "scope": "spectral/postman/postman-library"
  },
  "data": {
    "creationDateTime": "2023-05-18T12:39:28.414Z",
    "total": 29720,
    "count": 18344
  }
}
```

> 404 Response

```json
{
  "status": 404,
  "title": "Not Found",
  "details": "Resource /statistics/not%20found%20example not found",
  "instance": "/statistics/not%20found%20example",
  "type": "http://localhost:3000/NotFoundError"
}
```

> default Response

```json
{
  "status": 500,
  "title": "Internal Server Error",
  "details": "Error fetching /statistics/info-contact",
  "instance": "/statistics/info-contact",
  "type": "http://localhost:3000/InternalServerError"
}
```

<h3 id="getstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The statistics details|[Statistic](#schemastatistic)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Statistics report type not found|[ProblemDetailsError](#schemaproblemdetailserror)|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="postman-open-technologies-knowledge-base-api-monitoring">monitoring</h1>

## knockknock

<a id="opIdknockknock"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/knockknock \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/knockknock HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/knockknock',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/knockknock',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/knockknock', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/knockknock', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/knockknock");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/knockknock", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /knockknock`

*This path is used to check if the API is running*

> Example responses

> 200 Response

```json
{
  "response": "Who is there?"
}
```

> default Response

```json
{
  "status": 500,
  "title": "Internal Server Error",
  "details": "Error fetching /knockknock",
  "instance": "/knockknock",
  "type": "http://localhost:3000/InternalServerError"
}
```

<h3 id="knockknock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A static response|[KnockKnock](#schemaknockknock)|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "id": "string",
  "scope": "string",
  "description": "string",
  "output": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|scope|string|true|none|none|
|description|string|false|none|none|
|output|string|false|none|none|

<h2 id="tocS_Reports">Reports</h2>
<!-- backwards compatibility -->
<a id="schemareports"></a>
<a id="schema_Reports"></a>
<a id="tocSreports"></a>
<a id="tocsreports"></a>

```json
[
  {
    "id": "string",
    "scope": "string",
    "description": "string",
    "output": "string"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Report](#schemareport)]|false|none|none|

<h2 id="tocS_Statistic">Statistic</h2>
<!-- backwards compatibility -->
<a id="schemastatistic"></a>
<a id="schema_Statistic"></a>
<a id="tocSstatistic"></a>
<a id="tocsstatistic"></a>

```json
{
  "info": {
    "id": "string",
    "scope": "string",
    "description": "string",
    "output": "string"
  },
  "data": {
    "creationDateTime": "2019-08-24T14:15:22Z",
    "total": 0,
    "count": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[Report](#schemareport)|false|none|none|
|data|[StatisticData](#schemastatisticdata)|false|none|none|

<h2 id="tocS_StatisticData">StatisticData</h2>
<!-- backwards compatibility -->
<a id="schemastatisticdata"></a>
<a id="schema_StatisticData"></a>
<a id="tocSstatisticdata"></a>
<a id="tocsstatisticdata"></a>

```json
{
  "creationDateTime": "2019-08-24T14:15:22Z",
  "total": 0,
  "count": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDateTime|string(date-time)|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|

<h2 id="tocS_ProblemDetailsError">ProblemDetailsError</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetailserror"></a>
<a id="schema_ProblemDetailsError"></a>
<a id="tocSproblemdetailserror"></a>
<a id="tocsproblemdetailserror"></a>

```json
{
  "status": 0,
  "title": "string",
  "details": "string",
  "instance": "string",
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|none|
|title|string|true|none|none|
|details|string|true|none|none|
|instance|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_KnockKnock">KnockKnock</h2>
<!-- backwards compatibility -->
<a id="schemaknockknock"></a>
<a id="schema_KnockKnock"></a>
<a id="tocSknockknock"></a>
<a id="tocsknockknock"></a>

```json
{
  "response": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|string|true|none|none|

