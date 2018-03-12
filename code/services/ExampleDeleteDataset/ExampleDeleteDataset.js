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