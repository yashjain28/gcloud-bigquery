function ExampleDeleteDataset(req, resp){
    var AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
    var PROJECT_ID = 'YOUR_PROJECTID';
    var dataset = BigQuery(AUTH_TOKEN, PROJECT_ID).Dataset('DATASET_TO_DELETE');

    dataset.Delete(function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data); // => { EMPTY_RESPONSE_BODY } 
        }
    });


}