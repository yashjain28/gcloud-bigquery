
# ipm package: gcloud-bigquery

## Overview

BigQuery is Google's serverless, highly scalable, low cost enterprise data warehouse designed to make all your data analysts productive.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

_Add any setup instructions, such as an API Key_

## API<a name="BigQuery"></a>

## BigQuery(auth_key)
BigQuery object requires an API Key

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| auth_key | <code>string</code> | is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization |


* [BigQuery(auth_key)](#BigQuery)
    * [.delete(projectID, datasetID, callback)](#BigQuery+delete)
    * [.get(projectID, datasetID, callback)](#BigQuery+get)
    * [.insert(projectID, requestBody, callback)](#BigQuery+insert)
    * [.insertAll(projectID, datasetID, tableID, requestBody, callback)](#BigQuery+insertAll)
    * [.list(projectID, callback)](#BigQuery+list)
    * [.update(projectID, datasetID, requestBody, callback)](#BigQuery+update)

<a name="BigQuery+delete"></a>

### bigQuery.delete(projectID, datasetID, callback)
Datasets - Delete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset, 
you must delete all its tables, either manually or by specifying deleteContents. 
Immediately after deletion, you can create another dataset with the same name.

For more information https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete

**Kind**: instance method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| projectID | <code>string</code> | name of the project |
| datasetID | <code>string</code> | name of the dataset you want to delete in the project |
| callback | <code>callback</code> | callback with function signature: (err, data) |

**Example**  
```js
response
If successful, this method returns an empty response body.
```
<a name="BigQuery+get"></a>

### bigQuery.get(projectID, datasetID, callback)
Datasets: get - Returns the dataset specified by datasetID

For more information https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get

**Kind**: instance method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| projectID | <code>string</code> | name of the project |
| datasetID | <code>string</code> | name of the dataset |
| callback | <code>any</code> | callback with function signature: (err, data) |

<a name="BigQuery+insert"></a>

### bigQuery.insert(projectID, requestBody, callback)
Dataset - Insert

Insert - Creates a new empty dataset


For more information: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert

**Kind**: instance method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| projectID | <code>string</code> | name of the project |
| requestBody | <code>Object</code> | In the request body, supply a Datasets resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource |
| callback | <code>callback</code> | callback with function signature: (err, data) |

**Example**  
```js
response:-
on Success: returns a Dataset resource
on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors
```
<a name="BigQuery+insertAll"></a>

### bigQuery.insertAll(projectID, datasetID, tableID, requestBody, callback)
Tabledata: insertAll
insertAll - Streams data into BigQuery one record at a time without needing to run a load job. 

For more information: https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll

**Kind**: instance method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| projectID | <code>string</code> |  |
| datasetID | <code>string</code> |  |
| tableID | <code>string</code> | tableID in the dataset selected above |
| requestBody | <code>Object</code> | {     "rows":    [      {        "json":        v{          "column1": "value",          "column2": "value"        }      }    ]   } |
| callback | <code>callback</code> | callback with function signature: (err, data) |

<a name="BigQuery+list"></a>

### bigQuery.list(projectID, callback)
Datasets: list

List: Lists all datasets in the specified project to which you have been granted the READER dataset role.

For more Information: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list

**Kind**: instance method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| projectID | <code>string</code> |  |
| callback | <code>callback</code> | - callback with function signature: (err, data) |

**Example**  
```js
response: 
  {
   "kind": "bigquery#datasetList",
   "etag": etag,
   "nextPageToken": string,
   "datasets": [
    {
      "kind": "bigquery#dataset",
      "id": string,
      "datasetReference": {
        "datasetId": string,
        "projectId": string
      },
      "labels": {
        (key): string
      },
      "friendlyName": string
    }
   ]
  }
```
<a name="BigQuery+update"></a>

### bigQuery.update(projectID, datasetID, requestBody, callback)
Update: Updates information in an existing dataset. The update method replaces the entire dataset resource,
        whereas the patch method only replaces fields that are provided in the submitted dataset resource.

For more Information: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update

**Kind**: instance method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| projectID | <code>string</code> |  |
| datasetID | <code>string</code> |  |
| requestBody | <code>Object</code> | Should provide Dataset resource object with the format    {     "kind": "bigquery#dataset",     "etag": etag,     "id": string,     "selfLink": string,     "datasetReference": {         "datasetId": string,         "projectId": string     },     "friendlyName": string,     "description": string,     "defaultTableExpirationMs": long,     "labels": {         (key): string     },     "access": [         {         "role": string,         "userByEmail": string,         "groupByEmail": string,         "domain": string,         "specialGroup": string,         "view": {             "projectId": string,             "datasetId": string,             "tableId": string         }         }     ],     "creationTime": long,     "lastModifiedTime": long,     "location": string   } |
| callback | <code>callback</code> | - callback with function signature: (err, data) |



## Usage

_Describe assets_

### Code Services

### Code Libraries

### Portals

### Collections

### ...

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
