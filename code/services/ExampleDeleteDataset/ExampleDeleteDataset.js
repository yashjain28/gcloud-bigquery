/**
 * 
 * Pass the following parameters in the request:
 * @param {Object} req
 * req:
 *      projectID: YOUR-PROJECT-NAME
 *      datasetID: YOUR-DATASETID
 *      token: YOUR-TOKEN-FOR-BIGQUERY-API
 *
 * @param {Object} resp 
 * If successful, this method returns an empty response body.
 */

function ExampleDeleteDataset(req, resp){
    var bQ = new BigQuery(req.params.token);
    bQ.delete(req.params.projectID, req.params.datasetID, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}