/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ActivitiesQuery.created = function (screen) {
    screen.QSum = 0;
    screen.QAvg = 0;
    screen.pQRun = false; //Prevents query from running when screen opens by sending query a parameter that causes the query to return no data
};
myapp.ActivitiesQuery.RunQuery_execute = function (screen) {
    screen.pQRun = true; //Allows query to run
};
myapp.ActivitiesQuery.QSum_postRender = function (element, contentItem) {
    function updateTotal() {
        var vQsum = TotalTime(contentItem.screen.DailyActivityLogsQuery); //Runs totaltime function to get hour sum
        var vQcount = contentItem.screen.DailyActivityLogsQuery.count;      //returns record count from query
        var vQinputCount = GetUnique(contentItem.screen.DailyActivityLogsQuery);  //Runs GetUnique function to get client count
        if (vQsum == 0 || vQcount == 0) {
            var vQavg = 0;
        }
        else {
            var vQavg = Math.round((vQcount / vQsum) * 100) / 100; //Rounds, formats & gets average
        };

        contentItem.screen.QClientCount = vQinputCount; //Client Count
        contentItem.screen.QCount = vQcount;            //Activity count
        contentItem.screen.QSum = vQsum;                //Hour Sum
        contentItem.screen.QAvg = vQavg;                //Hour Average
    }

    contentItem.dataBind("screen.DailyActivityLogsQuery.count", updateTotal)  //databind causes update total function to run every time record count changes
};
function TotalTime(contentItem) {
    var TotalHoursSpent = 0;
    var TimeDetail = contentItem.data;
    TimeDetail.forEach(function (record) {
        TotalHoursSpent = TotalHoursSpent + record.HoursSpent; //iterates through collection adding hours
    });
    return TotalHoursSpent;
};

function GetUnique(contentItem) {
    var outputArray = []; //temporary array for holding unique intake form Id's
    var iCount = 0;
    var Recs = contentItem.data;
    Recs.forEach(function (record) {  //iterates through collection
        if ($.inArray(record.IntakeForm.ID, outputArray) == -1) { //checks if intakeform.id is in output array
            outputArray.push(record.IntakeForm.ID); //if not in output array, then put it in output array
            iCount = iCount + 1; //Counts how many times record added to output array
        }
    });
    return iCount;
};

myapp.ActivitiesQuery.ScreenContent_render = function (element, contentItem) {
    element.innerHTML = "* Try to limit your search by selecting several filters before clicking the [Search] button. Else, the search will return too much data and be extremely slow or timeout.";
};
