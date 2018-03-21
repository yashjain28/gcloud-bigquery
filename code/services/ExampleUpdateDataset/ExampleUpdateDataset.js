function ExampleUpdateDataset(req, resp){
    
    var AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
    var PROJECT_ID = 'YOUR_PROJECTID';
    var dataset = BigQuery(AUTH_TOKEN, PROJECT_ID).Dataset('DATASET_ID');

    var requestBody = {
        "datasetReference":
            {
                "datasetId": "aplhaDSS",
                "projectId": "gentle-impulse-161804"

            },
        "description": "I updated my dataset, added some description!"

    };
    dataset.updateDataset(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        resp.success(data); // => { body: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource } 
    });
}