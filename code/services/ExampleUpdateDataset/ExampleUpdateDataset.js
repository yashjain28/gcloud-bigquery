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