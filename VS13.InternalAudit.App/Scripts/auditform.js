
//alert('auditform.js loaded');
$(document).ready(function () {
    //alert('auditform.js ready');

    //Wire up the save button on the standard edit form template
    $("input[value='Save']").click(function () {
        var $source = $("select[title='Audit Source']").val();
        var $auditnumber = $("input[title='Audit Number']").val();
        //alert('$source=' + $source);
        //viewCriteriaItemTemplates($source);
        copyCriteriaItemTemplates($source, $auditnumber);
    });
});