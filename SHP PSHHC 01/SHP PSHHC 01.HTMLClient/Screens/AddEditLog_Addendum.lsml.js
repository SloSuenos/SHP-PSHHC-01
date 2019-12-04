/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditLog_Addendum.created = function (screen) {
    // Write code here.
    myapp.AddEditLog_Addendum.c_Date_postRender = function (element, contentItem) {
        $(element).parent().find("label")[0].innerHTML += " *";
    };
    myapp.AddEditLog_Addendum.Notes_postRender = function (element, contentItem) {
        $(element).parent().find("label")[0].innerHTML += " *";
    };
};