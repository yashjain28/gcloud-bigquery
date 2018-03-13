/**
 * Pass the following parameters in the request:
 * @param {Object} req
 * req:
 *      projectID: YOUR-PROJECT-NAME
 *      datasetID: YOUR-DATASETID
 *      tableID: YOUR-TABLEID
 *      token: YOUR-TOKEN-FOR-BIGQUERY-API
 *      
 *      body:{
                "kind": "bigquery#tableDataInsertAllRequest",
                "skipInvalidRows": boolean,
                "ignoreUnknownValues": boolean,
                "templateSuffix": string,
                "rows": [
                    {
                    "insertId": string,
                    "json": {
                        (key): (value)
                    }
                    }
                ]
             }
 * 
 * @param {Object} resp 
 * {
        "kind": "bigquery#tableDataInsertAllResponse",
        "insertErrors": [
            {
            "index": unsigned integer,
            "errors": [
                {
                "reason": string,
                "location": string,
                "debugInfo": string,
                "message": string
                }
            ]
            }
        ]
   }
 */
function ExampleInsertAllRows(req, resp){
    var bQ = new BigQuery(req.params.token);
    var requestBody = {
        "rows":
            [
                {
                    "json":{
                        "name":"Robert",
                        "gender":"M",
                        "count":10
                    }
                }
            ]
    }
    
    var projectID = (req.params.projectID==="")?"gentle-impulse-161804":req.params.projectID;
    var tableID = (req.params.tableID==="")?"names_2014":req.params.tableID;
    var datasetID = (req.params.datasetID==="")?"babynames":req.params.datasetID;
    
    bQ.insertAll(projectID, datasetID, tableID, requestBody, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}