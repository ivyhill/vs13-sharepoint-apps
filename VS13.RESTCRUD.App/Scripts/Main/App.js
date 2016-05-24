$(document).ready(function () {

    REST.Controller.init();
    REST.TableRenderer.init();

    var id = getQueryStringValue("Id");
    if (id == null) {
        REST.TableRenderer.set_displayDiv($("#displayWindow"));
        REST.Operator.readAll();
    }
    else {
        REST.Operator.readItem(id);
    }
});

function getQueryStringValue(paramName) {
    try {
        var params = document.URLUnencoded.split("?")[1].split("&");
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramName)
                return decodeURIComponent(singleParam[1]);
        }
    }
    catch (err)
    { return null; }
}