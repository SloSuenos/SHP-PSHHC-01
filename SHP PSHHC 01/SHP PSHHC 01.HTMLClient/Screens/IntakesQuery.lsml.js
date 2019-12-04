/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.IntakesQuery.created = function (screen) {
    screen.ID = 0; //Set to value that doesn't exist so that query on open returns no records and opens faster
    screen.QCount = 0;
    screen.QDisCount = 0;
    screen.QNotDisCount = 0;
};
myapp.IntakesQuery.RunQuery_execute = function (screen) {
    screen.ID = null; //Set to null value so query not prevented from running
};


myapp.IntakesQuery.QCount_postRender = function (element, contentItem) {
    contentItem.value = 0;
    function updateTotal() {
        var vActive = getDischarge(contentItem.screen.QIntakeFormScreen)
        var vRCount = contentItem.screen.QIntakeFormScreen.count;
        contentItem.screen.QCount = vRCount;
        contentItem.screen.QNotDisCount = vActive;
        contentItem.screen.QDisCount = vRCount - vActive;
    }
    contentItem.dataBind("screen.QIntakeFormScreen.count", updateTotal)
};

function getDischarge(contentItem) {
    var recs = contentItem.data;
    var qTotal = 0;
    recs.forEach(function (record) {
        if (record.Active) {
            qTotal++;
        }
    })
    return qTotal;
}
