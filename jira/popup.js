window.onload = () => {
    populateView();
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const { firstName, lastName, phoneNr, emailAddress } = request;
        const user = {
            firstName,
            lastName,
            phoneNr,
            emailAddress
        }
        chrome.storage.local.set(user)
        populateView();
    });
    // chrome.devtools.network.onNavigated.addListener(function(requestUrl) {
    //     console.log('Navigating to... ', requestUrl);
    // });
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //     const url = tabs[0].url;
    //     console.log(url);
    // });
}
console.log(window.location.href);

function populateView(){
    chrome.storage.local.get([ 'phoneNr', 'emailAddress', 'firstName', 'lastName' ], result => {
        const { firstName, lastName, phoneNr, emailAddress } = result;

        $('#firstName').text('FirstName: ' + firstName);
        $('#lastName').text('LastName: ' + lastName);
        $('#email').text('EmailAddress: ' + emailAddress);
        $('#phoneNr').text('PhoneNr: ' + phoneNr);
    });
}
