<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
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
    <div id="newContactForm">
        <div class="formRow"><div class="formControl">Last Name</div><div class="formControl"><input type="text" id="lastName" /></div></div>
        <div class="formRow"><div class="formControl">First Name</div><div class="formControl"><input type="text" id="firstName" /></div></div>
        <div class="formRow"><div class="formControl">Work Phone</div><div class="formControl"><input type="text" id="workPhone" /></div></div>
        <div class="formRow"><div class="formControl"><input type="button" value="Save" id="saveButton" /></div><div class="formControl"><input type="button" value="Cancel" id="cancelButton" /></div></div>
    </div>
</asp:Content>
