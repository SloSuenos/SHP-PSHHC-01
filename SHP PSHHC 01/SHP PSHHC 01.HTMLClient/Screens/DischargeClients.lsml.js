/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.DischargeClients.created = function (screen) {
    myapp.DischargeClients.DateCaseClosed_postRender = function (element, contentItem) {
        $(element).parent().find("label")[0].innerHTML += " *";
    };
    myapp.DischargeClients.StatusAtDischarge_postRender = function (element, contentItem) {
        $(element).parent().find("label")[0].innerHTML += " *";
    };
    myapp.DischargeClients.DischargeNotes_postRender = function (element, contentItem) {
        $(element).parent().find("label")[0].innerHTML += " *";
    };
};

// Validate data on a screen
myapp.DischargeClients.beforeApplyChanges = function (screen) {
    if (!screen.IntakeForm.HousedMoreThan6Mos == null) {
        alert("Housed More than 6 Months cannot be empty");
        return false;
    } else if (!screen.IntakeForm.HousedMoreThan12Mos == null) {
        alert("Housed More than 12 Months cannot be empty");
        return false;
    } else if (!screen.IntakeForm.StatusAtDischarge == null) {
        alert("Status at Discharge cannot be empty");
        return false;
    } else if (!screen.IntakeForm.DischargeNotes == null) {
        alert("Discharge Notes cannot be empty");
        return false;
    } else {
        screen.IntakeForm.Active = false;
        return true;
    }
};

myapp.DischargeClients.HousedMoreThan6Mos_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.DischargeClients.HousedMoreThan12Mos_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";

    contentItem.dataBind("value", function () {
        if (contentItem.value) {
            contentItem.screen.IntakeForm.HousedMoreThan6Mos = true;
        }
    })
};