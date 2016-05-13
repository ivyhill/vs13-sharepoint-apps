<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~site/_catalogs/masterpage/AuditApp.master" Language="C#" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="WebPartPageExpansion" content="full" />
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script type="text/javascript" src="../Scripts/Add-in.js"></script>
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Internal Audits
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderLeftNavBar" runat="server">
<%--    <div class="noindex ms-core-listMenu-verticalBox" id="zz13_V4QuickLaunchMenu" onclick="return AjaxNavigate$OnClickHook(event, this);">
		<ul class="root ms-core-listMenu-root static" id="zz14_RootAspMenu">
            <li class="static selected">
                <asp:HyperLink runat="server" class="static selected menu-item ms-core-listMenu-item ms-displayInline ms-core-listMenu-selected ms-navedit-linkNode" Text="Apps Home" NavigateUrl="/sites/dev/apps/" />
                <ul class="static">
                    <li class="static">
                        <asp:HyperLink runat="server" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" ToolTip="Internal Audits list" NavigateUrl="JavaScript:window.location = _spPageContextInfo.webAbsoluteUrl + '/Lists/InternalAudits/AllItems.aspx';">
                            <span class="additional-background ms-navedit-flyoutArrow"><span class="menu-item-text">Audits</span></span>
                        </asp:HyperLink>
                    </li>
                    <li class="static">
                        <asp:HyperLink runat="server" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" ToolTip="Criteria Items list" NavigateUrl="JavaScript:window.location = _spPageContextInfo.webAbsoluteUrl + '/Lists/CriteriaItems/AllItems.aspx';">
                            <span class="additional-background ms-navedit-flyoutArrow"><span class="menu-item-text">Criteria Items</span></span>
                        </asp:HyperLink>
                    </li>
                    <li class="static">
                        <asp:HyperLink runat="server" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" ToolTip="Criteria Items Templates list" NavigateUrl="JavaScript:window.location = _spPageContextInfo.webAbsoluteUrl + '/Lists/CriteriaItemsTemplates/AllItems.aspx';">
                            <span class="additional-background ms-navedit-flyoutArrow"><span class="menu-item-text">Criteria Items Templates</span></span>
                        </asp:HyperLink>
                    </li>
                </ul>
            </li>
            <li class="static">
                <asp:HyperLink runat="server" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" ToolTip="Site Contents" NavigateUrl="/sites/dev/workflows/_layouts/15/appredirect.aspx?instance_id={000C7F9E-C358-47CC-A7E2-575370F3FC2B}&amp;quick_launch=1">
                <a title="Site Contents" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="#">
                    <span class="additional-background ms-navedit-flyoutArrow"><span class="menu-item-text">Site Contents</span></span>
                </asp:HyperLink>
            </li>
            <li class="static">
                <asp:HyperLink runat="server" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" ToolTip="Recycle Bin" NavigateUrl="#">
                    <span class="additional-background ms-navedit-flyoutArrow"><span class="menu-item-text">Recycle Bin</span></span>
                </asp:HyperLink>
            </li>
            <li class="static ms-verticalAlignTop ms-listMenu-editLink ms-navedit-editArea">
                <span id="QuickLaunchMenu_NavMenu_Edit" class="ms-navedit-editSpan">
                    <asp:HyperLink id="QuickLaunchMenu_NavMenu_EditLinks" runat="server" class="ms-navedit-editLinksText" ToolTip="Edit Links" NavigateUrl="#" onclick="g_QuickLaunchMenu = null; EnsureScriptParams('quicklaunch.js', 'QuickLaunchInitEditMode', 'QuickLaunchMenu', 2, 0, 1, 'sid:1025'); cancelDefault(event); return false;">
                        <span class="ms-displayInlineBlock">
                            <span class="ms-navedit-editLinksIconWrapper ms-verticalAlignMiddle"><img class="ms-navedit-editLinksIcon" alt="Edit Links" src="/_layouts/15/images/spcommon.png?rev=43" /></span>
                            <span class="ms-metadata ms-verticalAlignMiddle">Edit Links</span>
                        </span>
                    </asp:HyperLink>
                    <span id="QuickLaunchMenu_NavMenu_Loading" class="ms-navedit-menuLoading ms-hide">
                        <a id="QuickLaunchMenu_NavMenu_GearsLink" title="This animation indicates the operation is in progress. Click to remove this animated image." onclick="HideGears(); return false;" href="#"><img id="zz13_V4QuickLaunchMenu_NavMenu_GearsImage" alt="This animation indicates the operation is in progress. Click to remove this animated image." src="/_layouts/15/images/loadingcirclests16.gif?rev=43" /></a>
                    </span>
                </span>
            </li>
        </ul>
	</div>--%>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div>
        <p id="message">initializing...</p>
    </div>
    <div id="top">
        <div>
            <WebPartPages:WebPartZone ID="WebPartZone1" runat="server" PartChromeType="TitleOnly" />
        </div>
    </div>
    <br />
    <div id="middle">
        <asp:Button ID="listitems" runat="server" OnClientClick="return viewCriteriaItemTemplates('P-BD-0001')" Text="View P-BD-0001 Criteria Item Templates" />
        <asp:Button ID="createitem" runat="server" OnClientClick="return createCriteriaItem('QM-03', 'P-BD-0001,has the scope of the document been defined?', 'P-QM-0001', '16000')" Text="Create Criteria Item" />
        <asp:Button ID="copyitems" runat="server" OnClientClick="return copyCriteriaItemTemplates('P-BD-0001', '16000')" Text="Copy P-BD-0001 Criteria Item Templates" />
        <asp:Button ID="createcpar" runat="server" OnClientClick="return createCPAR('CPAR 1', 'CA', 'Major', '05/07/2016', 'James Heary', 'Business Development', '16000')" Text="Create CPAR" />
    </div>
    <br />
    <div id="bottom">
        <div style="float:left; width:45%; margin:0px 10px">
            <WebPartPages:WebPartZone ID="WebPartZone2" runat="server" PartChromeType="TitleOnly" />
        </div>
        <div style="float:left; width:45%; margin:0px 10px">
            <WebPartPages:WebPartZone ID="WebPartZone3" runat="server" PartChromeType="TitleOnly" />
        </div>
    </div>
</asp:Content>
