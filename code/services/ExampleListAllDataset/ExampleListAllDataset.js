/**
 * List All datasets in a project
 * @param {Object} req
 * @param {callback} resp
 * If successful, this method returns a response body with the following structure:
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
    var AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
    var PROJECT_ID = 'YOUR_PROJECTID';
    var bigquery = BigQuery(AUTH_TOKEN, PROJECT_ID);

    bigquery.ListDatasets(function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data); // => { body: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource } 
        }
    });
}