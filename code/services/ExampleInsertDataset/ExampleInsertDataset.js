/**
 *  Creates a new Dataset in the current project!
 * 
 * @param {Object} req
 * requestBody:
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
 * @param {callback} resp 
 * If successful, this method returns a Datasets resource in the response body, 
 * or an error message.
 * 
 */
function ExampleInsertDataset(req, resp){
    var requestBody = {
        "kind": "bigquery#dataset",
        "id": "newDSS",
        "datasetReference": {
            "datasetId": "newDSS",
            "projectId": "gentle-impulse-161804"
        }
    };
  
    var AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
    var PROJECT_ID = 'YOUR_PROJECTID';
    var bigquery = BigQuery(AUTH_TOKEN, PROJECT_ID);

    bigquery.InsertDataset(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data); //=> As shown above! 
        }
    });
}