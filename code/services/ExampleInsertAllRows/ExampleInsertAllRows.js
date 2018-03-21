/* expected response
   {
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
    var AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
    var PROJECT_ID = 'YOUR_PROJECTID';
    var table = BigQuery(AUTH_TOKEN, PROJECT_ID).Dataset('DATASET_ID').Table('TABLE_TO_ADD_ROWS_TO');

    table.insertAll(requestBody, function (err, data) {
        if (err) {
            resp.error(data);
        }
        resp.success(data); //=> As shown above! 
    
    });
}