
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
