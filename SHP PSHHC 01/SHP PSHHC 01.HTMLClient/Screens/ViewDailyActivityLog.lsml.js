/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewDailyActivityLog.Log_AddendumsTemplate_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().css({
        "background-color": "lightgrey",
        "background-image": "none",
        color: "Black"
    });
};

myapp.ViewDailyActivityLog.ExitApp_execute = function (screen) {
    window.close();
};
myapp.ViewDailyActivityLog.created = function (screen) {  //test to see if Activity has a providers historical designation save with it. if so, display. Else use current designation.
    if (screen.DailyActivityLog.Designation == null) {
        screen.Provider = screen.DailyActivityLog.ServiceProvider1.FullName;
    } else {
        screen.Provider = screen.DailyActivityLog.ServiceProvider1.FirstName + " " + screen.DailyActivityLog.ServiceProvider1.LastName + ", " + screen.DailyActivityLog.Designation;
    }
};