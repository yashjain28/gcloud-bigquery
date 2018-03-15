/**
 * Deletes the current dataset which is being referenced
 * @param {Object} req
 * @param {callback} resp 
 * If successful, this method returns an empty response body.
 */

function ExampleDeleteDataset(req, resp){
    var options = {
        authToken: 'YOUR_BIGQUERY_AUTH_TOKEN' //(is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)
        , projectID: 'gentle-impulse-161804'
        , datasetID: 'babynames'
        //(optional parameters)
        , tableID: 'names_2014'
    };

    var bQProj = BigQuery(options).initialize();

    bQProj.Dataset.Delete(function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data);
        }
    });


}