/**
 * BigQuery object requires an API Key
 * @param {Object} options - {
 *      authToken: YOUR_BIGQUERY_AUTH_TOKEN (is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)
 *      (optional parameters)
 *      ,projectID: YOUR_PROJECT_ID
 *      ,datasetID: DATASET_IN_ABOVE_PROJECT
 *      ,tableID: TABLE_IN_ABOVE_DATASET 
 * }
 * @returns {Object} Project
 * 
 * @example :- Inside of a ClearBlade service
 * 
 * var project = BigQuery(options).initialize();
 * 
 */
function BigQuery(options) {
    _validateKey();

    function _validateKey() {
        const BEARER = "Bearer ";

        if (typeof options === 'string') {
            options = {};
            options.authToken = BEARER + options;
        }
        else if (typeof options === 'object' && (options.authToken && typeof options.authToken === 'string')) {
            options.authToken = BEARER + options.authToken;
        }
        else if (!options.authToken || typeof options.authToken !== 'string') {
            throw new Error('AuthToken must be defined/a string');
        }
    }

    function initialize() {
        if (typeof options === 'object') {
            var project = Project();
            if (options.projectID && typeof options.projectID === 'string') {
                project = Project(options.projectID);

                var dataset = project.Dataset();
                if (options.datasetID && typeof options.datasetID === 'string') {
                    dataset = project.Dataset(options.datasetID);

                    dataset.table = dataset.Table(options.tableID);
                }
                project.dataset = dataset;
            }
        }
        else {
            throw new Error('Failed to initialized! Incorrect Information');
        }
        return project;
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


    var baseUrl = "https://www.googleapis.com/bigquery/v2";
    var cbhttp = Requests(); //require('https');
    
    /**
     *  
     * @param {string} projectID 
     * @returns {Object} - consists of Dataset Object and other methods for Project Object
     */
    function Project(projectID) {
        var projectUrl = baseUrl + '/projects';
        var urlWithCurrentProject = projectUrl + '/' + projectID;

        /**
         * 
         * 
         * @param {string} datasetID 
         * @returns {Object} - consists of Table Object and other methods for Dataset Object
         */
        function Dataset(datasetID) {
            var datasetUrl = urlWithCurrentProject + '/datasets';
            var urlWithCurrentDataset = datasetUrl + '/' + datasetID;

            /**
             * 
             * 
             * @param {string} tableID 
             * @returns {Object} - consists of methods for the Table Object
             */
            function Table(tableID) {
                var tableUrl = urlWithCurrentDataset + '/tables';
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
                 * @param {function(err, resp){}} callback 
                 * 
                 * @example :- Inside of a ClearBlade service, after the initialization
                    project.Dataset.InsertAll(requestBody, function(err, response){
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
             * @param {function(err, resp){}} callback 
             * 
             * @returns (in callback) on success, a Dataset resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource
             * 
             * @example :- Inside of a ClearBlade service, after the initialization
                project.Dataset.Get(function(err, response){
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
             * @param {function(err, resp){}} callback 
             * 
             * @example similar to Dataset.Get()
             * 
             */
             function Delete(callback) {
                var reqOptions = _createRequestObject(urlWithCurrentDataset);
                cbhttp.delete(reqOptions, callback);
             }

            /**
             * Dataset - Insert
             *
             * Insert - Creates a new empty dataset
             *
             *
             * For more Information regarding optional parameters and response structure: 
             * https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert             *
             * @param {Object} requestBody 
             * @param {function(err, resp){}} callback 
             * 
             * @returns (in callback)
             * on Success: returns a Dataset resource
             * on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors
             * 
             * @example :- Inside of a ClearBlade service, after the initialization
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
             * 
             */
            function Insert(requestBody, callback) {
                var reqOptions = _createRequestObject(datasetUrl, requestBody);
                cbhttp.post(reqOptions, callback);
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
            * @param {function(err, resp){}} callback 
            * 
            * @example :- Inside of a ClearBlade service, after the initialization
              project.Dataset.update(requestBody, function(err, response){
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
             * Datasets: list
             *
             * List: Lists all datasets in the specified project to which you have been granted the READER dataset role.
             *
             * For more Information regarding optional parameters and response structure
             *  https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list
             *
             * 
             * @param {function(err, resp){}} callback
             * 
             * @example :- Inside of a ClearBlade service, after the initialization
               project.Dataset.List(function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
               })
             *  
             */
            function List(callback) {
                var reqOptions = _createRequestObject(datasetUrl);
                cbhttp.get(reqOptions, callback);
            }

            return {
                Table,
                Get,
                Delete,
                Insert,
                Update,
                List
            };
        }

        /**
         * Projects - List
         * 
         * Lists all projects to which you have been granted any project role.
         * For more Information regarding optional parameters and response structure
         * https://cloud.google.com/bigquery/docs/reference/rest/v2/projects/list
         * 
         * 
         * @param {function(err, resp){}} callback 
         * @example :- Inside of a ClearBlade service, after the initialization
               project.List(function(err, response){
                    if(!err){
                        resp.success(response);
                    }
                    else{
                        resp.error(err);
                    }
               })
         * 
         */
        function List(callback) {
            var reqOptions = _createRequestObject(projectUrl);
            cbhttp.get(reqOptions, callback);
        }

        return {
            Dataset,
            List
        };
    }

    return {
        Project,
        initialize
    }
}