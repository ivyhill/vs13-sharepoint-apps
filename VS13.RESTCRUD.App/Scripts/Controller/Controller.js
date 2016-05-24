//Namespace
window.REST = window.REST || {};

//Library Pattern
//Handles all user events
window.REST.Controller = {
    init: function () {

        $("#newContact").click(function () {
            SP.UI.ModalDialog.showModalDialog({
                url: "NewContact.aspx?IsDlg=1",
                title: "New Contact",
                allowMaximize: false,
                showClose: true,
                width: 400,
                height: 200,
                dialogReturnValueCallback: REST.Operator.readAll
            });
        });

        $("#newButton").click(function () {
            REST.Operator.create($("#lastName").val(), $("#firstName").val(), $("#workPhone").val());
        });

        $("#saveButton").click(function () {
            var id = getQueryStringValue("Id");
            REST.Operator.update(id, $("#lastName").val(), $("#firstName").val(), $("#workPhone").val());
        });

        $("#cancelButton").click(function () {
            SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel, false);
        });
    },

    editItem: function(id) {
        SP.UI.ModalDialog.showModalDialog({
            url: "EditContact.aspx?IsDlg=1&Id=" + id,
            title: "Edit Contact",
            allowMaximize: false,
            showClose: true,
            width: 400,
            height: 200,
            dialogReturnValueCallback: REST.Operator.readAll
        });
    },

    deleteItem: function (id) {
        REST.Operator.remove(id);
    }
}
