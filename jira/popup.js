window.onload = ()=>{
    populateView();
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            const user = {
                firstName:request.firstName,
                lastName:request.lastName,
                phoneNr:request.phoneNr,
                emailAddress:request.email
            }
            chrome.storage.local.set(user)
            populateView();
        })
}

function populateView(){
    chrome.storage.local.get(["phoneNr","email","firstName","lastName"],result =>{
        $("#firstName").text("FirstName:"+result.firstName);
        $("#lastName").text("LastName:"+result.lastName);
        $("#email").text("Email:"+result.email);
        $("#phoneNr").text("PhoneNr:"+result.phoneNr);
    });

}