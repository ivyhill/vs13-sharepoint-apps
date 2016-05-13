
alert('editform.js loaded');
$(document).ready(function () {
    alert('editform.js ready');

    //Wire up the save button on the standard edit form template
    $("input[value='Save']").click(function () {
        alert('Save clicked');
    });
});