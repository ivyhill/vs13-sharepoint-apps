//Namespace
window.REST = window.REST || {};

//Library Pattern
//Performs CRUD operations on the list
window.REST.Operator = {

    create: function (lname, fname, wphone) {
        $.ajax({
            url: _spPageContextInfo.webServerRelativeUrl +
                        "/_api/web/lists/getByTitle('Contacts')/items",
            type: "POST",
            contentType: "application/json;odata=verbose",
            data: JSON.stringify(
                {
                    '__metadata': {
                        'type': 'SP.Data.ContactsListItem'
                    },
                    'Title': lname,
                    'FirstName': fname,
                    'WorkPhone': wphone
                }),
            headers: {
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            success: function () {
                REST.FormFiller.clear();
            },
            error: function (err) {
                alert(JSON.stringify(err));
            }

        });

    },

    readItem: function (id) {
        $.ajax(
                {
                    url: _spPageContextInfo.webServerRelativeUrl +
                        "/_api/web/lists/getByTitle('Contacts')/getItemByStringId('" +
                        id + "')/?$select=FirstName,Title,WorkPhone",
                    type: "GET",
                    headers: {
                        "accept": "application/json;odata=verbose",
                    },
                    success: function (data) {
                        REST.FormFiller.fill(data.d.Title, data.d.FirstName, data.d.WorkPhone);
                    },
                    error: function (err) {
                        alert(JSON.stringify(err));
                    }
                }
            );
    },

    readAll: function () {
        $.ajax(
                {
                    url: _spPageContextInfo.webServerRelativeUrl +
                        "/_api/web/lists/getByTitle('Contacts')/items/" +
                        "?$select=Id,FirstName,Title,WorkPhone" +
                        "&$orderby=Title,FirstName",
                    type: "GET",
                    headers: {
                        "accept": "application/json;odata=verbose",
                    },
                    success: function (data) {
                        REST.TableRenderer.set_data(data.d.results);
                        REST.TableRenderer.render();
                    },
                    error: function (err) {
                        alert(JSON.stringify(err));
                    }
                }
            );
    },

    update: function (id, lname, fname, wphone) {
        $.ajax(
                {
                    url: _spPageContextInfo.webServerRelativeUrl +
                        "/_api/web/lists/getByTitle('Contacts')/getItemByStringId('" +
                        id + "')",
                    type: "POST",
                    contentType: "application/json;odata=verbose",
                    data: JSON.stringify(
                    {
                        '__metadata': {
                            'type': 'SP.Data.ContactsListItem'
                        },
                        'Title': lname,
                        'FirstName': fname,
                        'WorkPhone': wphone
                    }),
                    headers: {
                        "accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                        "IF-MATCH": "*",
                        "X-Http-Method": "PATCH"
                    },
                    success: function (data) {
                        REST.FormFiller.lock();
                    },
                    error: function (err) {
                        alert(JSON.stringify(err));
                    }
                }
            );
    },

    remove: function (id) {
        $.ajax(
                {
                    url: _spPageContextInfo.webServerRelativeUrl +
                        "/_api/web/lists/getByTitle('Contacts')/getItemByStringId('" +
                        id + "')",
                    type: "DELETE",
                    headers: {
                        "accept": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                        "IF-MATCH":"*"
                    },
                    success: function (data) {
                        REST.Operator.readAll();
                    },
                    error: function (err) {
                        alert(JSON.stringify(err));
                    }
                }
            );
    },

};