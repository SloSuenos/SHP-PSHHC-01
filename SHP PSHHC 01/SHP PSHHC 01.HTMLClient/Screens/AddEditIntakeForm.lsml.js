/// <reference path="~/GeneratedArtifacts/viewModel.js" />
//These mark fields as required - SRB
var eL = [];
var DupTime = false;
var newHealthCoverage = false;

myapp.AddEditIntakeForm.created = function (screen) { //enables the service provider field for admins. Disables it for nonadmins
    //screen.qIntakeDOBSearch().count
    if (myapp.GlobalPerm == true) { //GlobalPerm is a global parameter set in browsehome.lsml.js
        screen.findContentItem("ServiceProvider1").isVisible = true;
    } else {
        screen.findContentItem("ServiceProvider1").isVisible = false;
    }
};

myapp.AddEditIntakeForm.BirthDate_postRender = function (element, contentItem) {
    FixLabel(element);
    contentItem.addChangeListener("value", function () {
        if (!DupTime) {
            DupTime = true;
            setTimeout(function () {
                DupTime = false;
                if (contentItem.value > new Date("01/01/1910") && contentItem.value < new Date()) {
                    myapp.activeDataWorkspace.SHPSQL1_DEVData.QIntakeFormDupDOB(contentItem.value).execute().then(function (result) {
                        var x = result.results;
                        var y = "The following Intake(s) have the same birthday. Please verify that you are not creating a duplicate Intake.\n";
                        if (x.length > 0) {
                            var i;
                            for (i = 0; i < x.length; i++) {
                                y = y + "\n" + x[i].FirstName + " " + x[i].LastName + "\n";
                            }
                            alert(y);
                        }
                    })
                }
            }, 4000)
        } else {
            return;
        }
    })
};
myapp.AddEditIntakeForm.LastName_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.FirstName_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.DateCaseOpened_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.ServiceProvider1_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.c_Property_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.Ethnicity2_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.Race_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.ReferralType_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.ReferralSource_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.Unit__postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.DisabilityStatus_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.DisablityCatagory_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.DisabilityRequiresAssistance_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.SupplementalNutritionAssistanceProgram_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.TemporaryAssistanceToNeedyFamilies_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.SupplementalSecurityIncome_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.SocialSecurityDisabilityInsurance_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.SubstanceAbuseTreatment_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.PrimaryHealthCareProvider_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.Veteran2_postRender = function (element, contentItem) { FixLabel(element); };
myapp.AddEditIntakeForm.HighestEducationLevel_postRender = function (element, contentItem) { FixLabel(element); };

myapp.AddEditIntakeForm.PowerOfAttorney_postRender = function (element, contentItem) {
    contentItem.dataBind("value", function () {
        if (contentItem.value == true) {
            contentItem.screen.showPopup("POA");
        }
    })
};
myapp.AddEditIntakeForm.ExchangeOfInfo_postRender = function (element, contentItem) {
    contentItem.dataBind("value", function () {
        if (contentItem.value == true) {
            contentItem.screen.showPopup("EOI");
        }
    })
};
myapp.AddEditIntakeForm.HealthCoverages_postRender = function (element, contentItem) {
    fixTableHeader(element)
};
myapp.AddEditIntakeForm.ChronicHomeless_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.ConsentFormSigned_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.Disabled_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.ExchangeOfInfo_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.FarmWorker_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.AddEditIntakeForm.MediCal_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.AddEditIntakeForm.Medicare_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.NoHealthInsurance_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.PowerOfAttorney_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.AddEditIntakeForm.PrivateHealthInsurance_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.PsychotropicMedications_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.Section8_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.SingleFemaleHeadOfHousehold_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.ConsentForTDG_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.TBRA_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.VASH_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.AddEditIntakeForm.ActiveVeteran_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.AddEditIntakeForm.Veteran_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.RegisteredVoter_render = function (element, contentItem) { setYesNo(element, contentItem); };
//myapp.AddEditIntakeForm.ExchangeOfInfoExpiryDate_postRender = function (element, contentItem) {    cI = contentItem;};
myapp.AddEditIntakeForm.MemorialConsent_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.RentersInsurance_render = function (element, contentItem) { setYesNo(element, contentItem); };
myapp.AddEditIntakeForm.CloseDupBdayPop_execute = function (screen) { return screen.closePopup("DuplicateBirthday"); };

myapp.AddEditIntakeForm.QIntakeFormDupDOBItemTap_execute = function (screen) {
    myapp.cancelChanges().then(function () { myapp.showAddEditIntakeForm(screen.qIntakeDOBSearch.selectedItem) })
};
myapp.AddEditIntakeForm.ScreenContent_render = function (element, contentItem) {
    element.innerHTML = "Existing Intake(s) below have the same birthday.\n If your Intake already exists, then click on it to edit it,\n or choose 'Return and Continue' to continue creating the new Intake.\n Click 'Cancel' to return to the Home page."
};
myapp.AddEditIntakeForm.HealthCoveragesTemplate_postRender = function (element, contentItem) {
    var checkbox = $("<input type='checkbox'/>");
    checkbox.css("height", "20");
    checkbox.css("width", "20");
    checkbox.css("margin", "0px");
    eL.push(checkbox);
    $(checkbox).prependTo($(element));

    checkbox.change(function () {
        var checked = checkbox[0].checked; //if checking, then checked = true. If unchecking, checked = false
        if (!!contentItem.value.details["__isSelected"] !== checked) {
            if (checked) {
                newHealthCoverage = true;
            }
            contentItem.value.details["__isSelected"] = checked;
            if ((checked && contentItem.value.HealthCoverageName == "No Health Insurance") || (checked && contentItem.value.HealthCoverageName == "N/A")) { //if this one is checked, then uncheck the others
                for (i = 1; i < 13; i++) {
                    if (!contentItem.value.HealthCoverageName == "No Health Insurance" || !contentItem.value.HealthCoverageName == "N/A") {
                        contentItem.screen.HealthCoverages.data[i].details["__isSelected"] = false; //this is the flag for the update
                        eL[i][0].checked = false; //visual only
                    }
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

myapp.AddEditIntakeForm.CloseHealthCoveragePop_Tap_execute = function (screen) {
    screen.closePopup();
};

myapp.AddEditIntakeForm.SaveAndClose_Tap_execute = function (screen) {
    if (!newHealthCoverage) {
        return alert("A Health Coverage option is required.");
    }
    screen.IntakeForm.UID = "00000000-0000-0000-0000-000000000000";
    myapp.applyChanges().then(function () {
        screen.getHealthCoverages().then(function (aHealthCoverage) {
            aHealthCoverage.data.forEach(function (dHealth) {
                if (dHealth.details["__isSelected"] === true) {
                    var mapping = screen.HealthCoverageJunctions.addNew();
                    mapping.HealthCoverage = dHealth;
                    mapping.IntakeForm = screen.IntakeForm;
                }
            })
        })
        myapp.commitChanges();
    }, function fail(e) {
        var errmsg = e.message;
        msls.showMessageBox(errmsg, {
            title: "ERROR Saving ",
            buttons: msls.MessageBoxButtons.ok
        });
        throw e;
    })
};
myapp.AddEditIntakeForm.Cancel_Tap_execute = function (screen) {
    myapp.cancelChanges().then(function () {
        return screen.closePopup();
    })
};

myapp.AddEditIntakeForm.ActivitiesOfDailyLiving_postRender = function (element, contentItem) {
    makeTip(element, "Eating – May need assistance with cooking, preparing, or serving food. Bathing – May need assistance getting in and out of shower/tub. Grooming – May need assistance washing hair, shaving, etc. Dressing – May need occasional assistance with dressing. Transferring-May need help going from a seated to standing position and getting in and out of bed. Toileting - May need help using toilet or be incontinent, Other.");
};
myapp.AddEditIntakeForm.InstrumentalActiviesOfDailyLivingCount_postRender = function (element, contentItem) {
    makeTip(element, "Handling finances, meal preparation, shopping, traveling, housework, using the phone, managing meds, other.");
};