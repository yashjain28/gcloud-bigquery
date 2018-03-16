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
            resp.success(data); // => { body: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource } 
        }
    });
}