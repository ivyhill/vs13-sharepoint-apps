(function () {
    //alert('init()');
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};
    customRenderingOverride.Templates.Fields = {
        "AuditSource": { "View": renderSource }
    };
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);
})();

function renderSource(ctx) {
    //alert('renderSource()');
    var sourceValue = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
    if (sourceValue == "P-QM-0001") {
        return "<span style='color:red'>" + sourceValue + "</span>"
    }
    else if (sourceValue == "P-BD-0001") {
        return "<span style='color:green'>" + sourceValue + "</span>"
    }
    else {
        return sourceValue;
    }
}