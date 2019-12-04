/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AdminScreens.Save_Changes_execute = function (screen) {
    // Save button on adminscreens
    return myapp.applyChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
myapp.AdminScreens.Cancel_Changes_execute = function (screen) {
    // Cancel button on adminscreens
    screen.details.dataWorkspace.SHPSQL1_DEVData.details.discardChanges()
};
myapp.AdminScreens.ExitApp_execute = function (screen) {
    window.close();
};
// Report buttons
myapp.AdminScreens.EndOfYearAdmin_Tap_execute = function (screen) {
    OpenInNewTab("End+of+Year+Admin");
};
myapp.AdminScreens.DemographicProvider_execute = function (screen) {
    OpenInNewTab("Demographic+Provider");

};
myapp.AdminScreens.EndOfYearProvider_execute = function (screen) {
    OpenInNewTab("End+of+Year");
};
myapp.AdminScreens.IntakeLogsByDate_execute = function (screen) {
    OpenInNewTab("Intake+Logs+By+Date");

};
function OpenInNewTab(rpt) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2f";
    var win = window.open(url.concat(rpt), '_blank');
};

// Report description text
myapp.AdminScreens.ReportWarningTxt_render = function (element, contentItem) {
    element.innerHTML = "The report will open in a new tab in your browser. If offsite, you will be prompted to login again. *Note these reports may take several minutes to load and may not display correctly with some 3rd party browsers.";
};
myapp.AdminScreens.EndOfYearAdminTXT_render = function (element, contentItem) {
    element.innerHTML = "Displays hours spend and clients served by County, City and Property. ";
};
myapp.AdminScreens.DemographicProviderTXT_render = function (element, contentItem) {
    element.innerHTML = "Displays quantity of clients served and number of hours spent by each Service Provider within date range chosen.";
};
myapp.AdminScreens.EndOfYearProviderTXT_render = function (element, contentItem) {
    element.innerHTML = "Displays client demographic statistics grouped by Service Provider, County, City and Property.";
};
myapp.AdminScreens.ScreenContent_render = function (element, contentItem) {
    element.innerHTML = "Displays changes made to intakes grouped by month. Logging began 02/06/2019.";
}

fixTableHeader = function (element) {
    var old_th = $(element).find("thead");
    var new_th = old_th.parent().clone(true);
    new_th.find("tbody").remove();
    new_th = new_th.wrap("<div class=\"msls-clear msls-presenter-content msls-font-style-normal msls-vauto msls-hscroll\"></div>").parent();
    old_th.remove();
    $(element).before(new_th);
};
myapp.AdminScreens.ActivityLogBySPandIntake1_postRender = function (element, contentItem) {
    fixTableHeader(element);
};

myapp.AdminScreens.IntakeForms11_postRender = function (element, contentItem) {
    fixTableHeader(element);
};

;