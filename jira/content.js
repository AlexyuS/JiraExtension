
console.log("Script activated only for " + document.URL);
sendUserInformation();
function sendUserInformation() {
    if(document.querySelector("#pv-contact-info")===null){
        return;
    }
    var firstName= document.querySelector("#pv-contact-info").textContent.trim().split(" ")[0];
    var lastName= document.querySelector("#pv-contact-info").textContent.trim().split(" ")[1];
    var phoneNr = document.querySelector(".ci-phone > ul >li>span").textContent.trim();
    var email = document.querySelector(".ci-email > div >a").textContent.trim();
    chrome.runtime.sendMessage({firstName: firstName, lastName: lastName, phoneNr: phoneNr, email: email});
}

function downloadLink(){
    var downloadLink;
    chrome.runtime.sendMessage({
        downloadLink:downloadLink
    })
}
