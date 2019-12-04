/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddDailyActivityLog.CaseManagment_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.AddDailyActivityLog.CounselingServices_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.AddDailyActivityLog.c_Date_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};

myapp.AddDailyActivityLog.DailyActivityLog_ServiceProvider1_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
};
myapp.AddDailyActivityLog.HoursSpent_postRender = function (element, contentItem) {
    $(element).parent().find("label")[0].innerHTML += " *";
    if (contentItem.value == undefined || contentItem.value == null) {
        contentItem.value = 0.25;
    }
};
function setYesNoAL(element, contentItem) {
    var radio1 = contentItem.name + "1", radio2 = contentItem.name + "2";

    var RadioYes = $("<input name=" + contentItem.name + 'Name' + " type='radio' id=" + radio1 + " data-role='none'/><label for=" + radio1 + "> Yes </label>");
    var RadioNo = $("<input name=" + contentItem.name + 'Name' + " type='radio' id=" + radio2 + " data-role='none'/><label for=" + radio2 + "> No </label>");

    RadioYes.appendTo($(element)); RadioNo.appendTo($(element));

    RadioYes.change(function () {                                             //sets contentitem value on change
        if (RadioYes[0].checked) { contentItem.value = true; }
    })
    RadioNo.change(function () {
        if (RadioNo[0].checked) { contentItem.value = false; }
    })
};
myapp.AddDailyActivityLog.CaseManagment_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Assessment_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Advocacy_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.BenefitsEntitlementsInsurance_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.ConflictResolution_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.CouplesCounseling_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.CrisisIntervention_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.DomesticViolencePrevention_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.HomeManagement_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Homemaker_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.HomelessnessPrevention_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.EmploymentOrEducation_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.FamilyCounseling_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.FamilySupport_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.FairHousingandCivilRightsAssistance_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.FinancialManagment_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.FoodAssistance_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.FoodBank_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.GangPrevention_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.GeneralInfoReferral_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.CounselingServices_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.GriefCounseling_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.GroupCounseling_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.HealthcareServices_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.IndividualCounseling_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.IsolationIntervention_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.LeaseEducation_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.LegalIssues_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Meals_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.MedicalEquipment_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.MentalHealthServices_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.MonitoringServices_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Nutrition_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Outreach_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.ResidentCouncils_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.SubstanceAbuse_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.TaxPrepServices_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.TransferToAlternateHousingOrHospital_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.TranslationInterpretation_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};
myapp.AddDailyActivityLog.Transportation_render = function (element, contentItem) {
    setYesNoAL(element, contentItem);
};