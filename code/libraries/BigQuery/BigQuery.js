/**
 * @typedef {Object} BigQuery 
 * @property {Object} Dataset
 * 
 */

/**
 * BigQuery object requires an API Key and a projectID to initialize!
 * 
 * @param {string} authToken
 * @param {string} projectID
 * @throws Will throw an error if the key is invalid (null or empty).
 * @example  
 * var bigQ = BigQuery(authToken, projectID);
 *
 * @returns {BigQuery} bigQuery - A BigQuery object is returned!
 */
function BigQuery(authToken, projectID) {
    var options = {
        "authToken": authToken,
        "projectID": projectID
    }
    
    _validateKey();
    
    var http = Requests(); 
    const BASE_URL = "https://www.googleapis.com/bigquery/v2";
    const PROJECT_URL =  _joinWithSlash(BASE_URL, 'projects'); 
    const URL_WITH_CURRENT_PROJECT = _joinWithSlash(PROJECT_URL, projectID);
    const DATASET_URL = _joinWithSlash(URL_WITH_CURRENT_PROJECT, 'datasets');
    
    function _validateKey() {
        if (_isValidString(authToken)) {
            options.authToken = ["Bearer", options.authToken].join(' ');
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

    function _isValidString(str){
        return str && (typeof str === 'string');
    }

    function _joinWithSlash(){
        return Array.from(arguments).join('/');
    }

    /**
     * Dataset contains Table and methods for handling datasets
     * 
     * @param {string} datasetID
     * @throws Will throw an error if the datasetID is invalid (null or empty).
     * @example 
     * var dataset = BigQuery(authToken, projectID).Dataset('YOUR_DATASET');
     * 
     */
    function Dataset(datasetID) {
        if (!_isValidString(datasetID)) {
            throw new Error('Failed to initialized! Incorrect Dataset Information');
        }

        const URL_WITH_CURRENT_DATASET = _joinWithSlash(DATASET_URL, datasetID);
        const TABLE_URL = _joinWithSlash(URL_WITH_CURRENT_DATASET, 'tables');
        
        /**
         * Table contains methods for handling tables 
         * 
         * @param {string} tableID 
         * @throws Will throw an error if the tableID is invalid (null or empty).
         * @example
         * var table = BigQuery(authToken, projectID).Dataset('YOUR_DATASET').Table('YOUR_TABLE');
         * 
         */
        function Table(tableID) {
            if (!_isValidString(tableID)) {
                throw new Error('Failed to initialized! Incorrect Table Information');
            }

            const URL_WITH_CURRENT_TABLE = _joinWithSlash(TABLE_URL, tableID);

            /**
             * @typedef {Object} TableRowObject 
             * {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll#request-body Properties}
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
            function insertAll(rowsToInsert, callback) {
                const currUrl = _joinWithSlash(URL_WITH_CURRENT_TABLE , 'insertAll');
                const reqOptions = _createRequestObject(currUrl, rowsToInsert);
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
         * dataset.getDataset(function(err, response){
         *     if(err){
         *         resp.error(err);
         *     }
         *     resp.success(response); // => DatasetResource  
         * });
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
         * dataset.deleteDataset(function(err, response){
         *     if(err){
         *         resp.error(err);
         *     }
         *     resp.success(response);
         * });
         * 
         */
        function deleteDataset(callback) {
            var reqOptions = _createRequestObject(URL_WITH_CURRENT_DATASET);
            http.delete(reqOptions, callback);
        }
       
       /**
        * @typedef {Object} DatasetResource
        * {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource Properties}
        */

        /**
        * Updates information in an existing dataset. The update method replaces the entire dataset resource,
        * whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        * For more Information regarding optional parameters and response structure: 
        * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update
        *
        * @param {DatasetResource} updateDatasetConfig - The DatasetResource should contain the reference dataset 
        * @param {callback} callback Provide a function with signature: function(err, response) 
        * 
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
        function updateDataset(updateDatasetConfig, callback) {
            var reqOptions = _createRequestObject(URL_WITH_CURRENT_DATASET, updateDatasetConfig);
            http.put(reqOptions, callback);
        }

        /**
         * Lists all tables in the specified dataset. Requires the READER dataset role.
         * 
         * @param {callback} callback Provide a function with signature: function(err, response) 
         * 
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
     * @param {DatasetResource} newDatasetConfig The details for the dataset to be inserted in the Project
     * @param {callback} callback Provide a function with signature: function(err, response)
     * 
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
    function insertDataset(newDatasetConfig, callback) {
        var reqOptions = _createRequestObject(DATASET_URL, newDatasetConfig);
        http.post(reqOptions, callback);
    }


    /**
     * Lists all datasets in the specified project to which you have been granted the READER dataset role.
     * For more Information regarding optional parameters and response structure
     * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list
     * 
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
        var reqOptions = _createRequestObject(DATASET_URL);
        http.get(reqOptions, callback);
    }
    
    return {
       Dataset,
       listDatasets,
       insertDataset
    }
}
