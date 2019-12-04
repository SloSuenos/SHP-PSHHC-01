function makeTip(element, tipText) {
    var tip = $(element).parent().find("label");
    tip.css("text-decoration", "underline dotted blue");
    tip.addClass("tipper");
    tip.attr("title", tipText);
    tippy('.tipper', {
        delay: 100,
        arrow: true,
        arrowType: 'round',
        duration: 500,
        animation: 'scale'
    });
};
function hover(element) {
    $(element).hover(function () { $(this).css("background", "LightGray"); },
function () { $(this).css("background", ""); });
};

function fixTableHeader(element) {
    var old_th = $(element).find("thead");
    var new_th = old_th.parent().clone(true);
    new_th.find("tbody").remove();
    new_th = new_th.wrap("<div class=\"msls-clear msls-presenter-content msls-font-style-normal msls-vauto msls-hscroll\"></div>").parent();
    old_th.remove();
    $(element).before(new_th);
};
function fixButton(element) {
    element.style.backgroundColor = "LightGray";
};
function FixLabel(element) {
    $(element).parent().find("label")[0].innerHTML += "<span style='color: #ff0000'> *</span>";
};
function setYesNo(element, contentItem) {
    var radio1 = contentItem.name + "1", radio2 = contentItem.name + "2";
    var RadioYes = $("<input name=" + contentItem.name + 'Name' + " type='radio' id=" + radio1 + " data-role='none'/><label for=" + radio1 + "> Yes </label>");
    var RadioNo = $("<input name=" + contentItem.name + 'Name' + " type='radio' id=" + radio2 + " data-role='none'/><label for=" + radio2 + "> No </label>");
    RadioYes.appendTo($(element)); RadioNo.appendTo($(element));
    RadioYes.change(function () {                                            //sets contentitem value on change
        if (RadioYes[0].checked) { contentItem.value = true; }
    })
    RadioNo.change(function () {
        if (RadioNo[0].checked) { contentItem.value = false; }
    })
};
function setYesNoEI(element, contentItem) { //note merge w/ the above
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