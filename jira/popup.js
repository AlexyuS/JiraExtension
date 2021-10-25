chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const downloadLink = request.downloadLink;
        const user = {
            firstName: request.firstName,
            lastName: request.lastName,
            phoneNr: request.phoneNr,
            emailAddress: request.email
        }

        login();
    })


chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['content.js']
    });
});

function notifyNewUserInsertion(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
    });
}


chrome.downloads.onCreated.addListener(function(data){
 getPdf(data.finalUrl);
})


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

function getPdf(url){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function(response) {
        if (this.readyState == 4 && this.status == 200) {
            console.log(response);
        }
    };
    xhttp.send();
}


