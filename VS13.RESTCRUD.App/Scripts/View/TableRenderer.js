//Namespace
window.REST = window.REST || {};

//Singleton Pattern
//Renders results in a table
window.REST.TableRenderer = function () {

    //private members
    var element = 'undefined',
        data = 'undefined',
        header = 'undefined',
        rowTemplate = 'undefined',
        displayDiv = 'undefined'

        init = function () {
            header = "<thead><th>Last Name</th><th>First Name</th><th>Work Phone</th><th>&nbsp;</th><th>&nbsp;</th></thead>";
            rowTemplate = "<tr><td>{{=Title}}</td><td>{{=FirstName}}</td><td>{{=WorkPhone}}</td><td><a href=\"javascript:REST.Controller.editItem('{{=Id}}');\"><img src='/_layouts/15/images/edit.gif' border='0'/></a></td><td><a href=\"javascript:REST.Controller.deleteItem('{{=Id}}');\"><img src='/_layouts/15/images/delete.gif' border='0'/></a></td></tr>";
            element = $("<table>", { id: "contactsTable" });
            $.template("rowTemplate", rowTemplate);
        },

        set_data = function (v) { data = v; },
        set_displayDiv = function (v) { displayDiv = v; },

        render = function () {
            element.empty();
            element.append($(header));
            element.append($.render(data, "rowTemplate"));
            displayDiv.append(element);
        }

    //public interface
    return {
        init: init,
        set_data: set_data,
        set_displayDiv: set_displayDiv,
        render: render
    };
}();
