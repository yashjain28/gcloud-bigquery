/**
 * @param {Object} req - body contains the dataset you want to replace it with
 * requestBody: {
            "kind": "bigquery#dataset",
            "etag": etag,
            "id": string,
            "selfLink": string,
            "datasetReference": {  //REQUIRED
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
 */
function ExampleUpdateDataset(req, resp){
    
    var options = {
        authToken: 'YOUR_BIGQUERY_AUTH_TOKEN' //(is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)
        , projectID: 'gentle-impulse-161804'
        //(optional parameters)
        , datasetID: 'babynames'
        , tableID: 'names_2014'
    };


    var bQProj = BigQuery(options).initialize();
var requestBody = { /*with appropriate data in the above format*/ };
    bQProj.Dataset.Update(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data);
        }
    });
}