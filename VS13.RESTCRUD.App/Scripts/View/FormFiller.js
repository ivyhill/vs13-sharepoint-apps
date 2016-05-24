//Namespace
window.REST = window.REST || {};

//Singleton Pattern
//Fills the edit form
window.REST.FormFiller = function () {

    //private members
    fill = function (lname, fname, wphone) {
        $("#firstName").val(fname);
        $("#lastName").val(lname);
        $("#workPhone").val(wphone);
    },

    clear = function () {
        $("#firstName").val('');
        $("#lastName").val('');
        $("#workPhone").val('');
    },

    lock = function () {
        $("#firstName").attr('readonly', true);
        $("#lastName").attr('readonly', true);
        $("#workPhone").attr('readonly', true);
        $("#saveButton").hide();
    }

    //public interface
    return {
        fill: fill,
        clear: clear,
        lock: lock
    };
}();
