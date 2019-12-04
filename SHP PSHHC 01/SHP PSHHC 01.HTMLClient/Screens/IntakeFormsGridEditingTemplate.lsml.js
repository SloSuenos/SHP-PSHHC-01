/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.IntakeFormsGridEditingTemplate.IntakeForm_postRender = function (element, contentItem) {
    // Write code here.

    $(element).css({ 'border': '1px solid lightgray' });
    var old_th = $(element).find("thead");
    var new_th = old_th.parent().clone(true);
    new_th.find("tbody").remove();
    new_th = new_th.wrap("<div class=\"msls-clear msls-presenter-content msls-font-style-normal msls-vauto msls-hscroll\"></div>").parent();
    old_th.remove();
    $(element).before(new_th);
};

myapp.IntakeFormsGridEditingTemplate.RowTemplate_postRender = function (element, contentItem) {
    $(element).hover(function () { $(this).css("background", "LightGray"); },
function () { $(this).css("background", ""); });
};