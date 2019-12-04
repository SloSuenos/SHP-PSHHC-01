// JavaScript source code
/// <reference path="~/GeneratedArtifacts/viewModel.js" />
//These mark fields as required - SRB
var eoiDate, poaName, poaPhone;

myapp.EditIntakeForm.LastName_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.BirthDate_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.FirstName_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.DateCaseOpened_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.ServiceProvider1_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.c_Property_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.Ethnicity2_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.Race_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.EditIntakeForm.ReferralType_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};

myapp.EditIntakeForm.created = function (screen) { //enables the service provider field for admins. Disables it for nonadmins
    if (myapp.GlobalPerm == true) { //GlobalPerm is a global parameter set in browsehome.lsml.js. If yes, then this is an admin so we allow them to edit the service provider.
        screen.findContentItem("ServiceProvider1").isEnabled = true;
        screen.findContentItem("ScreenContent").isVisible = false;
    } else {
        screen.findContentItem("ServiceProvider1").isEnabled = false; //Not an admin so we disable service provider and check to see if this is the service provider for this intake. If it isn't then we warn that they will become the service provider for this intake.
        screen.findContentItem("ScreenContent").isVisible = false;
        if (myapp.GlobalUser != screen.IntakeForm.ServiceProvider1.UserName) {
            screen.findContentItem("ScreenContent").isVisible = true; //Check to see if the service provider is the same as the current user. If so, then display the warning.
        }
    }
};

myapp.EditIntakeForm.ScreenContent_render = function (element, contentItem) {
    element.innerHTML = "WARNING! You are not this Intake's primary Service Provider. If you save any changes to this Intake, you will become this Intake's primary Service Provider."
    $(element).parent().css({
        color: "Red"
    });
};
myapp.EditIntakeForm.ExchangeOfInfoDate_postRender = function (element, contentItem) {
    eoiDate = contentItem;
    //eoiDate.dataBind("value", function () {
    //    if (!contentItem.value instanceof Date)   {
    //        var d = new Date(contentItem.value);
    //        contentItem.screen.IntakeForm.ExchangeOfInfoExpiryDate = new Date(d.setFullYear(d.getFullYear() + 1));
    //    }
    //})
};
myapp.EditIntakeForm.POAName_postRender = function (element, contentItem) {
    poaName = contentItem;
};
myapp.EditIntakeForm.POAPhone_postRender = function (element, contentItem) {
    poaPhone = contentItem;
};
myapp.EditIntakeForm.ExchangeOfInfo_postRender = function (element, contentItem) {
    contentItem.dataBind("value", function () {
        if (contentItem.value) {
            eoiDate.isEnabled = true;
        } else {
            eoiDate.isEnabled = false;
        }
    })
};
myapp.EditIntakeForm.PowerOfAttorney_postRender = function (element, contentItem) {
    contentItem.dataBind("value", function () {
        if (contentItem.value) {
            poaName.isEnabled = true;
            poaPhone.isEnabled = true;
        } else {
            poaName.isEnabled = false;
            poaPhone.isEnabled = false;
        }
    })
};
function setYesNoEI(element, contentItem) {
    var radio1 = contentItem.name + "1", radio2 = contentItem.name + "2";

    var RadioYes = $("<input name=" + contentItem.name + 'Name' + " type='radio' id=" + radio1 + " data-role='none'/><label for=" + radio1 + "> Yes </label>");
    var RadioNo = $("<input name=" + contentItem.name + 'Name' + " type='radio' id=" + radio2 + " data-role='none'/><label for=" + radio2 + "> No </label>");

    RadioYes.appendTo($(element)); RadioNo.appendTo($(element));

    if (contentItem.screen.IntakeForm.ID != undefined) {                       // check to see if add or edit
        if (contentItem.value == true) { RadioYes[0].checked = true; }          //sets value to nothing, true or false on open
        else if (contentItem.value == false) { RadioNo[0].checked = true; }
    }

    RadioYes.change(function () {                                             //sets contentitem value on change
        if (RadioYes[0].checked) { contentItem.value = true; }
    })
    RadioNo.change(function () {
        if (RadioNo[0].checked) { contentItem.value = false; }
    })
};
myapp.EditIntakeForm.ConsentFormSigned_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.ChronicHomeless_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.Disabled_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.ExchangeOfInfo_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.FarmWorker_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.MediCal_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.Medicare_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.NoHealthInsurance_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.PowerOfAttorney_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.PsychotropicMedications_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.Section8_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.SingleFemaleHeadOfHousehold_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.ConsentForTDG_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.TBRA_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.VASH_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.Veteran_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.ActiveVeteran_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};
myapp.EditIntakeForm.PrivateHealthInsurance_render = function (element, contentItem) {
    setYesNoEI(element, contentItem);
};