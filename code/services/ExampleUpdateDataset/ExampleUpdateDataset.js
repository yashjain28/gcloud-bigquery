/**
 * Pass the following parameters in the request:
 * @param {Object} req - body contains the dataset you want to replace it with
 * req:
 *      projectID: YOUR-PROJECT-NAME
 *      datasetID: YOUR_DATASETID
 *      token: YOUR-TOKEN-FOR-BIGQUERY-API
 *      body: {
            "kind": "bigquery#dataset",
            "etag": etag,
            "id": string,
            "selfLink": string,
            "datasetReference": {  //REQUIRED
                "datasetId": string,
                "projectId": string
            },
            "friendlyName": string,
            "description": string,
            "defaultTableExpirationMs": long,
            "labels": {
                (key): string
            },
            "access": [
                {
                "role": string,
                "userByEmail": string,
                "groupByEmail": string,
                "domain": string,
                "specialGroup": string,
                "view": {
                    "projectId": string,
                    "datasetId": string,
                    "tableId": string
                }
                }
            ],
            "creationTime": long,
            "lastModifiedTime": long,
            "location": string
        }

 * 
 * @param {Object} resp 
 */
function ExampleUpdateDataset(req, resp){
    var bQ = new BigQuery(req.params.token);
    // Defining request body here, but can be passed in the request and accessed as req.body
    var projectID = (req.params.projectID === "") ? "gentle-impulse-161804" : req.params.projectID;
    var datasetID = (req.params.datasetID === "") ? "new_ds" : req.params.datasetID;
    var requestBody = {
        "rows":
            [
                {
                    "json":{
                        "name":"Yash",
                        "gender":"M",
                        "count":20
                    }
                }
            ]
    }
    
    bQ.update(projectID, datasetID, requestBody, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}