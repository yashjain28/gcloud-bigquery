function BigQuery(options) {
    _validateKey();

    function _validateKey() {
        const BEARER = "Bearer ";

        if (typeof options === 'string') {
            options = {};
            options.authToken = BEARER + options;
        }
        else if (typeof options === 'object' && (options.authToken && typeof options.authToken === 'string')) {
            options.authToken = BEARER + options.authToken;
        }
        else if (!options.authToken || typeof options.authToken !== 'string') {
            throw new Error('AuthToken must be defined/a string');
        }
    }

    function initialize() {
        if (typeof options === 'object') {
            if (options.projectID && typeof options.projectID === 'string') {
                var project = Project(options.projectID);

                if (options.datasetID && typeof options.datasetID === 'string') {
                    var dataset = project.Dataset(options.datasetID);

                    if (options.tableID && typeof options.tableID === 'string') {
                        var table = dataset.Table(options.tableID);
                        dataset.table = table;
                    }
                    project.dataset = dataset;
                }
            }
        }
        return project;
    }

    function _createRequestObject(requestUrl, requestBody) {
        var reqOptions = {
            url: requestUrl,
            headers: {
                "Authorization": options.authToken
            },
            body: requestBody
        }
        return reqOptions;
    }


    var baseUrl = "https://www.googleapis.com/bigquery/v2";
    var cbhttp = /*Requests(); */require('https');
    function Project(projectID) {
        var projectUrl = baseUrl + '/projects';
        var urlWithCurrentProject = projectUrl + '/' + projectID;

        function Dataset(datasetID) {
            var datasetUrl = urlWithCurrentProject + '/datasets';
            var urlWithCurrentDataset = datasetUrl + '/' + datasetID;

            function Table(tableID) {
                var tableUrl = urlWithCurrentDataset + '/tables';
                var urlWithCurrentTable = tableUrl + '/' + tableID;

                function InsertAll(requestBody, callback) {
                    var currUrl = urlWithCurrentTable + '/insertAll';
                    var reqOptions = _createRequestObject(currUrl, requestBody);
                    cbhttp.post(reqOptions, callback);
                }
                return {
                    InsertAll
                }

            }

            function Get(callback) {
                var reqOptions = _createRequestObject(urlWithCurrentDataset);
                cbhttp.get(reqOptions, callback);
            }

            function Delete(callback) {
                var reqOptions = _createRequestObject(urlWithCurrentDataset);
                cbhttp.delete(reqOptions, callback);
            }

            function Insert(requestBody, callback) {
                var reqOptions = _createRequestObject(datasetUrl, requestBody);
                cbhttp.post(reqOptions, callback);
            }

            function List(callback) {
                var reqOptions = _createRequestObject(datasetUrl);
                cbhttp.get(reqOptions, callback);
            }

            return {
                Table,
                Get,
                Delete,
                Insert,
                List
            };
        }

        function List(callback) {
            var reqOptions = _createRequestObject(projectUrl);
            cbhttp.get(reqOptions, callback);
        }

        return {
            Dataset,
            List
        };
    }

    return {
        Project,
        initialize
    }
}