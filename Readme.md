
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
If you already have a GCloud account and the CLI set up, API key can be generated/accessed by going to this page: https://cloud.google.com/bigquery/docs/authorization
 
Another simple way: Copy and paste the following command 'gcloud auth application-default print-access-token' in Google Cloud Platform shell!


## API<a name="BigQuery"></a>
<a name="bigQuery"></a>

## bigQuery ⇒ [<code>bigQuery</code>](#bigQuery)
BigQuery object requires an API Key and a projectID to initialize!

**Kind**: global typedef  
**Returns**: [<code>bigQuery</code>](#bigQuery) - - a bigquery instance is returned on instantiation!  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| projectID | <code>string</code> | 

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Table | <code>table</code> | a table object |
| Dataset | <code>dataset</code> | a dataset object |

**Example**  
```js
:- Inside of a ClearBlade service

var bigQ = BigQuery(authToken, projectID);

 
```
<a name="bigQuery"></a>

## bigQuery ⇒ [<code>bigQuery</code>](#bigQuery)
BigQuery object requires an API Key and a projectID to initialize!

**Kind**: global typedef  
**Returns**: [<code>bigQuery</code>](#bigQuery) - - a bigquery instance is returned on instantiation!  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| projectID | <code>string</code> | 

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Table | <code>table</code> | a table object |
| Dataset | <code>dataset</code> | a dataset object |

**Example**  
```js
:- Inside of a ClearBlade service

var bigQ = BigQuery(authToken, projectID);

 
```
<a name="BigQuery"></a>

## BigQuery(authToken, projectID)
BigQuery object requires an API Key and a projectID to initialize!

**Kind**: global function  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| projectID | <code>string</code> | 

**Example**  
```js
:- Inside of a ClearBlade service

var bigQ = BigQuery(authToken, projectID);

 
```

* [BigQuery(authToken, projectID)](#BigQuery)
    * [~Dataset(datasetID)](#BigQuery..Dataset)
        * [~Table(tableID)](#BigQuery..Dataset..Table)
            * [~InsertAll(requestBody, callback)](#BigQuery..Dataset..Table..InsertAll)
        * [~Get(callback)](#BigQuery..Dataset..Get) ⇒
        * [~Delete(callback)](#BigQuery..Dataset..Delete)
        * [~Update(requestBody, callback)](#BigQuery..Dataset..Update)
        * [~ListTables(callback)](#BigQuery..Dataset..ListTables)
    * [~InsertDataset(requestBody, callback)](#BigQuery..InsertDataset)
    * [~ListDatasets(callback)](#BigQuery..ListDatasets)

<a name="BigQuery..Dataset"></a>

### BigQuery~Dataset(datasetID)
Dataset contains Table and methods for handling datasets

**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type |
| --- | --- |
| datasetID | <code>string</code> | 

**Example**  
```js
var dataset = BigQuery(authToken, projectID).Dataset('YOUR_DATASET');
```

* [~Dataset(datasetID)](#BigQuery..Dataset)
    * [~Table(tableID)](#BigQuery..Dataset..Table)
        * [~InsertAll(requestBody, callback)](#BigQuery..Dataset..Table..InsertAll)
    * [~Get(callback)](#BigQuery..Dataset..Get) ⇒
    * [~Delete(callback)](#BigQuery..Dataset..Delete)
    * [~Update(requestBody, callback)](#BigQuery..Dataset..Update)
    * [~ListTables(callback)](#BigQuery..Dataset..ListTables)

<a name="BigQuery..Dataset..Table"></a>

#### Dataset~Table(tableID)
Table contains methods for handling tables

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type |
| --- | --- |
| tableID | <code>string</code> | 

**Example**  
```js
var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
```
<a name="BigQuery..Dataset..Table..InsertAll"></a>

##### Table~InsertAll(requestBody, callback)
Tabledata: insertAll
insertAll - Streams data into BigQuery one record at a time without needing to run a load job.

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll

**Kind**: inner method of [<code>Table</code>](#BigQuery..Dataset..Table)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> | {                     "kind": "bigquery#tableDataInsertAllRequest",                     "skipInvalidRows": boolean,                     "ignoreUnknownValues": boolean,                     "templateSuffix": string,                     "rows": [                         {                             "insertId": string,                             "json": {                                 (key): (value)                             }                         }                     ]                 } |
| callback | <code>callback</code> |  |

**Example**  
```js
:- Inside of a ClearBlade service, after initialization of the Table object
                    table.InsertAll(requestBody, function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
                });
```
<a name="BigQuery..Dataset..Get"></a>

#### Dataset~Get(callback) ⇒
Datasets.Get - Returns the dataset specified by datasetID
For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  
**Returns**: (in callback) on success, a Dataset resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
            dataset.Get(function(err, response){
                if(!err){
                    resp.success(response);
                } 
                else{
                    resp.error(err); 
                }
            });
```
<a name="BigQuery..Dataset..Delete"></a>

#### Dataset~Delete(callback)
Datasets - Delete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset,
you must delete all its tables, either manually or by specifying deleteContents.
Immediately after deletion, you can create another dataset with the same name.


For more Information regarding optional parameters and response structure:
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete             *

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
similar to dataset.Get()
```
<a name="BigQuery..Dataset..Update"></a>

#### Dataset~Update(requestBody, callback)
Update: Updates information in an existing dataset. The update method replaces the entire dataset resource,
whereas the patch method only replaces fields that are provided in the submitted dataset resource.

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> | Should provide Dataset resource object with the format             {             "kind": "bigquery#dataset",             "etag": etag,             "id": string,             "selfLink": string,             "datasetReference": {                 "datasetId": string,                 "projectId": string             },             "friendlyName": string,             "description": string,             "defaultTableExpirationMs": long,             "labels": {                 (key): string             },             "access": [                 {                 "role": string,                 "userByEmail": string,                 "groupByEmail": string,                 "domain": string,                 "specialGroup": string,                 "view": {                     "projectId": string,                     "datasetId": string,                     "tableId": string                 }                 }             ],             "creationTime": long,             "lastModifiedTime": long,             "location": string             } |
| callback | <code>callback</code> |  |

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
            dataset.update(requestBody, function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            });
```
<a name="BigQuery..Dataset..ListTables"></a>

#### Dataset~ListTables(callback)
**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
Inside of a ClearBlade service, after the initialization
            dataset.ListTables(function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            });
```
<a name="BigQuery..InsertDataset"></a>

### BigQuery~InsertDataset(requestBody, callback)
BigQuery - InsertDataset

Insert - Creates a new empty dataset


For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *

**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> |  |
| callback | <code>callback</code> | (in callback) on Success: returns a Dataset resource on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors |

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

           bigQ.Insert(requestBody, function(err, response){
               if(!err){
                   resp.success(response);
               }
               else{
                   resp.error(err);
               }
           });
```
<a name="BigQuery..ListDatasets"></a>

### BigQuery~ListDatasets(callback)
BigQuery: ListDatasets

ListDatasets: Lists all datasets in the specified project to which you have been granted the READER dataset role.

For more Information regarding optional parameters and response structure
 https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list

**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
:- Inside of a ClearBlade service, after the initialization
             bigQ.List(function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            })
 
```
<a name="BigQuery"></a>

## BigQuery(authToken, projectID)
BigQuery object requires an API Key and a projectID to initialize!

**Kind**: global function  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| projectID | <code>string</code> | 

**Example**  
```js
Inside of a ClearBlade service

var bigQ = BigQuery(authToken, projectID);

 
```

* [BigQuery(authToken, projectID)](#BigQuery)
    * [~Dataset(datasetID)](#BigQuery..Dataset)
        * [~Table(tableID)](#BigQuery..Dataset..Table)
            * [~InsertAll(requestBody, callback)](#BigQuery..Dataset..Table..InsertAll)
        * [~Get(callback)](#BigQuery..Dataset..Get) ⇒
        * [~Delete(callback)](#BigQuery..Dataset..Delete)
        * [~Update(requestBody, callback)](#BigQuery..Dataset..Update)
        * [~ListTables(callback)](#BigQuery..Dataset..ListTables)
    * [~InsertDataset(requestBody, callback)](#BigQuery..InsertDataset)
    * [~ListDatasets(callback)](#BigQuery..ListDatasets)

<a name="BigQuery..Dataset"></a>

### BigQuery~Dataset(datasetID)
Dataset contains Table and methods for handling datasets

**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type |
| --- | --- |
| datasetID | <code>string</code> | 

**Example**  
```js
var dataset = BigQuery(authToken, projectID).Dataset('YOUR_DATASET');
```

* [~Dataset(datasetID)](#BigQuery..Dataset)
    * [~Table(tableID)](#BigQuery..Dataset..Table)
        * [~InsertAll(requestBody, callback)](#BigQuery..Dataset..Table..InsertAll)
    * [~Get(callback)](#BigQuery..Dataset..Get) ⇒
    * [~Delete(callback)](#BigQuery..Dataset..Delete)
    * [~Update(requestBody, callback)](#BigQuery..Dataset..Update)
    * [~ListTables(callback)](#BigQuery..Dataset..ListTables)

<a name="BigQuery..Dataset..Table"></a>

#### Dataset~Table(tableID)
Table contains methods for handling tables

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type |
| --- | --- |
| tableID | <code>string</code> | 

**Example**  
```js
var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
```
<a name="BigQuery..Dataset..Table..InsertAll"></a>

##### Table~InsertAll(requestBody, callback)
Tabledata: insertAll
insertAll - Streams data into BigQuery one record at a time without needing to run a load job.

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll

**Kind**: inner method of [<code>Table</code>](#BigQuery..Dataset..Table)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> | {                     "kind": "bigquery#tableDataInsertAllRequest",                     "skipInvalidRows": boolean,                     "ignoreUnknownValues": boolean,                     "templateSuffix": string,                     "rows": [                         {                             "insertId": string,                             "json": {                                 (key): (value)                             }                         }                     ]                 } |
| callback | <code>callback</code> |  |

**Example**  
```js
Inside of a ClearBlade service, after initialization of the Table object
                    table.InsertAll(requestBody, function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
                });
```
<a name="BigQuery..Dataset..Get"></a>

#### Dataset~Get(callback) ⇒
Datasets.Get - Returns the dataset specified by datasetID
For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  
**Returns**: (in callback) on success, a Dataset resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
Inside of a ClearBlade service, after the initialization
            dataset.Get(function(err, response){
                if(!err){
                    resp.success(response);
                } 
                else{
                    resp.error(err); 
                }
            });
```
<a name="BigQuery..Dataset..Delete"></a>

#### Dataset~Delete(callback)
Datasets - Delete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset,
you must delete all its tables, either manually or by specifying deleteContents.
Immediately after deletion, you can create another dataset with the same name.


For more Information regarding optional parameters and response structure:
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete             *

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
similar to dataset.Get()
```
<a name="BigQuery..Dataset..Update"></a>

#### Dataset~Update(requestBody, callback)
Update: Updates information in an existing dataset. The update method replaces the entire dataset resource,
whereas the patch method only replaces fields that are provided in the submitted dataset resource.

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update

**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> | Should provide Dataset resource object with the format             {             "kind": "bigquery#dataset",             "etag": etag,             "id": string,             "selfLink": string,             "datasetReference": {                 "datasetId": string,                 "projectId": string             },             "friendlyName": string,             "description": string,             "defaultTableExpirationMs": long,             "labels": {                 (key): string             },             "access": [                 {                 "role": string,                 "userByEmail": string,                 "groupByEmail": string,                 "domain": string,                 "specialGroup": string,                 "view": {                     "projectId": string,                     "datasetId": string,                     "tableId": string                 }                 }             ],             "creationTime": long,             "lastModifiedTime": long,             "location": string             } |
| callback | <code>callback</code> |  |

**Example**  
```js
Inside of a ClearBlade service, after the initialization
            dataset.update(requestBody, function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            });
```
<a name="BigQuery..Dataset..ListTables"></a>

#### Dataset~ListTables(callback)
**Kind**: inner method of [<code>Dataset</code>](#BigQuery..Dataset)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
Inside of a ClearBlade service, after the initialization
            dataset.ListTables(function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            });
```
<a name="BigQuery..InsertDataset"></a>

### BigQuery~InsertDataset(requestBody, callback)
BigQuery - InsertDataset

Insert - Creates a new empty dataset


For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *

**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| requestBody | <code>Object</code> |  |
| callback | <code>callback</code> | (in callback) on Success: returns a Dataset resource on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors |

**Example**  
```js
Inside of a ClearBlade service, after the initialization
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

           bigQ.Insert(requestBody, function(err, response){
               if(!err){
                   resp.success(response);
               }
               else{
                   resp.error(err);
               }
           });
```
<a name="BigQuery..ListDatasets"></a>

### BigQuery~ListDatasets(callback)
BigQuery: ListDatasets

ListDatasets: Lists all datasets in the specified project to which you have been granted the READER dataset role.

For more Information regarding optional parameters and response structure
 https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list

**Kind**: inner method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type |
| --- | --- |
| callback | <code>callback</code> | 

**Example**  
```js
Inside of a ClearBlade service, after the initialization
             bigQ.List(function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            })
 
```


## Usage
These are sample services which can be executed once the user setups the dummy environment. Steps to create the same:
    A. Create a new project
    B. Create a new dataset in that project by loading custom dataset following the procedure given [here](https://cloud.google.com/bigquery/quickstart-web-ui#download_custom_data). 
  
### Code Services
Services: All services are with-respect-to a project. All the services below shows how to - 
  1. ExampleDeleteDataset: delete a dataset.
  2. ExampleGetDataset: get a particular dataset.    
  3. ExampleInsertDataset: insert a dataset.
  4. ExampleInsertAllRows: insert rows in a table of dataset.
  5. ExampleListAllDataset: list all datasets.
  6. ExampleUpdateDataset: updates(generally replaces) an existing dataset.
  
### Code Libraries

### Portals

### Collections

### ...

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
