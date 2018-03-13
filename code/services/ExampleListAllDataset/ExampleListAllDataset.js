/**
 * Pass the following parameters in the request:
 * @param {Object} req
 * req:
 *      projectID: YOUR-PROJECT-NAME
 *      token: YOUR-TOKEN-FOR-BIGQUERY-API
 *
 * @param {Object} resp - If successful, this method returns a response body with the following structure:
 * {
        "kind": "bigquery#datasetList",
        "etag": etag,
        "nextPageToken": string,
        "datasets": [
            {
            "kind": "bigquery#dataset",
            "id": string,
            "datasetReference": {
                "datasetId": string,
                "projectId": string
            },
            "labels": {
                (key): string
            },
            "friendlyName": string
            }
        ]
    }
 */

function ExampleListAllDataset(req, resp){
    var bQ = new BigQuery(req.params.token);
    
    bQ.get(req.params.projectID, function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data);
        }
    });
}