
# ipm package: gcloud-bigquery

## Overview

Storing and querying massive datasets can be time consuming and expensive without the right hardware and infrastructure. Google BigQuery is an enterprise data warehouse that solves this problem by enabling super-fast SQL queries using the processing power of Google's infrastructure.

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

## Typedefs

<dl>
<dt><a href="#BigQuery">BigQuery</a></dt>
<dd><p>BigQuery is Google&#39;s serverless, highly scalable, low cost enterprise data warehouse designed to make all your data analysts productive.</p>
</dd>
<dt><a href="#Dataset">Dataset</a></dt>
<dd></dd>
<dt><a href="#Table">Table</a></dt>
<dd></dd>
<dt><a href="#TableRowObject">TableRowObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#DatasetResource">DatasetResource</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="BigQuery"></a>

## BigQuery
BigQuery is Google's serverless, highly scalable, low cost enterprise data warehouse designed to make all your data analysts productive.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| projectID | <code>string</code> | 

**Example**  
```js
var bigQ = BigQuery(authToken, projectID);
```

* [BigQuery](#BigQuery)
    * [.Dataset(datasetID)](#BigQuery.Dataset) ⇒ [<code>Dataset</code>](#Dataset)
    * [.insertDataset(newDatasetConfig, callback)](#BigQuery.insertDataset)
    * [.listDatasets(callback)](#BigQuery.listDatasets)

<a name="BigQuery.Dataset"></a>

### BigQuery.Dataset(datasetID) ⇒ [<code>Dataset</code>](#Dataset)
Dataset contains Table and methods for handling datasets

**Kind**: static method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type |
| --- | --- |
| datasetID | <code>string</code> | 

**Example**  
```js
var dataset = BigQuery(authToken, projectID).Dataset('YOUR_DATASET');
```
<a name="BigQuery.insertDataset"></a>

### BigQuery.insertDataset(newDatasetConfig, callback)
Creates a new empty dataset

For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *

**Kind**: static method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| newDatasetConfig | [<code>DatasetResource</code>](#DatasetResource) | The details for the dataset to be inserted in the Project |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
var newDatasetConfig = {
     "datasetReference": {
         "datasetId": "my_new_dataset",
         "projectId": "my_project_Id"
     }
 }

bigQ.insertDataset(newDatasetConfig, function(err, response){
     if(err){
        resp.error(err);
     }
     resp.success(response);
});
```
<a name="BigQuery.listDatasets"></a>

### BigQuery.listDatasets(callback)
Lists all datasets in the specified project to which you have been granted the READER dataset role.
For more Information regarding optional parameters and response structure
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list

**Kind**: static method of [<code>BigQuery</code>](#BigQuery)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
bigQ.listDatasets(function(err, response){
     if(err){
         resp.error(err);
     }
     resp.success(response);
});
```
<a name="Dataset"></a>

## Dataset
**Kind**: global typedef  

* [Dataset](#Dataset)
    * [.Table(tableID)](#Dataset.Table) ⇒ [<code>Table</code>](#Table)
        * [~insertAll(rowsToInsert, callback)](#Dataset.Table..insertAll)
    * [.getDataset(callback)](#Dataset.getDataset)
    * [.deleteDataset(callback)](#Dataset.deleteDataset)
    * [.updateDataset(updateDatasetConfig, callback)](#Dataset.updateDataset)
    * [.listTables(callback)](#Dataset.listTables)

<a name="Dataset.Table"></a>

### Dataset.Table(tableID) ⇒ [<code>Table</code>](#Table)
Table contains methods for handling tables

**Kind**: static method of [<code>Dataset</code>](#Dataset)  

| Param | Type |
| --- | --- |
| tableID | <code>string</code> | 

**Example**  
```js
var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
```
<a name="Dataset.Table..insertAll"></a>

#### Table~insertAll(rowsToInsert, callback)
Streams data into BigQuery one record at a time without needing to run a load job.
For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll

**Kind**: inner method of [<code>Table</code>](#Dataset.Table)  

| Param | Type | Description |
| --- | --- | --- |
| rowsToInsert | [<code>TableRowObject</code>](#TableRowObject) | Rows to be inserted in the table |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
var rowsToInsert = {
      "rows": [
          {
              "insertId": string,
              "json": {
                  (key): (value)
              }
          }
      ]
  }

  table.insertAll(rowsToInsert, function(err, response){
      if(err){
          resp.error(err);
      }
      resp.success(response); // 
  });
```
<a name="Dataset.getDataset"></a>

### Dataset.getDataset(callback)
Returns the dataset specified by datasetID
For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get

**Kind**: static method of [<code>Dataset</code>](#Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
dataset.getDataset(function(err, response){
    if(err){
        resp.error(err);
    }
    resp.success(response); // => DatasetResource
});
```
<a name="Dataset.deleteDataset"></a>

### Dataset.deleteDataset(callback)
Deletes the dataset specified by the datasetId value. Before you can delete a dataset,
you must delete all its tables, either manually or by specifying deleteContents.
Immediately after deletion, you can create another dataset with the same name.
For more Information regarding optional parameters and response structure:
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete             *

**Kind**: static method of [<code>Dataset</code>](#Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
dataset.deleteDataset(function(err, response){
    if(err){
        resp.error(err);
    }
    resp.success(response);
});
```
<a name="Dataset.updateDataset"></a>

### Dataset.updateDataset(updateDatasetConfig, callback)
Updates information in an existing dataset. The update method replaces the entire dataset resource,
whereas the patch method only replaces fields that are provided in the submitted dataset resource.
For more Information regarding optional parameters and response structure: 
https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update

**Kind**: static method of [<code>Dataset</code>](#Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| updateDatasetConfig | [<code>DatasetResource</code>](#DatasetResource) | The DatasetResource should contain the reference dataset |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
var updateDatasetConfig = {
     "datasetReference":
            {
                "datasetId": "existingDataset",
                "projectId": "gentle-impulse-161804"

             },
     "description": "I updated my dataset, added some description!"
}

dataset.updateDataset(updateDatasetConfig, function(err, response){
    if(err){
        resp.error(err);
    }
    resp.success(response);
});
```
<a name="Dataset.listTables"></a>

### Dataset.listTables(callback)
Lists all tables in the specified dataset. Requires the READER dataset role.

**Kind**: static method of [<code>Dataset</code>](#Dataset)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>callback</code> | Provide a function with signature: function(err, response) |

**Example**  
```js
dataset.listTables(function(err, response){
    if(err){
        resp.error(err);
    }
    resp.success(response);
});
```
<a name="Table"></a>

## Table
**Kind**: global typedef  
<a name="TableRowObject"></a>

## TableRowObject : <code>Object</code>
**Kind**: global typedef  
**Link**: [JSON Properties](https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll#request-body)  
<a name="DatasetResource"></a>

## DatasetResource : <code>Object</code>
**Kind**: global typedef  
**Link**: [JSON Properties](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource)  


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

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
