/**
 * Pass the following parameters in the request:
 * 
 *  Dataset will be created in the projectID given in options Object during initialization!
 * @param {Object} requestBody:
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
 * 
 * @param {Object} resp 
 * If successful, this method returns a Datasets resource in the response body, 
 * or an error message.
 * 
 */
function ExampleInsertDataset(req, resp){
    var options = {
        authToken: 'YOUR_BIGQUERY_AUTH_TOKEN' //(is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)
        , projectID: 'gentle-impulse-161804'
        //(optional parameters)
        , datasetID: 'babynames'
        , tableID: 'names_2014'
    };
    
    var requestBody = {
        "kind": "bigquery#dataset",
        "id": "newDSS",
        "datasetReference": {
            "datasetId": "newDSS",
            "projectId": "gentle-impulse-161804"
        }
    };
  
    var bQProj = BigQuery(options).initialize();
    
    bQProj.Dataset.Insert(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data);
        }
    });
}