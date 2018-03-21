/**
 * TODO Add description of BigQuery itself
 * 
 * @param {string} authToken
 * @param {string} projectID
 * 
 * @example  
 * var bigQ = BigQuery(authToken, projectID);
 *
 */
function BigQuery(authToken, projectID) {
    var options = {
        authToken,
        projectID
    }
    
    _validateKey();
    
    var http = Requests(); 
    const BASE_URL = "https://www.googleapis.com/bigquery/v2";
    const DATASET_URL = [ BASE_URL, 'projects', projectID, 'datasets' ].join('/');
    
    function _validateKey() {
        const BEARER = "Bearer";
        if (typeof authToken === 'string') {
            options.authToken = [ BEARER, options.authToken ].join(' ');
        }
        else {
            throw new Error('AuthToken must be defined as a string');
        }
    }

    function _createRequestObject(requestUrl, requestBody) {
        var reqOptions = {
            url: requestUrl,
            headers: {
                "Authorization": options.authToken,
                "Content-Type": "application/json"
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

        const TABLE_URL = [ DATASET_URL, datasetID, 'tables' ].join('');
        /**
         * Table contains methods for handling tables 
         * 
         * @param {string} tableID 
         * 
         * @example
         * var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
         * 
         */
        function Table(tableID) {
            if (!tableID || typeof tableID !== 'string') {
                throw new Error('Failed to initialized! Incorrect Table Information');
            }

            const URL_WITH_CURRENT_TABLE = [ TABLE_URL, tableID ].join('/');

            /**
             * @typedef {Object} TableRowObject 
             * {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll#request-body}
             */

            /**
             * Streams data into BigQuery one record at a time without needing to run a load job.
             * For more Information regarding optional parameters and response structure: 
             * https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll
             *  
             * @param {TableRowObject} requestBody Rows to be inserted in the table
             * @param {callback} callback Provide a function with signature: function(err, response) 
             * 
             * @example
                var requestBody = {
                    "rows": [
                        {
                            "insertId": string,
                            "json": {
                                (key): (value)
                            }
                        }
                    ]
                }

                table.insertAll(requestBody, function(err, response){
                    if(err){
                        resp.error(err);
                    }
                    resp.success(response);
                });
             * 
             */
            function insertAll(requestBody, callback) {
                const currUrl = [ URL_WITH_CURRENT_TABLE, 'insertAll' ].join('/');
                const reqOptions = _createRequestObject(currUrl, requestBody);
                http.post(reqOptions, callback);
            }

            return {
                insertAll
            }

        }
        
        /**
         * Returns the dataset specified by datasetID
         * For more Information regarding optional parameters and response structure: 
         * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get
         * 
         * @param {callback} callback Provide a function with signature: function(err, response) 
         * 
         * @example
            dataset.getDataset(function(err, response){
                if(err){
                    resp.error(err);
                }
                resp.success(response);
            });
            */
        function getDataset(callback) {
            var reqOptions = _createRequestObject(URL_WITH_CURRENT_DATASET);
            http.get(reqOptions, callback);
        }

        /**
         * Deletes the dataset specified by the datasetId value. Before you can delete a dataset,
         * you must delete all its tables, either manually or by specifying deleteContents.
         * Immediately after deletion, you can create another dataset with the same name.
         * For more Information regarding optional parameters and response structure:
         * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete             *
         * 
         * @param {callback} callback Provide a function with signature: function(err, response) 
         * 
         * @example 
            dataset.deleteDataset(function(err, response){
                if(err){
                    resp.error(err);
                }
                resp.success(response);
            });
         * 
         */
        function deleteDataset(callback) {
            var reqOptions = _createRequestObject(URL_WITH_CURRENT_DATASET);
            http.delete(reqOptions, callback);
        }
       
        /**
        * @typedef {Object} DatasetResource
        * {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource}
        */

        /**
        * Updates information in an existing dataset. The update method replaces the entire dataset resource,
        * whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        * For more Information regarding optional parameters and response structure: 
        * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update
        *
        * @param {DatasetResource} requestBody - The DatasetResource should contain the reference dataset 
        * @param {callback} callback Provide a function with signature: function(err, response) 
        * 
        * @example
            var requestBody = {
                 "datasetReference":
                        {
                            "datasetId": "existingDataset",
                            "projectId": "gentle-impulse-161804"

                        },
                "description": "I updated my dataset, added some description!"
            }

            dataset.updateDataset(requestBody, function(err, response){
                if(err){
                    resp.error(err);
                }
                resp.success(response);
            });
        * 
        */
        function updateDataset(requestBody, callback) {
            var reqOptions = _createRequestObject(URL_WITH_CURRENT_DATASET, requestBody);
            http.put(reqOptions, callback);
        }

        /**
         * Lists all tables in the specified dataset. Requires the READER dataset role.
         * 
         * @param {callback} callback Provide a function with signature: function(err, response) 
         * 
         * @example
            dataset.listTables(function(err, response){
                if(err){
                    resp.error(err);
                }
                resp.success(response);
            });
         * 
         * 
         */
        function listTables(callback) {
            var reqOptions = _createRequestObject(TABLE_URL);
            http.get(reqOptions, callback);
        }

        return {
            Table,
            getDataset,
            deleteDataset,
            updateDataset,
            listTables
        };
    }

    /**
        * Creates a new empty dataset
        *
        * For more Information regarding optional parameters and response structure: 
        * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *
        * 
        * @param {DatasetResource} requestBody The details for the dataset to be inserted in the Project
        * @param {callback} callback Provide a function with signature: function(err, response)
        * 
        * @example
           var requestBody = {
               "datasetReference": {
                   "datasetId": "my_new_dataset",
                   "projectId": "my_project_Id"
               }
           }

           bigQ.insertDataset(requestBody, function(err, response){
                if(err){
                   resp.error(err);
                }
                resp.success(response);
           });
           * 
           */
    function insertDataset(requestBody, callback) {
        var reqOptions = _createRequestObject(DATASET_URL, requestBody);
        http.post(reqOptions, callback);
    }


    /**
     * listDatasets: Lists all datasets in the specified project to which you have been granted the READER dataset role.
     * For more Information regarding optional parameters and response structure
     *  https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list
     *
     * 
     * @param {callback} callback Provide a function with signature: function(err, response)
     * 
     * @example
         bigQ.listDatasets(function(err, response){
            if(err){
                resp.error(err);
            }
            resp.success(response);
        })
     *  
     */
    function listDatasets(callback) {
        var reqOptions = _createRequestObject(DATASET_URL);
        http.get(reqOptions, callback);
    }
    
    return {
       Dataset,
       listDatasets,
       insertDataset
    }
}
