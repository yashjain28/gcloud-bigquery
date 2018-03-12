function ExampleGetDataset(req, resp){
    var bQ = new BigQuery(req.params.token);
    bQ.get(req.params.projectID, req.params.datasetID, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}