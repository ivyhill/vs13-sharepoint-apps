<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" language="C#" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.2.min.js" type="text/javascript"></script>
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <script type="text/javascript" src="../Scripts/Main/jsrender.js"></script>
    <script type="text/javascript" src="../Scripts/Controller/Controller.js"></script>
    <script type="text/javascript" src="../Scripts/Model/Operator.js"></script>
    <script type="text/javascript" src="../Scripts/View/TableRenderer.js"></script>
    <script type="text/javascript" src="../Scripts/View/FormFiller.js"></script>
    <script type="text/javascript" src="../Scripts/Main/App.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <div id="toolbarWindow">
        <input type="button" id="newContact" value="New" />
    </div>
    <div id="displayWindow">
    </div>
</asp:Content>

