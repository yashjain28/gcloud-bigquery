
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

### 1. API Key

Access an API Key here:
https://cloud.google.com/bigquery/docs/authorization

If you have the GCloud CLI, can obtain it by running

```
gcloud auth application-default print-access-token
```

### 2. Dataset

- Create a new project
- Create a new dataset in that project by loading custom dataset following the procedure given [here](https://cloud.google.com/bigquery/quickstart-web-ui#download_custom_data). 

## Assets

## Code Libraries

- `BigQueryLib` - Library for interacting with GCloud BigQuery Dataset

### Code Services

 - `ExampleDeleteDataset` - delete a dataset.
 - `ExampleGetDataset` - get a particular dataset.    
 - `ExampleInsertDataset` - insert a dataset.
 - `ExampleInsertAllRows` - insert rows in a table of dataset.
 - `ExampleListAllDataset` - list all datasets.
 - `ExampleUpdateDataset` - updates(generally replaces) an existing dataset.

## API
