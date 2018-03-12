function ExampleInsertDataset(req, resp){
    var bQ = new BigQuery(req.params.token);
    var requestBody = {
      "kind": "bigquery#dataset",
  "id": "newDSS",
  "datasetReference": {
    "datasetId": "newDSS",
    "projectId": "gentle-impulse-161804"
   }
  };
  
  bQ.insert(req.params.projectID, requestBody, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}