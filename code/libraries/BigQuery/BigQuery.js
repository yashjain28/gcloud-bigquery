/**
 * BigQuery object requires an API Key
 * 
 * @param {string} auth_key is the API key for Google BigQuery Service
 * API key can be generated/accessed by going to this page: https://cloud.google.com/bigquery/docs/authorization
 * 
 * Another simple way: Copy and paste the following command 'gcloud auth application-default print-access-token' in Google Cloud Platform shell!
 * 
 */
function BigQuery(auth_key){
    this.key = auth_key;
}

var requestObject = Requests();

/**
 * Datasets - Delete
 * 
 * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, 
 * you must delete all its tables, either manually or by specifying deleteContents. 
 * Immediately after deletion, you can create another dataset with the same name.
 * 
 * For more information https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/delete
 * 
 * 
 * @param {string} projectID - name of the project
 * @param {string} datasetID - name of the dataset you want to delete in the project
 * @param {callback} callback - callback with function signature: (err, data)
 * 
 * @example response
 * If successful, this method returns an empty response body.
 * 
 */
BigQuery.prototype.delete = function(projectID, datasetID, callback){
    if(this.key === ""){
        callback(true, "Must provide API Key before making requests to Google BigQuery Service.");
    }
    var authToken = "Bearer "+ this.key;
    var options = {
    	uri: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/datasets/" + datasetID,
    	headers: {
    		"Authorization": authToken
    	}
    }    
    
    requestObject.delete(options, function(err, data) {
        if(!err){
            callback(false, data);
        }
        else{
            callback(true, err);
        }
	    //resp.success(data);
    });
};
/**
 * Datasets: get - Returns the dataset specified by datasetID
 * 
 * For more information https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/get
 * 
 * @param {string} projectID - name of the project
 * @param {string} datasetID - name of the dataset
 * @param {any} callback - callback with function signature: (err, data)
 *
 */
BigQuery.prototype.get = function(projectID, datasetID, callback){
    if(this.key === ""){
        callback(true, "Must provide API Key before making requests to Google BigQuery Service.")
    }
    var authToken = "Bearer "+ this.key;
    var options = {
    	uri: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/datasets/" + datasetID,
    	headers: {
    		"Authorization": authToken
    	}
    }    
    
    requestObject.get(options, function(err, data) {
        if(!err){
            callback(false, data);
        }
        else{
            callback(true, err);
        }
    });
};

/**
 * Dataset - Insert
 * 
 * Insert - Creates a new empty dataset
 * 
 * 
 * For more information: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/insert
 * 
 * @param {string} projectID - name of the project
 * @param {Object} requestBody - In the request body, supply a Datasets resource - https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource
 * @param {callback} callback - callback with function signature: (err, data)
 * 
 * @example response:-
 * on Success: returns a Dataset resource
 * on error: returns a error message:  https://cloud.google.com/bigquery/troubleshooting-errors
 * 
 * 
 */
BigQuery.prototype.insert = function(projectID, requestBody, callback){
    if(this.key === ""){
        callback(true, "Must provide API Key before making requests to Google BigQuery Service.");
    }
    var authToken = "Bearer "+ this.key;
    
    var options = {
    	uri: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/datasets",
    	body: requestBody,
    	headers: {
    		"Authorization": authToken
    	}
    }    
    
    requestObject.post(options, function(err, data) {
        if(!err){
            callback(false, data);
        }
        else{
            callback(true, err);
        }
    });
};


/**
 * Tabledata: insertAll
 * insertAll - Streams data into BigQuery one record at a time without needing to run a load job. 
 * 
 * For more information: https://cloud.google.com/bigquery/docs/reference/rest/v2/tabledata/insertAll
 * 
 * @param {string} projectID
 * @param {string} datasetID 
 * @param {string} tableID - tableID in the dataset selected above
 * @param {Object} requestBody - 
 * {
 *   "rows":
 *  [
 *    {
 *      "json":
 *      v{
 *        "column1": "value",
 *        "column2": "value"
 *      }
 *    }
 *  ]
 * }
 * @param {callback} callback - callback with function signature: (err, data)
 * 
 */
BigQuery.prototype.insertAll = function(projectID, datasetID, tableID, requestBody, callback){
    if(this.key === ""){
        callback(true, "Must provide API Key before making requests to Google BigQuery Service.");
    }
    var authToken = "Bearer "+ this.key;
    
    var options = {
    	uri: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/datasets/" + datasetID + "/tables/" + tableID + "/insertAll",
    	headers: {
    	    "Content-Type": "application/json",
    		"Authorization": authToken
    	},
    	body: requestBody
    }    
    
    requestObject.post(options, function(err, data) {
        if(!err){
            callback(false, data);
        }
        else{
            callback(true, err);
        }
    });
};

/**
 * Datasets: list
 * 
 * List: Lists all datasets in the specified project to which you have been granted the READER dataset role.
 * 
 * For more Information: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list
 * @param {string} projectID 
 * @param {callback} callback -- callback with function signature: (err, data)
 * 
 * @example response: 
 * {
 *  "kind": "bigquery#datasetList",
 *  "etag": etag,
 *  "nextPageToken": string,
 *  "datasets": [
 *   {
 *     "kind": "bigquery#dataset",
 *     "id": string,
 *     "datasetReference": {
 *       "datasetId": string,
 *       "projectId": string
 *     },
 *     "labels": {
 *       (key): string
 *     },
 *     "friendlyName": string
 *   }
 *  ]
 * }
 * 
 * 
 */
BigQuery.prototype.list = function(projectID, callback){
    if(this.key === ""){
        callback(true, "Must provide API Key before making requests to Google BigQuery Service.");
    }
    var authToken = "Bearer "+ this.key;
    var options = {
	    uri: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/datasets",
    	headers: {
    		"Authorization": authToken
    	}
    }    
    
    requestObject.get(options, function(err, data) {
        if(!err){
            callback(false, data);
        }
        else{
            callback(true, err);
        }
    });
};

/**
 * Update: Updates information in an existing dataset. The update method replaces the entire dataset resource,
 *         whereas the patch method only replaces fields that are provided in the submitted dataset resource.
 * 
 * For more Information: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/update
 * 
 * 
 * @param {string} projectID 
 * @param {string} datasetID 
 * @param {Object} requestBody - Should provide Dataset resource object with the format 
 * 
 * {
 *   "kind": "bigquery#dataset",
 *   "etag": etag,
 *   "id": string,
 *   "selfLink": string,
 *   "datasetReference": {
 *       "datasetId": string,
 *       "projectId": string
 *   },
 *   "friendlyName": string,
 *   "description": string,
 *   "defaultTableExpirationMs": long,
 *   "labels": {
 *       (key): string
 *   },
 *   "access": [
 *       {
 *       "role": string,
 *       "userByEmail": string,
 *       "groupByEmail": string,
 *       "domain": string,
 *       "specialGroup": string,
 *       "view": {
 *           "projectId": string,
 *           "datasetId": string,
 *           "tableId": string
 *       }
 *       }
 *   ],
 *   "creationTime": long,
 *   "lastModifiedTime": long,
 *   "location": string
 * }
 * 
 * 
 * @param {callback} callback -- callback with function signature: (err, data)
 */
BigQuery.prototype.update = function(projectID, datasetID, requestBody, callback){
    
    _checkKeyValidity(callback);
    var authToken = "Bearer "+ this.key;
    
    var options = {
    	uri: "https://www.googleapis.com/bigquery/v2/projects/" + projectID + "/datasets/" + datasetID,
    	body: requestBody,
    	headers: {
    		"Authorization": authToken
    	}
    }    
    
    requestObject.put(options, function(err, data) {
        if(!err){
            callback(false, data);
        }
        else{
            callback(true, err);
        }
    });
};


/*
   * Helper functions
   */
// Toggle the below two parameters, when running logger locally and dependencies aren't installed!!  
const PlatformLoggingEnabled = true; 
const ConsoleLoggingEnabled = false;
var execute = function (error, response, callback) {
    if (typeof callback === 'function') {
        callback(error, response);
    } else {
        logger("Did you forget to supply a valid Callback!");
    }
};

var logger = function (message) {
    if (PlatformLoggingEnabled) {
        log(message);
    }
    if(ConsoleLoggingEnabled){
        console.log(message);
    }
    return;
};

var isObjectEmpty = function (object) {
    /*jshint forin:false */
    if (typeof object !== 'object') {
        return true;
    }
    for (var keys in object) {
        return false;
    }
    return true;
};

var _checkKeyValidity = function(callback){
    if (this.key === "") {
        callback(true, "Must provide API Key before making requests to Google BigQuery Service.");
    }
}