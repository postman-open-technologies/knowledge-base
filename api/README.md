---
title: Postman Open Technologies Knowledge Base API v0.2.0
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

<h1 id="postman-open-technologies-knowledge-base-api">Postman Open Technologies Knowledge Base API v0.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API that lets you access the information available on the Knowledge Base.

Please refer to the [contributing instructions](CONTRIBUTING.md) for information on how to install the API server and run it.

Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a>

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
{}
```

<h3 id="getopenapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The OpenAPI definition|Inline|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<h3 id="getopenapi-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="postman-open-technologies-knowledge-base-api-questions">questions</h1>

## listQuestion

<a id="opIdlistQuestion"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/questions \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/questions HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/questions',
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

result = RestClient.get 'http://localhost:3000/questions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/questions', headers = headers)

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
    $response = $client->request('GET','http://localhost:3000/questions', array(
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
URL obj = new URL("http://localhost:3000/questions");
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
    req, err := http.NewRequest("GET", "http://localhost:3000/questions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /questions`

*List all available questions*

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "description": "string",
    "output": "string",
    "scope": "string"
  }
]
```

<h3 id="listquestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of available questions|[Questions](#schemaquestions)|
|default|Default|Error|[ProblemDetailsError](#schemaproblemdetailserror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="postman-open-technologies-knowledge-base-api-question">question</h1>

## getQuestion

<a id="opIdgetQuestion"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/questions/{questionId} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/questions/{questionId} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:3000/questions/{questionId}',
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

result = RestClient.get 'http://localhost:3000/questions/{questionId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/questions/{questionId}', headers = headers)

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
    $response = $client->request('GET','http://localhost:3000/questions/{questionId}', array(
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
URL obj = new URL("http://localhost:3000/questions/{questionId}");
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
    req, err := http.NewRequest("GET", "http://localhost:3000/questions/{questionId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /questions/{questionId}`

*Retrieve a specific question identified by questionId*

<h3 id="getquestion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|questionId|path|string|true|The ID of the question to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "description": "string",
  "output": "string",
  "scope": "string"
}
```

<h3 id="getquestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details of a question|[Question](#schemaquestion)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Question not found|[ProblemDetailsError](#schemaproblemdetailserror)|
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
  "response": "string"
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

<h2 id="tocS_Question">Question</h2>
<!-- backwards compatibility -->
<a id="schemaquestion"></a>
<a id="schema_Question"></a>
<a id="tocSquestion"></a>
<a id="tocsquestion"></a>

```json
{
  "id": "string",
  "description": "string",
  "output": "string",
  "scope": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|description|string|true|none|none|
|output|string|true|none|none|
|scope|string|true|none|none|

<h2 id="tocS_Questions">Questions</h2>
<!-- backwards compatibility -->
<a id="schemaquestions"></a>
<a id="schema_Questions"></a>
<a id="tocSquestions"></a>
<a id="tocsquestions"></a>

```json
[
  {
    "id": "string",
    "description": "string",
    "output": "string",
    "scope": "string"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Question](#schemaquestion)]|false|none|none|

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

