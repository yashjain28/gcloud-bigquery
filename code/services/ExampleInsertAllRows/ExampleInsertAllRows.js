function ExampleInsertAllRows(req, resp){
    var bQ = new BigQuery(req.params.token);
    var requestBody = {
        "rows":
            [
                {
                    "json":{
                        "SrNo":"20",
                        "Name":"YashJain",
                        "City":"Mumbai"
                    }
                }
            ]
    }
    var projectID = (req.params.projectID==="")?"gentle-impulse-161804":req.params.projectID;
    var tableID = (req.params.tableID==="")?"testingTable":req.params.tableID;
    var datasetID = (req.params.datasetID==="")?"new_ds":req.params.datasetID;
    
    bQ.insertAll(projectID, datasetID, tableID, requestBody, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}