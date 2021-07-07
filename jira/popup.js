chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const downloadLink = request.downloadLink;
        const user = {
            firstName: request.firstName,
            lastName: request.lastName,
            phoneNr: request.phoneNr,
            emailAddress: request.email
        }
        populateView(user);
        login();
    })


chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['content.js']
    });
});


function populateView(user) {
    console.log(user);
    $("#firstName").text("FirstName:" + user.firstName);
    $("#lastName").text("LastName:" + user.lastName);
    $("#email").text("Email:" + user.emailAddress);
    $("#phoneNr").text("PhoneNr:" + user.phoneNr);
}

function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/rest/api/2/issue/createmeta", true);
    xhttp.setRequestHeader("Authorization","Basic " + btoa(alexandru.hirzoiu + ":" + password));
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(response) {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            console.log(response);
        }
    };
    xhttp.send();
}
