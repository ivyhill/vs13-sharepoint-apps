'use strict';
var clientContext = SP.ClientContext.get_current();
var siteUrl = '/sites/dev/apps/internalaudits';
var hostWebURL = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
var cparList;

function viewCriteriaItemTemplates(source) {
    //alert("siteUrl= " + siteUrl + "; source= " + source)
    var oList = clientContext.get_web().get_lists().getByTitle('Criteria Items Templates');
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
        '<View><Query><Where><Eq><FieldRef Name=\'Source\'/>' + 
        '<Value Type=\'Text\'>' + source + '</Value></Eq></Where></Query>' +
        '<RowLimit>10</RowLimit></View>'
    );
    //alert("camlQuery= " + camlQuery.get_viewXml())
    var context = this == undefined ? {} : this;
    context.collListItem = oList.getItems(camlQuery);

    clientContext.load(context.collListItem);
    clientContext.executeQueryAsync(Function.createDelegate(context, onViewSucceeded), Function.createDelegate(context, onViewFailed));
}
function onViewSucceeded(sender, args) {
    var listItemInfo = '';
    var listItemEnumerator = this.collListItem.getEnumerator();
    while (listItemEnumerator.moveNext()) {
        var item = listItemEnumerator.get_current();
        listItemInfo += '\nID: ' + item.get_id() +
                        '\nTitle: ' + item.get_item('Title') +
                        '\nQuestion: ' + item.get_item('Question') +
                        '\nSource: ' + item.get_item('Source');

    }
    alert(listItemInfo.toString());
}
function onViewFailed(sender, args) { alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace()); }

function createCriteriaItem(title, question, source, auditnumber) {
    //alert("siteUrl= " + siteUrl + "; title= " + title + "; question= " + question + "; source= " + source)
    var oList = clientContext.get_web().get_lists().getByTitle('Criteria Items');
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.newitem = oList.addItem(itemCreateInfo);
    this.newitem.set_item('Title', title);
    this.newitem.set_item('Question', question);
    this.newitem.set_item('Source', source);
    this.newitem.set_item('AuditNumber', auditnumber);
    this.newitem.update();

    clientContext.load(this.newitem);
    clientContext.executeQueryAsync(Function.createDelegate(this, onCreateSucceeded), Function.createDelegate(this, onCreateFailed));
}
function onCreateSucceeded() { alert('Created criteria item #' + this.newitem.get_id()); }
function onCreateFailed(sender, args) { alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace()); }

function copyCriteriaItemTemplates(source, auditnumber) {
    //alert("siteUrl= " + siteUrl + "; source= " + source + "; auditnumber= " + auditnumber)
    var oList = clientContext.get_web().get_lists().getByTitle('Criteria Items Templates');
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
        '<View><Query><Where><Eq><FieldRef Name=\'Source\'/>' +
        '<Value Type=\'Text\'>' + source + '</Value></Eq></Where></Query>' +
        '<RowLimit>10</RowLimit></View>'
    );
    //alert("camlQuery= " + camlQuery.get_viewXml())
    var context = this == undefined ? {} : this;
    context.collListItem = oList.getItems(camlQuery);
    context.auditnumber = auditnumber;

    clientContext.load(context.collListItem);
    clientContext.executeQueryAsync(Function.createDelegate(context, onCopySucceeded), Function.createDelegate(context, onCopyFailed));
}
function onCopySucceeded(sender, args) {
    //alert('this.collListItem=' + this.collListItem + '; this.auditnumber=' + this.auditnumber);
    var listItemEnumerator = this.collListItem.getEnumerator();
    var items = clientContext.get_web().get_lists().getByTitle('Criteria Items');
    while (listItemEnumerator.moveNext()) {
        var item = listItemEnumerator.get_current();

        //var itemCreateInfo = new SP.ListItemCreationInformation();
        var newitem = items.addItem(new SP.ListItemCreationInformation());
        newitem.set_item('Title', item.get_item('Title'));
        newitem.set_item('Question', item.get_item('Question'));
        newitem.set_item('Source', item.get_item('Source'));
        newitem.set_item('AuditNumber', this.auditnumber);
        newitem.update();
        clientContext.load(newitem);
    }
    clientContext.executeQueryAsync(Function.createDelegate(null, onCopyCreateSucceeded), Function.createDelegate(null, onCopyFailed));
}
function onCopyCreateSucceeded() { alert('Created criteria item'); }
function onCopyFailed(sender, args) { alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace()); }

function createCPAR(title, action, finding, initiated, initiatedby, department, auditnumber) {
    //alert("hostWebURL= " + hostWebURL + "; title= " + title + "; action= " + action + "; finding= " + finding + "; initiated= " + initiated + "; initiatedby= " + initiatedby + "; department= " + department + "; auditnumber= " + auditnumber)
    var hostWebContext = new SP.AppContextSite(clientContext, hostWebURL);
    cparList = hostWebContext.get_web().get_lists().getByTitle('CPAR');

    this.cparitem = cparList.addItem(new SP.ListItemCreationInformation());
    this.cparitem.set_item('Title', title);
    this.cparitem.set_item('Action', action);
    this.cparitem.set_item('Finding', finding);
    //this.cparitem.set_item('Initiated', initiated);
    //this.cparitem.set_item('InitiatedBy', initiatedby);
    //this.cparitem.set_item('Correcting Department', department);
    //this.cparitem.set_item('Comments', auditnumber);
    this.cparitem.update();

    cparList.update();
    //clientContext.load(this.cparitem);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onCreateCPARSucceeded), Function.createDelegate(this, this.onCreateCPARFailed));
}
function onCreateCPARSucceeded() { alert('Created CPAR item #' + this.cparitem.get_id()); }
function onCreateCPARFailed(sender, args) { alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace()); }


//Utility functions
function getQueryStringParameter(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve) {
            return singleParam[1];
        }
    }
}