/**
 * Pass the following parameters in the request:
 * @param {Object} req
 * req:
 *      projectID: YOUR-PROJECT-NAME
 *      token: YOUR-TOKEN-FOR-BIGQUERY-API
 *      body:
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
    var bQ = new BigQuery(req.params.token);
    var requestBody = {
        "kind": "bigquery#dataset",
        "id": "newDSS",
        "datasetReference": {
            "datasetId": "newDSS",
            "projectId": "gentle-impulse-161804"
        }
    };
  
  bQ.insert(req.params.projectID, requestBody, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}