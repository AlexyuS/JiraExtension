window.onload = () => {
    console.log("Script activated only for " + document.URL);
    sendUserInformation();
}


function sendUserInformation() {
    var firstName;
    var lastName;
    var name = document.querySelector("#pv-contact-info")
    if(name!==null){
        name=name.textContent.replaceAll("\n", "").trim().split(" ");
        firstName=name[0];
        lastName= name[1];
    }else{
        return;
    }
    var phoneNr= document.querySelector(".ci-phone > ul >li>.t-normal").textContent.replaceAll("\n", "");
    if(phoneNr!==null){
        phoneNr=phoneNr.trim();
    }
    var email=document.querySelector(".ci-email > div > a").textContent.replaceAll("\n", "").trim();
    if(email!==null){
        email=email.trim();
    }
    chrome.runtime.sendMessage({firstName:firstName,lastName:lastName,phoneNr: phoneNr, email: email});
}