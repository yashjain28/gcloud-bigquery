
# ipm package: gcloud-bigquery

## Overview

BigQuery is Google's serverless, highly scalable, low cost enterprise data warehouse designed to make all your data analysts productive.

Few keywords and basic knowledge to get started with Google BigQuery:
1. Projects: Projects are top-level containers in Google Cloud Platform. They store information about billing and authorized users, and they contain BigQuery data. Each project has a name and a unique ID.

2. Datasets: A dataset is contained within a specific project. Datasets are top-level containers that are used to organize and control access to your [tables](https://cloud.google.com/bigquery/docs/tables) and [views](https://cloud.google.com/bigquery/docs/views). A table or view must belong to a dataset, so you need to create at least one dataset before loading data into BigQuery. For more information on datasets click [here](https://cloud.google.com/bigquery/docs/datasets-intro).

To get hands-on creating a project, dataset in BigQuery follow the steps given [here](https://cloud.google.com/bigquery/quickstart-web-ui) for a custom data. Once, you have sample project and dataset ready, try this ClearBlade Library functions. Any suggestions or addition of new methods go ahead and create a pull request. For further support, comment on this repo.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

API key can be generated/accessed by going to this page: https://cloud.google.com/bigquery/docs/authorization
 
Another simple way: Copy and paste the following command 'gcloud auth application-default print-access-token' in Google Cloud Platform shell!


## API<a name="BigQuery"></a>

## Functions

<dl>
<dt><a href="#BigQuery">BigQuery(options)</a> ⇒ <code>Object</code></dt>
<dd><p>BigQuery object requires an API Key</p>
</dd>
<dt><a href="#ExampleDeleteDataset">ExampleDeleteDataset(req, resp)</a></dt>
<dd><p>Deletes the current dataset which is being referenced</p>
</dd>
<dt><a href="#ExampleGetDataset">ExampleGetDataset(req, resp)</a></dt>
<dd><p>Fetches the given dataset in a project</p>
</dd>
<dt><a href="#ExampleInsertAllRows">ExampleInsertAllRows(req, resp)</a></dt>
<dd><p>Inserts all the rows in the given table</p>
</dd>
<dt><a href="#ExampleInsertDataset">ExampleInsertDataset(req, resp)</a></dt>
<dd><p>Creates a new Dataset in the current project!</p>
</dd>
<dt><a href="#ExampleListAllDataset">ExampleListAllDataset(req, resp)</a></dt>
<dd><p>List All datasets in a project</p>
</dd>
<dt><a href="#ExampleUpdateDataset">ExampleUpdateDataset(req, resp)</a></dt>
<dd><p>Updates i.e. Replaces the current dataset with the passed dataset</p>
</dd>
</dl>

<a name="BigQuery"></a>

## BigQuery(options) ⇒ <code>Object</code>
BigQuery object requires an API Key

**Kind**: global function  
**Returns**: <code>Object</code> - Project  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | {      authToken: YOUR_BIGQUERY_AUTH_TOKEN (is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)      (optional parameters)      ,projectID: YOUR_PROJECT_ID      ,datasetID: DATASET_IN_ABOVE_PROJECT      ,tableID: TABLE_IN_ABOVE_DATASET  } |

**Example**  
```js
:- Inside of a ClearBlade service

var project = BigQuery(options).initialize();

Tip: If user wants to work with 
1. Another dataset(assuming it exists) in a project then it can be done by:
     var anotherDS = project.Dataset('YOUR_DATASETID'); // returns a Dataset Object !
2. Another table(assuming it exists) in a dataset then it can be done by:
     var anotherTable = project.Dataset.Table('YOUR_TABLEID');
```

* [BigQuery(options)](#BigQuery) ⇒ <code>Object</code>
    * [~Project(projectID)](#BigQuery..Project) ⇒ <code>Object</code>
        * [~Dataset(datasetID)](#BigQuery..Project..Dataset) ⇒ <code>Object</code>
            * [~Table(tableID)](#BigQuery..Project..Dataset..Table) ⇒ <code>Object</code>
                * [~InsertAll(requestBody, callback)](#BigQuery..Project..Dataset..Table..InsertAll)
            * [~Get(callback)](#BigQuery..Project..Dataset..Get) ⇒
            * [~Delete(callback)](#BigQuery..Project..Dataset..Delete)
            * [~Insert(requestBody, callback)](#BigQuery..Project..Dataset..Insert) ⇒
            * [~Update(requestBody, callback)](#BigQuery..Project..Dataset..Update)
            * [~List(callback)](#BigQuery..Project..Dataset..List)
        * [~List(callback)](#BigQuery..Project..List)

<a name="BigQuery..Project"></a>

### BigQuery~Project(projectID) ⇒ <code>Object</code>
**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  
**Returns**: <code>Object</code> - - consists of Dataset Object and other methods for Project Object  

| Param | Type |
| --- | --- |
| projectID | <code>string</code> | 


* [~Project(projectID)](#BigQuery..Project) ⇒ <code>Object</code>
    * [~Dataset(datasetID)](#BigQuery..Project..Dataset) ⇒ <code>Object</code>
        * [~Table(tableID)](#BigQuery..Project..Dataset..Table) ⇒ <code>Object</code>
            * [~InsertAll(requestBody, callback)](#BigQuery..Project..Dataset..Table..InsertAll)
        * [~Get(callback)](#BigQuery..Project..Dataset..Get) ⇒
        * [~Delete(callback)](#BigQuery..Project..Dataset..Delete)
        * [~Insert(requestBody, callback)](#BigQuery..Project..Dataset..Insert) ⇒
        * [~Update(requestBody, callback)](#BigQuery..Project..Dataset..Update)
        * [~List(callback)](#BigQuery..Project..Dataset..List)
    * [~List(callback)](#BigQuery..Project..List)

<a name="BigQuery..Project..Dataset"></a>

#### Project~Dataset(datasetID) ⇒ <code>Object</code>
**Kind**: inner method of [<code>Project</code>](#BigQuery..Project)  
**Returns**: <code>Object</code> - - consists of Table Object and other methods for Dataset Object  

| Param | Type |
| --- | --- |
| datasetID | <code>string</code> | 


* [~Dataset(datasetID)](#BigQuery..Project..Dataset) ⇒ <code>Object</code>
    * [~Table(tableID)](#BigQuery..Project..Dataset..Table) ⇒ <code>Object</code>
        * [~InsertAll(requestBody, callback)](#BigQuery..Project..Dataset..Table..InsertAll)
    * [~Get(callback)](#BigQuery..Project..Dataset..Get) ⇒
    * [~Delete(callback)](#BigQuery..Project..Dataset..Delete)
    * [~Insert(requestBody, callback)](#BigQuery..Project..Dataset..Insert) ⇒
    * [~Update(requestBody, callback)](#BigQuery..Project..Dataset..Update)
    * [~List(callback)](#BigQuery..Project..Dataset..List)

<a name="BigQuery..Project..Dataset..Table"></a>

##### Dataset~Table(tableID) ⇒ <code>Object</code>
**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Project..Dataset)  
**Returns**: <code>Object</code> - - consists of methods for the Table Object  

| Param | Type |
| --- | --- |
| tableID | <code>string</code> | 

<a name="BigQuery..Project..Dataset..Table..InsertAll"></a>

###### Table~InsertAll(requestBody, callback)
Tabledata: insertAll
insertAll - Streams data into BigQuery one record at a time without needing to run a load job.

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll

**Kind**: inner method of [<code>Table</code>](#BigQuery..Project..Dataset..Table)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> | {                         "kind": "bigquery#tableDataInsertAllRequest",                         "skipInvalidRows": boolean,                         "ignoreUnknownValues": boolean,                         "templateSuffix": string,                         "rows": [                             {                                 "insertId": string,                                 "json": {                                     (key): (value)                                 }                             }                         ]                     } |
| callback | <code>callback</code> |  |

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
                    project.Dataset.InsertAll(requestBody, function(err, response){
                        if(!err){
                            resp.success(response);
                        }
                        else{
                            resp.error(err);
                        }
                   });
```
<a name="BigQuery..Project..Dataset..Get"></a>

##### Dataset~Get(callback) ⇒
Datasets.Get - Returns the dataset specified by datasetID
For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Project..Dataset)  
**Returns**: (in callback) on success, a Dataset resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
                project.Dataset.Get(function(err, response){
                    if(!err){
                        resp.success(response); 
                    } 
                    else{
                        resp.error(err); 
                    }
                });
```
<a name="BigQuery..Project..Dataset..Delete"></a>

##### Dataset~Delete(callback)
Datasets - Delete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset,
you must delete all its tables, either manually or by specifying deleteContents.
Immediately after deletion, you can create another dataset with the same name.


For more Information regarding optional parameters and response structure:
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete             *

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Project..Dataset)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
similar to Dataset.Get()
```
<a name="BigQuery..Project..Dataset..Insert"></a>

##### Dataset~Insert(requestBody, callback) ⇒
Dataset - Insert

Insert - Creates a new empty dataset


For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Project..Dataset)  
**Returns**: (in callback)
on Success: returns a Dataset resource
on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors  

| Param | Type |
| --- | --- |
| requestBody | <code>Object</code> | 
| callback | <code>callback</code> | 

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
                var requestBody = {
                    "kind": "bigquery#dataset",
                    "etag": etag,
                    "id": string,
                    "selfLink": string,
                    "datasetReference": {
                        "datasetId": string,
                        "projectId": string
                    },
                    "friendlyName": string,
                    "description": string,
                    "defaultTableExpirationMs": long,
                    "labels": {
                        (key): string
                    },
                    "access": [
                        {
                        "role": string,
                        "userByEmail": string,
                        "groupByEmail": string,
                        "domain": string,
                        "specialGroup": string,
                        "view": {
                            "projectId": string,
                            "datasetId": string,
                            "tableId": string
                        }
                        }
                    ],
                    "creationTime": long,
                    "lastModifiedTime": long,
                    "location": string
                }

                project.Dataset.Insert(requestBody, function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
                });
```
<a name="BigQuery..Project..Dataset..Update"></a>

##### Dataset~Update(requestBody, callback)
Update: Updates information in an existing dataset. The update method replaces the entire dataset resource,
whereas the patch method only replaces fields that are provided in the submitted dataset resource.

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Project..Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> | Should provide Dataset resource object with the format               {                 "kind": "bigquery#dataset",                 "etag": etag,                 "id": string,                 "selfLink": string,                 "datasetReference": {                     "datasetId": string,                     "projectId": string                 },                 "friendlyName": string,                 "description": string,                 "defaultTableExpirationMs": long,                 "labels": {                     (key): string                 },                 "access": [                     {                     "role": string,                     "userByEmail": string,                     "groupByEmail": string,                     "domain": string,                     "specialGroup": string,                     "view": {                         "projectId": string,                         "datasetId": string,                         "tableId": string                     }                     }                 ],                 "creationTime": long,                 "lastModifiedTime": long,                 "location": string               } |
| callback | <code>callback</code> |  |

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
              project.Dataset.update(requestBody, function(err, response){
                  if(!err){
                      resp.success(response);
                  }
                  else{
                      resp.error(err);
                  }
              });
```
<a name="BigQuery..Project..Dataset..List"></a>

##### Dataset~List(callback)
Datasets: list

List: Lists all datasets in the specified project to which you have been granted the READER dataset role.

For more Information regarding optional parameters and response structure
 https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Project..Dataset)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
               project.Dataset.List(function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
               })
 
```
<a name="BigQuery..Project..List"></a>

#### Project~List(callback)
Projects - List

Lists all projects to which you have been granted any project role.
For more Information regarding optional parameters and response structure
https://cloud.google.com/bigquery/docs/reference/rest/v2/projects/list

**Kind**: inner method of [<code>Project</code>](#BigQuery..Project)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
               project.List(function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
               })
```
<a name="ExampleDeleteDataset"></a>

## ExampleDeleteDataset(req, resp)
Deletes the current dataset which is being referenced

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| resp | <code>callback</code> | If successful, this method returns an empty response body. |

<a name="ExampleGetDataset"></a>

## ExampleGetDataset(req, resp)
Fetches the given dataset in a project

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| resp | <code>callback</code> | Dataset Resource object is returned! |

<a name="ExampleInsertAllRows"></a>

## ExampleInsertAllRows(req, resp)
Inserts all the rows in the given table

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | requestBody:{                 "kind": "bigquery#tableDataInsertAllRequest",                 "skipInvalidRows": boolean,                 "ignoreUnknownValues": boolean,                 "templateSuffix": string,                 "rows": [                     {                     "insertId": string,                     "json": {                         (key): (value)                     }                     }                 ]              } |
| resp | <code>callback</code> | expected response    {         "kind": "bigquery#tableDataInsertAllResponse",         "insertErrors": [             {             "index": unsigned integer,             "errors": [                 {                 "reason": string,                 "location": string,                 "debugInfo": string,                 "message": string                 }             ]             }         ]    } |

<a name="ExampleInsertDataset"></a>

## ExampleInsertDataset(req, resp)
Creates a new Dataset in the current project!

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | requestBody:         {             "kind": "bigquery#dataset",             "etag": etag,             "id": string,             "selfLink": string,             "datasetReference": {                  "datasetId": string,                 "projectId": string             },             "friendlyName": string,             "description": string,             "defaultTableExpirationMs": long,             "labels": {                 (key): string             },             "access": [                 {                 "role": string,                 "userByEmail": string,                 "groupByEmail": string,                 "domain": string,                 "specialGroup": string,                 "view": {                     "projectId": string,                     "datasetId": string,                     "tableId": string                 }                 }             ],             "creationTime": long,             "lastModifiedTime": long,             "location": string         } |
| resp | <code>callback</code> | If successful, this method returns a Datasets resource in the response body,  or an error message. |

<a name="ExampleListAllDataset"></a>

## ExampleListAllDataset(req, resp)
List All datasets in a project

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| resp | <code>callback</code> | If successful, this method returns a response body with the following structure: {         "kind": "bigquery#datasetList",         "etag": etag,         "nextPageToken": string,         "datasets": [             {             "kind": "bigquery#dataset",             "id": string,             "datasetReference": {                 "datasetId": string,                 "projectId": string             },             "labels": {                 (key): string             },             "friendlyName": string             }         ]     } |

<a name="ExampleUpdateDataset"></a>

## ExampleUpdateDataset(req, resp)
Updates i.e. Replaces the current dataset with the passed dataset

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | body contains the dataset you want to replace it with requestBody: {             "kind": "bigquery#dataset",             "etag": etag,             "id": string,             "selfLink": string,             "datasetReference": {  //REQUIRED                 "datasetId": string,                 "projectId": string             },             "friendlyName": string,             "description": string,             "defaultTableExpirationMs": long,             "labels": {                 (key): string             },             "access": [                 {                 "role": string,                 "userByEmail": string,                 "groupByEmail": string,                 "domain": string,                 "specialGroup": string,                 "view": {                     "projectId": string,                     "datasetId": string,                     "tableId": string                 }                 }             ],             "creationTime": long,             "lastModifiedTime": long,             "location": string         } |
| resp | <code>callback</code> |  |



## Usage
These are sample services which can be executed once the user setups the dummy environment. Steps to create the same:
    A. Create a new project
    B. Create a new dataset in that project by loading custom dataset following the procedure given [here](https://cloud.google.com/bigquery/quickstart-web-ui#download_custom_data). 
  
Assets:
  Services: All services are with-respect-to a project. All the services below shows how to - 
  1. ExampleDeleteDataset: delete a dataset.
  2. ExampleGetDataset: get a particular dataset.    
  3. ExampleInsertDataset: insert a dataset.
  4. ExampleInsertAllRows: insert rows in a table of dataset.
  5. ExampleListAllDataset: list all datasets.
  6. ExampleUpdateDataset: updates(generally replaces) an existing dataset.
  
### Code Services

### Code Libraries

### Portals

### Collections

### ...

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
