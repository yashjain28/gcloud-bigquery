/**
 * List All datasets in a project
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
    var options = {
        authToken: 'YOUR_BIGQUERY_AUTH_TOKEN' //(is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)
        , projectID: 'gentle-impulse-161804'
        //(optional parameters)
        , datasetID: 'babynames'
        , tableID: 'names_2014'
    };
    var bQProj = BigQuery(options).initialize();

    bQProj.Dataset.List(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data);
        }
    });
}