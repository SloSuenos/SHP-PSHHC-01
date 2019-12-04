/// <reference path="~/GeneratedArtifacts/viewModel.js" />
//These mark fields as required - SRB
var eoiDate, poaName, poaPhone;
var eL = [];
//var DupTime = false;
var newHealthCoverage = false;

myapp.EditIntakeForm.LastName_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.FirstName_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.DateCaseOpened_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.ServiceProvider1_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.c_Property_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.Ethnicity2_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.Race_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.ReferralType_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.ReferralSource_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.Unit__postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.DisabilityStatus_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.DisablityCatagory_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.DisabilityRequiresAssistance_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.SupplementalNutritionAssistanceProgram_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.TemporaryAssistanceToNeedyFamilies_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.SupplementalSecurityIncome_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.SocialSecurityDisabilityInsurance_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.SubstanceAbuseTreatment_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.PrimaryHealthCareProvider_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.Veteran2_postRender = function (element, contentItem) { FixLabel(element); };
myapp.EditIntakeForm.HighestEducationLevel_postRender = function (element, contentItem) { FixLabel(element); };

myapp.EditIntakeForm.ExchangeOfInfo_postRender = function (element, contentItem) {
    contentItem.addChangeListener(null, function () {
        if (contentItem.value == true) {
            eoiDate.isEnabled = true;
            eoiDate.isVisible = true;
        } else {
            eoiDate.value = null;
            eoiDate.isEnabled = false;
            eoiDate.isVisible = false;
        }
    })
};
myapp.EditIntakeForm.ExchangeOfInfoDate_postRender = function (element, contentItem) {
    eoiDate = contentItem;
    if (contentItem.screen.IntakeForm.ExchangeOfInfo) {
        eoiDate.isEnabled = true;
        eoiDate.isVisible = true;
    } else {
        eoiDate.isEnabled = false;
        eoiDate.isVisible = false;
    }
};
myapp.EditIntakeForm.PowerOfAttorney_postRender = function (element, contentItem) {
    contentItem.addChangeListener(null, function () {
        if (contentItem.value == true) {
            poaName.isEnabled = true;
            poaPhone.isEnabled = true;
            poaName.isVisible = true;
            poaPhone.isVisible = true;
        } else {
            poaName.value = null;
            poaPhone.value = null;
            poaName.isEnabled = false;
            poaPhone.isEnabled = false;
            poaName.isVisible = false;
            poaPhone.isVisible = false;
        }
    })
};
myapp.EditIntakeForm.POAName_postRender = function (element, contentItem) {
    poaName = contentItem;
    if (contentItem.screen.IntakeForm.PowerOfAttorney) {
        poaName.isEnabled = true;
        poaName.isVisible = true;
    } else {
        poaName.isEnabled = false;
    }
};
myapp.EditIntakeForm.POAPhone_postRender = function (element, contentItem) {
    poaPhone = contentItem;
    if (contentItem.screen.IntakeForm.PowerOfAttorney) {
        poaPhone.isEnabled = true;
        poaPhone.isVisible = true;
    } else {
        poaPhone.isEnabled = false;
    }
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
myapp.EditIntakeForm.HealthCoverages_postRender = function (element, contentItem) {
    fixTableHeader(element)
};
myapp.EditIntakeForm.ChronicHomeless_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.ConsentFormSigned_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.Disabled_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.ExchangeOfInfo_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.FarmWorker_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.EditIntakeForm.MediCal_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.EditIntakeForm.Medicare_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.NoHealthInsurance_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.PowerOfAttorney_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.EditIntakeForm.PrivateHealthInsurance_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.PsychotropicMedications_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.Section8_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.SingleFemaleHeadOfHousehold_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.ConsentForTDG_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.TBRA_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.VASH_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.EditIntakeForm.ActiveVeteran_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.EditIntakeForm.Veteran_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.RegisteredVoter_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.EditIntakeForm.ExchangeOfInfoExpiryDate_postRender = function (element, contentItem) {    cI = contentItem;};
myapp.EditIntakeForm.MemorialConsent_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.RentersInsurance_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.EditIntakeForm.CloseDupBdayPop_execute = function (screen) { return screen.closePopup("DuplicateBirthday"); };

myapp.EditIntakeForm.QIntakeFormDupDOBItemTap_execute = function (screen) {
    myapp.cancelChanges().then(function () { myapp.showEditIntakeForm(screen.qIntakeDOBSearch.selectedItem) })
};
myapp.EditIntakeForm.ScreenContent_render = function (element, contentItem) {
    element.innerHTML = "Existing Intake(s) below have the same birthday.\n If your Intake already exists, then click on it to edit it,\n or choose 'Return and Continue' to continue creating the new Intake.\n Click 'Cancel' to return to the Home page."
};
myapp.EditIntakeForm.HealthCoveragesTemplate_postRender = function (element, contentItem) {
    var checkbox = $("<input type='checkbox'/>");
    checkbox.css("height", "20");
    checkbox.css("width", "20");
    checkbox.css("margin", "0px");
    eL.push(checkbox);
    $(checkbox).prependTo($(element));

    contentItem.screen.getHealthCoverageJunctions().then(function (OPs) {
        $(checkbox).prependTo($(element));
        $.each(OPs.data, function () {
            this.getHealthCoverage().then(function (eG) {
                if (eG.ID == contentItem.data.ID) {
                    checkbox[0].checked = true;
                    contentItem.value.details["__isSelected"] = true;
                }
            }
            );
        }
        );
    });
    checkbox.change(function () {
        var checked = checkbox[0].checked; //if checking, then checked = true. If unchecking, checked = false
        if (!!contentItem.value.details["__isSelected"] !== checked) {
            if (checked) {
                newHealthCoverage = true;
            }
            contentItem.value.details["__isSelected"] = checked;

            if (checked && contentItem.value.HealthCoverageName == "No Health Insurance") { //if this one is checked, then uncheck the others
                for (i = 1; i < 4; i++) {
                    contentItem.screen.HealthCoverages.data[i].details["__isSelected"] = false; //this is the flag for the update
                    eL[i][0].checked = false; //visual only
                }
            } else if (checked) {
                contentItem.screen.HealthCoverages.data[0].details["__isSelected"] = false; //if any other checked, then uncheck No health insurance
                eL[0][0].checked = false;
            }
        } else {
            contentItem.value.details["__isSelected"] = checked;
        }
    });
};
myapp.EditIntakeForm.CloseHealthCoveragePop_Tap_execute = function (screen) {
    screen.closePopup();
};
myapp.EditIntakeForm.SaveAndClose_Tap_execute = function (screen) {
    if (!newHealthCoverage) {
        return alert("A Health Coverage option is required.");
    }
    screen.IntakeForm.UID = "00000000-0000-0000-0000-000000000000";
    screen.getHealthCoverages().then(function (aHealthCoverage) {
        aHealthCoverage.data.forEach(function (dHealth) {
            if (dHealth.details["__isSelected"] === true) {
                var mapping = screen.HealthCoverageJunctions.addNew();
                mapping.HealthCoverage = dHealth;
                mapping.IntakeForm = screen.IntakeForm;
            }
            else if (dHealth.details["__isSelected"] === false) {
                var aJunctiondata = screen.HealthCoverageJunctions.data;
                aJunctiondata.forEach(function (dJunctiondata) {
                    if (dJunctiondata.HealthCoverage === dHealth) {
                        dJunctiondata.deleteEntity();
                    }
                })
            }
        })
    })
    myapp.commitChanges().then(null, function fail(e) {
        var errmsg = e.message;
        screen.IntakeForm.UID = undefined;
        msls.showMessageBox(errmsg, {
            title: "ERROR Saving ",
            buttons: msls.MessageBoxButtons.ok
        });
        throw e;
    }
 )
};
myapp.EditIntakeForm.Cancel_Tap_execute = function (screen) {
    myapp.cancelChanges().then(function () {
        return screen.closePopup();
    })
};

myapp.EditIntakeForm.ActivitiesOfDailyLiving_postRender = function (element, contentItem) {
    makeTip(element, "Eating – May need assistance with cooking, preparing, or serving food. Bathing – May need assistance getting in and out of shower/tub. Grooming – May need assistance washing hair, shaving, etc. Dressing – May need occasional assistance with dressing. Transferring-May need help going from a seated to standing position and getting in and out of bed. Toileting - May need help using toilet or be incontinent, Other.");
};
myapp.EditIntakeForm.InstrumentalActiviesOfDailyLivingCount_postRender = function (element, contentItem) {
    makeTip(element, "Handling finances, meal preparation, shopping, traveling, housework, using the phone, managing meds, other.");
};