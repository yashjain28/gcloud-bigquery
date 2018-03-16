/**
 * BigQuery object requires an API Key and a projectID to initialize!
 * 
 * @param {string} authToken
 * @param {string} projectID
 * 
 * @example Inside of a ClearBlade service
 * 
 * var bigQ = BigQuery(authToken, projectID);
 * 
 *  
 * 
 */
function BigQuery(authToken, projectID) {
    var options = {
        "authToken": authToken,
        "projectID": projectID
    }

    _validateKey();
    var cbhttp = Requests(); 


    var baseUrl = "https://www.googleapis.com/bigquery/v2";
    var projectUrl = baseUrl + '/projects';
    var urlWithCurrentProject = projectUrl + '/' + projectID;
    var datasetUrl = urlWithCurrentProject + '/datasets';

    function _validateKey() {
        const BEARER = "Bearer ";
        if (typeof authToken === 'string') {
            options.authToken = BEARER + options.authToken;
        }
        else {
            throw new Error('AuthToken must be defined as a string');
        }
    }

    function _createRequestObject(requestUrl, requestBody) {
        var reqOptions = {
            url: requestUrl,
            headers: {
                "Authorization": options.authToken
            },
            body: requestBody
        }
        return reqOptions;
    }

    /**
     * Dataset contains Table and methods for handling datasets
     * 
     * @param {string} datasetID
     * 
     * @example 
     * var dataset = BigQuery(authToken, projectID).Dataset('YOUR_DATASET');
     * 
     */
    function Dataset(datasetID) {
        if (!datasetID || typeof datasetID !== 'string') {
            throw new Error('Failed to initialized! Incorrect Dataset Information');
        }

        var urlWithCurrentDataset = datasetUrl + '/' + datasetID;
        var tableUrl = urlWithCurrentDataset + '/tables';

        /**
         * Table contains methods for handling tables 
         * 
         * @param {string} tableID 
         * 
         * @example
         * 
         * var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
         * 
         */
        function Table(tableID) {
            if (!tableID || typeof tableID !== 'string') {
                throw new Error('Failed to initialized! Incorrect Table Information');
            }

            var urlWithCurrentTable = tableUrl + '/' + tableID;

            /**
             * Tabledata: insertAll
             * insertAll - Streams data into BigQuery one record at a time without needing to run a load job.
             *
             * For more Information regarding optional parameters and response structure: 
             * https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll
             *  
             * @param {Object} requestBody 
                {
                    "kind": "bigquery#tableDataInsertAllRequest",
                    "skipInvalidRows": boolean,
                    "ignoreUnknownValues": boolean,
                    "templateSuffix": string,
                    "rows": [
                        {
                            "insertId": string,
                            "json": {
                                (key): (value)
                            }
                        }
                    ]
                }
                * @param {callback} callback 
                * 
                * @example Inside of a ClearBlade service, after initialization of the Table object
                    table.InsertAll(requestBody, function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
                });
                * 
                */
            function InsertAll(requestBody, callback) {
                var currUrl = urlWithCurrentTable + '/insertAll';
                var reqOptions = _createRequestObject(currUrl, requestBody);
                cbhttp.post(reqOptions, callback);
            }

            return {
                InsertAll
            }

        }
        
        /**
         * Datasets.Get - Returns the dataset specified by datasetID
         * For more Information regarding optional parameters and response structure: 
         * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get
         * 
         * @param {callback} callback 
         * 
         * @returns (in callback) on success, a Dataset resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource
         * 
         * @example Inside of a ClearBlade service, after the initialization
            dataset.Get(function(err, response){
                if(!err){
                    resp.success(response);
                } 
                else{
                    resp.error(err); 
                }
            });
            */
        function Get(callback) {
            var reqOptions = _createRequestObject(urlWithCurrentDataset);
            cbhttp.get(reqOptions, callback);
        }

        /**
         * Datasets - Delete
         *
         * Deletes the dataset specified by the datasetId value. Before you can delete a dataset,
         * you must delete all its tables, either manually or by specifying deleteContents.
         * Immediately after deletion, you can create another dataset with the same name.
         *
         * 
         * For more Information regarding optional parameters and response structure:
         * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete             *
         * 
         * @param {callback} callback 
         * 
         * @example similar to dataset.Get()
         * 
         */
        function Delete(callback) {
            var reqOptions = _createRequestObject(urlWithCurrentDataset);
            cbhttp.delete(reqOptions, callback);
        }
       
        /**
        * Update: Updates information in an existing dataset. The update method replaces the entire dataset resource,
        * whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        *
        * For more Information regarding optional parameters and response structure: 
        * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update
        *
        *
        * @param {Object} requestBody - Should provide Dataset resource object with the format
            {
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
        * @param {callback} callback 
        * 
        * @example Inside of a ClearBlade service, after the initialization
            dataset.update(requestBody, function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            });
        * 
        */
        function Update(requestBody, callback) {
            var reqOptions = _createRequestObject(urlWithCurrentDataset, requestBody);
            cbhttp.put(reqOptions, callback);
        }

        /**
         * 
         * 
         * @param {callback} callback 
         * 
         * @example Inside of a ClearBlade service, after the initialization
            dataset.ListTables(function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            });
         * 
         * 
         */
        function ListTables(callback) {
            var reqOptions = _createRequestObject(tableUrl);
            cbhttp.get(reqOptions, callback);
        }

        return {
            Table,
            Get,
            Delete,
            Update,
            ListTables
        };
    }

    /**
        * BigQuery - InsertDataset
        *
        * Insert - Creates a new empty dataset
        *
        *
        * For more Information regarding optional parameters and response structure: 
        * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *
        * @param {Object} requestBody 
        * @param {callback} callback 
        * 
        * (in callback)
        * on Success: returns a Dataset resource
        * on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors
        * 
        * @example Inside of a ClearBlade service, after the initialization
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
           * 
           */
    function InsertDataset(requestBody, callback) {
        var reqOptions = _createRequestObject(datasetUrl, requestBody);
        cbhttp.post(reqOptions, callback);
    }


    /**
         * BigQuery: ListDatasets
         *
         * ListDatasets: Lists all datasets in the specified project to which you have been granted the READER dataset role.
         *
         * For more Information regarding optional parameters and response structure
         *  https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list
         *
         * 
         * @param {callback} callback
         * 
         * @example Inside of a ClearBlade service, after the initialization
             bigQ.List(function(err, response){
                if(!err){
                    resp.success(response);
                }
                else{
                    resp.error(err);
                }
            })
            *  
            */
    function ListDatasets(callback) {
        var reqOptions = _createRequestObject(datasetUrl);
        cbhttp.get(reqOptions, callback);
    }
    
    return {
       Dataset,
       ListDatasets,
       InsertDataset
    }
}