/**
 * Updates i.e. Replaces the current dataset with the passed dataset 
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
 * @param {callback} resp 
 */
function ExampleUpdateDataset(req, resp){
    
    var AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
    var PROJECT_ID = 'YOUR_PROJECTID';
    var dataset = BigQuery(AUTH_TOKEN, PROJECT_ID).Dataset('DATASET_ID');

    dataset.Update(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data); // => { body: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource } 
        }
    });
}