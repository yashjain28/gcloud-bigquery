

/**
 * BigQuery is Google's serverless, highly scalable, low cost enterprise data warehouse designed to make all your data analysts productive.
 * @typedef BigQuery
 * @param {string} authToken
 * @param {string} projectID
 * 
 * @example  
 * var bigQ = BigQuery(authToken, projectID);
 * 
 */
function BigQuery(authToken, projectID) {

    if (!_isValidString(authToken)) {
        throw new Error('AuthToken must be set before calling BigQuery API');
    }

    var http = Requests();
    const BASE_URL = "https://www.googleapis.com/bigquery/v2";
    const DATASET_URL = [BASE_URL, 'projects', projectID, 'datasets'].join('/');

    function _createRequestObject(token, requestUrl, requestBody) {
        var reqOptions = {
            url: requestUrl,
            headers: {
                "Authorization": ["Bearer", token].join(' '),
                "Content-Type": "application/json"
            },
            body: requestBody
        }
        return reqOptions;
    }

    function _isValidString(str) {
        return str && (typeof str === 'string');
    }

    /** 
     * @typedef Dataset
     */

    /**
     * Dataset contains Table and methods for handling datasets
     * 
     * @memberof BigQuery
     * @param {string} datasetID
     * @returns {Dataset} 
     * @example 
     * var dataset = BigQuery(authToken, projectID).Dataset('YOUR_DATASET');
     * 
     */
    function Dataset(datasetID) {
        if (!_isValidString(datasetID)) {
            throw new Error('Failed to initialized! Incorrect Dataset Information');
        }

        const URL_WITH_CURRENT_DATASET = [DATASET_URL, datasetID].join('/');
        const TABLE_URL = [DATASET_URL, datasetID, 'tables'].join('/');

        /** 
         * @typedef Table
         */

        /**
         * Table contains methods for handling tables 
         * @memberof Dataset
         * @param {string} tableID 
         * 
         * @returns {Table}
         * @example
         * var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
         * 
         */
        function Table(tableID) {
            if (!_isValidString(tableID)) {
                throw new Error('Failed to initialized! Incorrect Table Information');
            }

            const URL_WITH_CURRENT_TABLE = [TABLE_URL, tableID].join('/');

            /**
             * @typedef {Object} TableRowObject 
             * @link [JSON Properties](https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll#request-body)
             */

            /**
             * Streams data into BigQuery one record at a time without needing to run a load job.
             * For more Information regarding optional parameters and response structure: 
             * https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll
             *  
             * @param {TableRowObject} rowsToInsert Rows to be inserted in the table
             * @param {callback} callback Provide a function with signature: function(err, response) 
             * 
             * @example
             *   var rowsToInsert = {
             *       "rows": [
             *           {
             *               "insertId": string,
             *               "json": {
             *                   (key): (value)
             *               }
             *           }
             *       ]
             *   }
             *
             *   table.insertAll(rowsToInsert, function(err, response){
             *       if(err){
             *           resp.error(err);
             *       }
             *       resp.success(response); // 
             *   });
             * 
             */
            function insertAll(requestBody, callback) {
                const currUrl = [URL_WITH_CURRENT_TABLE, 'insertAll'].join('/');
                const reqOptions = _createRequestObject(authToken, currUrl, requestBody);
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
         * @memberof Dataset
         * @example
         * dataset.getDataset(function(err, response){
         *     if(err){
         *         resp.error(err);
         *     }
         *     resp.success(response); // => DatasetResource
         * });
         */
        function getDataset(callback) {
            console.log("auth " + authToken);
            var reqOptions = _createRequestObject(authToken, URL_WITH_CURRENT_DATASET);
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
         * @memberof Dataset
         * @example
         * dataset.deleteDataset(function(err, response){
         *     if(err){
         *         resp.error(err);
         *     }
         *     resp.success(response);
         * });
         *
         */
        function deleteDataset(callback) {
            var reqOptions = _createRequestObject(authToken, URL_WITH_CURRENT_DATASET);
            http.delete(reqOptions, callback);
        }

        /**
        * @typedef {Object} DatasetResource
        * @link [JSON Properties](https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource)
        */

        /**
        * Updates information in an existing dataset. The update method replaces the entire dataset resource,
        * whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        * For more Information regarding optional parameters and response structure: 
        * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update
        *
        * @param {DatasetResource} updateDatasetConfig - The DatasetResource should contain the reference dataset
        * @param {callback} callback Provide a function with signature: function(err, response)
        * @memberof Dataset
        * @example
        * var updateDatasetConfig = {
        *      "datasetReference":
        *             {
        *                 "datasetId": "existingDataset",
        *                 "projectId": "gentle-impulse-161804"
        *
        *              },
        *      "description": "I updated my dataset, added some description!"
        * }
        *
        * dataset.updateDataset(updateDatasetConfig, function(err, response){
        *     if(err){
        *         resp.error(err);
        *     }
        *     resp.success(response);
        * });
        *
        */
        function updateDataset(requestBody, callback) {
            var reqOptions = _createRequestObject(authToken, URL_WITH_CURRENT_DATASET, requestBody);
            http.put(reqOptions, callback);
        }

        /**
         * Lists all tables in the specified dataset. Requires the READER dataset role.
         * 
         * @param {callback} callback Provide a function with signature: function(err, response) 
         * @memberof Dataset
         * @example
         * dataset.listTables(function(err, response){
         *     if(err){
         *         resp.error(err);
         *     }
         *     resp.success(response);
         * });
         *
         *
         */
        function listTables(callback) {
            var reqOptions = _createRequestObject(authToken, TABLE_URL);
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
     * @param {DatasetResource} newDatasetConfig The details for the dataset to be inserted in the Project
     * @param {callback} callback Provide a function with signature: function(err, response)
     * @memberof BigQuery
     * @example
     *  var newDatasetConfig = {
     *      "datasetReference": {
     *          "datasetId": "my_new_dataset",
     *          "projectId": "my_project_Id"
     *      }
     *  }
     *
     * bigQ.insertDataset(newDatasetConfig, function(err, response){
     *      if(err){
     *         resp.error(err);
     *      }
     *      resp.success(response);
     * });
     *
     */
    function insertDataset(requestBody, callback) {
        var reqOptions = _createRequestObject(authToken, DATASET_URL, requestBody);
        http.post(reqOptions, callback);
    }


    /**
     * Lists all datasets in the specified project to which you have been granted the READER dataset role.
     * For more Information regarding optional parameters and response structure
     * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list
     *
     * @memberof BigQuery
     * @param {callback} callback Provide a function with signature: function(err, response)
     * 
     * @example
     *  bigQ.listDatasets(function(err, response){
     *      if(err){
     *          resp.error(err);
     *      }
     *      resp.success(response);
     * });
     *
     */
    function listDatasets(callback) {
        var reqOptions = _createRequestObject(authToken, DATASET_URL);
        http.get(reqOptions, callback);
    }

    return {
        Dataset,
        listDatasets,
        insertDataset
    }
}