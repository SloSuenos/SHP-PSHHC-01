/// <reference path="~/GeneratedArtifacts/viewModel.js" />
myapp.ViewIntakeForm.created = function (screen) {
    var visualCollection = screen.DailyActivityLogs; //**Waits for table to be loaded if necessary, then selects 1st record
    if (visualCollection.isLoaded && visualCollection.data[0] != null) {
        visualCollection.selectedItem = visualCollection.data[0];
    }
    else {
        visualCollection.addChangeListener('isLoaded', function () {
            visualCollection.selectedItem = null || visualCollection.data[0];
        })
    }
};

myapp.ViewIntakeForm.rows_postRender = function (element, contentItem) {
    $(element).parent().css({
        "background-color": "lightblue",
        "background-image": "none",
        color: "black"
    });
};
myapp.ViewIntakeForm.Log_AddendumsTemplate_postRender = function (element, contentItem) {
    $(element).parent().css({
        "background-color": "lightgrey",
        "background-image": "none",
        color: "black"
    });
};

//Refreshes underlying intake form to reflect change in SP
myapp.ViewIntakeForm.EditIntake_Tap_execute = function (screen) {
    myapp.showEditIntakeForm(screen.IntakeForm, {
        afterClosed: function () {
            screen.IntakeForm.Refresh();
        }
    })
};
//Navigate home after discharging a client because the underlying should no longer display discharged clients.
myapp.ViewIntakeForm.Discharge_Tap_execute = function (screen) {
    myapp.showDischargeClients(screen.IntakeForm, {
        afterClosed: function () {
            if (screen.IntakeForm.Active == false) { //only return home if discharged
                myapp.navigateHome();
            }
        }
    })
};
myapp.ViewIntakeForm.ExitApp_execute = function (screen) {
    window.close();
};
myapp.ViewIntakeForm.PDF_Detail_execute = function (screen) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2fSingle+Input+with+Activities&rs:Format=PDF&ID=";
    var param = screen.IntakeForm.ID;
    window.open(url.concat(param), '_blank');
};
myapp.ViewIntakeForm.PrintPDFIntakeOnly_execute = function (screen) {
    var url = "https://reports.pshhc.org/APPS/Pages/ReportViewer.aspx?%2fSHP%2fSingle+Input&rs:Format=PDF&ID=";
    var param = screen.IntakeForm.ID;
    window.open(url.concat(param), '_blank');
};
myapp.ViewIntakeForm.IntakeForm_render = function (element, contentItem) {
    element.style.fontWeight = "bold";
    element.style.fontVariant = "small-caps";
    setTimeout(function () {
        element.innerHTML = "Activities: " + contentItem.data.IntakeForm.ActivityLogCount.LogCount;
    }, 1000)

};
myapp.ViewIntakeForm.AddendumsLabel_render = function (element, contentItem) {
    element.innerHTML = "Addendums:";
    element.style.fontWeight = "bold";
    element.style.fontVariant = "small-caps";
};
myapp.ViewIntakeForm.ViewAddAddendum_render = function (element, contentItem) {
    element.innerHTML = "View detail / add Addendum";
    element.style.fontWeight = "bold";
    element.style.color = "DodgerBlue";
    element.style.backgroundColor = "AliceBlue";
    element.style.fontVariant = "small-caps";
    $(element).css("border", "1px solid black");
};

myapp.ViewIntakeForm.Button_postRender = function (element, contentItem) {
    element.innerHTML = "View detail / add Addendum";
    element.style.fontWeight = "bold";
    element.style.color = "DodgerBlue";
    element.style.backgroundColor = "AliceBlue";
    element.style.fontVariant = "small-caps";
    $(element).css("border", "1px solid black");
};
myapp.ViewIntakeForm.DailyActivityLogs1_postRender = function (element, contentItem) {
    $(element).css("border", "1px solid grey");
};