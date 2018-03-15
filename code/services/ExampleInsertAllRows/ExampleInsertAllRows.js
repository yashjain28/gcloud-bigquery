/**
 * Inserts all the rows in the given table
 * @param {Object} req     
 *      requestBody:{
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
 * @param {callback} resp 
 * expected response
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
    var options = {
        authToken: 'YOUR_BIGQUERY_AUTH_TOKEN' //(is the API key for Google BigQuery Service, https://cloud.google.com/bigquery/docs/authorization)
        //(optional parameters)
        , projectID: 'gentle-impulse-161804'
        , datasetID: 'babynames'
        , tableID: 'names_2014'
    };
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
    var bQProj = BigQuery(options).initialize();

    bQProj.Dataset.Table.InsertAll(requestBody, function(err, data){
        if(err){
            resp.error(data);
        }
        else{
            resp.success(data);
        }
    });
}