/// <reference path="~/GeneratedArtifacts/viewModel.js" />
// uses AJAX to return a comma delimited string of user info
myapp.BrowseHome.created = function (screen) {
    if (typeof myapp.GlobalPerm == "undefined") { //Don't want to run this more than once.
        msls.promiseOperation(CallGetUserInfo).then(function PromiseSuccess(UserInfoString) {
            var UserInfoArray = UserInfoString.split(",");
            if (UserInfoArray[0] == "True") { //User is an admin
                myapp.GlobalPerm = true;
                screen.findContentItem("AdminButton").isEnabled = true;
            } else { //user is not an admin
                myapp.GlobalPerm = false;
                screen.findContentItem("AdminButton").isEnabled = false;
            }
            myapp.GlobalUser = UserInfoArray[1]; //username stripped of domain
            myapp.GlobalFullName = UserInfoArray[2]; //user's full name
            screen.details.displayName = "SHP: " + myapp.GlobalFullName; //Adds username to home screen
        });
    } else { screen.details.displayName = "SHP: " + myapp.GlobalFullName; }
    screen.DischargedClients.addChangeListener("count", function () {
        screen.DCount = screen.DischargedClients.count;
    });
}
function CallGetUserInfo(operation) {
    $.ajax({
        type: 'post',

        data: {},

        url: '../Web/GetUserInfo.ashx',

        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}

//This block of code cleans up the screen by not displaying the empty intakes table when no intake has been selected.
myapp.BrowseHome.sloshowintakes_execute = function (screen) {
    screen.findContentItem("IntakeFormsSLO").isVisible = true;
    screen.findContentItem("IntakeForms_SB").isVisible = false;
    screen.findContentItem("IntakeForms_Ventura").isVisible = false;
    screen.findContentItem("IntakeFormsSP").isVisible = false;
};
myapp.BrowseHome.sbshowintakes_execute = function (screen) {
    screen.findContentItem("IntakeForms_SB").isVisible = true;
    screen.findContentItem("IntakeFormsSLO").isVisible = false;
    screen.findContentItem("IntakeForms_Ventura").isVisible = false;
    screen.findContentItem("IntakeFormsSP").isVisible = false;
};
myapp.BrowseHome.ventshowintakes_execute = function (screen) {
    screen.findContentItem("IntakeForms_Ventura").isVisible = true;
    screen.findContentItem("IntakeFormsSLO").isVisible = false;
    screen.findContentItem("IntakeForms_SB").isVisible = false;
    screen.findContentItem("IntakeFormsSP").isVisible = false;
};
myapp.BrowseHome.spshowintakes_execute = function (screen) {
    screen.findContentItem("IntakeFormsSP").isVisible = true;
    screen.findContentItem("IntakeFormsSLO").isVisible = false;
    screen.findContentItem("IntakeForms_SB").isVisible = false;
    screen.findContentItem("IntakeForms_Ventura").isVisible = false;
};
// Report buttons

myapp.BrowseHome.HUDServicesCoordinatorPropertyClientTotalsTXT_execute = function (screen) {
    OpenInNewTab("HUD+Services+Coordinator+Client+Property+Totals");
};
myapp.BrowseHome.HUDServicesCoordinatorCityClientTotals_execute = function (screen) {
    OpenInNewTab("HUD+Services+Coordinator+Client+City+Totals");
};
myapp.BrowseHome.HUDServicesCoordinatorCountyClientTotals_execute = function (screen) {
    OpenInNewTab("HUD+Services+Coordinator+Client+County+Totals");
};
myapp.BrowseHome.HudServicesCoordinatorGeographic_execute = function (screen) {
    OpenInNewTab("HUD+Services+Coordinator+Geographic");
};
function OpenInNewTab(rpt) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2f";
    var win = window.open(url.concat(rpt), '_blank');
};
myapp.BrowseHome.ProviderTotals_execute = function (screen) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2fProvider+Totals&username=";
    var param = myapp.GlobalUser;
    window.open(url.concat(param), '_blank');
};
myapp.BrowseHome.ProviderHours_execute = function (screen) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2fProvider+Hours&SP=";
    var param = myapp.GlobalUser;
    window.open(url.concat(param), '_blank');
};
myapp.BrowseHome.ClientServed_execute = function (screen) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2fClients+Served";
    var param = "";
    window.open(url.concat(param), '_blank');
};
myapp.BrowseHome.EOFE_execute = function (screen) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2fExchangeOfInfoExpiration";
    var param = "";
    window.open(url.concat(param), '_blank');
};

// Report description text
myapp.BrowseHome.HUDServicesCoordinatorGeographicTXT_render = function (element, contentItem) {
    element.innerHTML = "Displays client activities and age ranges grouped by County, City, and Property within date range chosen. HUD Services Coordinator Geographic.";
};
myapp.BrowseHome.HUDServicesCoordinatorPropertyClientTotalsTXT_render = function (element, contentItem) {
    element.innerHTML = "Input activity date range and Property values and then click the 'View Report' button. Displays hours spent and activities by client. HUD Services Coordinator Property Client Totals.";
};
myapp.BrowseHome.HUDServicesCoordinatorCityClientTotalsTXT_render = function (element, contentItem) {
    element.innerHTML = "Input activity date range and City values and then click the 'View Report' button. Displays hours spent and activities by client. HUDServices Coordinator City Client Totals.";
};
myapp.BrowseHome.HUDServicesCoordinatorCountyClientTotalsTXT_render = function (element, contentItem) {
    element.innerHTML = "Input activity date range and County values and then click the 'View Report' button. Displays hours spent and activities by client. HUDServices Coordinator County Client Totals.";
};
myapp.BrowseHome.ProviderTotalsTXT_render = function (element, contentItem) {
    element.innerHTML = "Drilldown report, displays Activity time grouped by site, client, Year, Month, Week, and day.";
};
myapp.BrowseHome.ScreenContent_render = function (element, contentItem) {
    element.innerHTML = "Simple report displays Provider total clients served, hours, and average during date chosen.";
};
myapp.BrowseHome.ClientsServed_render = function (element, contentItem) {
    element.innerHTML = "Simple report displays number of clients served withing a date range.";
};
myapp.BrowseHome.ReportWarningTxt_render = function (element, contentItem) {
    element.innerHTML = "The reports below will open in a new tab in your browser. If offsite, you will be prompted to login again. *Note these reports may take several minutes to load and may not display correctly with some 3rd party browsers.";
};
myapp.BrowseHome.EOFi_render = function (element, contentItem) {
    element.innerHTML = "Displays clients Exchange of Information expirations with sortable columns";
};
myapp.BrowseHome.ExitApp_execute = function (screen) {
    window.close();
};


myapp.BrowseHome.IntakeFormsSLO_postRender = function (element, contentItem) {
    fixTableHeader(element);
};
myapp.BrowseHome.IntakeForms_SB_postRender = function (element, contentItem) {
    fixTableHeader(element);
};
myapp.BrowseHome.IntakeForms_Ventura_postRender = function (element, contentItem) {
    fixTableHeader(element);
};
myapp.BrowseHome.IntakeFormsSP_postRender = function (element, contentItem) {
    fixTableHeader(element);
};
myapp.BrowseHome.DischargedClients_postRender = function (element, contentItem) {
    fixTableHeader(element);
};
myapp.BrowseHome.ClientSearch_postRender = function (element, contentItem) {
    fixTableHeader(element);
};
myapp.BrowseHome.IntakeForms1Template_postRender = function (element, contentItem) {
    hover(element);
};
myapp.BrowseHome.IntakeForms_SBTemplate_postRender = function (element, contentItem) {
    hover(element);
};
myapp.BrowseHome.IntakeForms_VenturaTemplate_postRender = function (element, contentItem) {
    hover(element);
};
myapp.BrowseHome.IntakeFormsTemplate_postRender = function (element, contentItem) {
    hover(element);
};
myapp.BrowseHome.DischargedClientsTemplate_postRender = function (element, contentItem) {
    hover(element);
};
myapp.BrowseHome.IntakeFormsSearchTemplate_postRender = function (element, contentItem) {
    hover(element);
};