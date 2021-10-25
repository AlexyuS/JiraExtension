
console.log("Script activated only for " + document.URL);
sendUserInformation();
function sendUserInformation() {
    if (document.querySelector("#pv-contact-info") === null) {
        return;
    }
    var firstName = document.querySelector("#pv-contact-info").textContent.trim().split(" ")[0];
    var lastName = document.querySelector("#pv-contact-info").textContent.trim().split(" ")[1];

    var phoneNr = document.querySelector(".ci-phone > ul >li>span");
    if (phoneNr !== null) {
        phoneNr = phoneNr.textContent.trim();
    }
    var email = document.querySelector(".ci-email > div >a");
    if (email !== null) {
        email = email.textContent.trim();
    }
    alert(firstName+" "+lastName+" phoneNr:"+phoneNr+" email:"+email);
    chrome.runtime.sendMessage({ firstName: firstName, lastName: lastName, phoneNr: phoneNr, email: email });
}

function downloadLink() {
    var downloadLink;
    chrome.runtime.sendMessage({
        downloadLink:downloadLink
    });
}


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    //console.log("Message received");
    if (msg.action == 'open_dialog_box') {
        //alert("Message recieved!");
    }
});
