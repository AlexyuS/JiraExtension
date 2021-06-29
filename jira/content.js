window.onload = () => {
    console.log('Script activated only for ' + document.URL);
    setInterval(function() {
        if (window.location.href.indexOf('contact-info') > -1) {
            sendUserInformation();
        }
    }, 1000);
}

function sendUserInformation() {
    const phoneNr = getTextContent('.ci-phone > ul > li > .t-normal') || '';
    const emailAddress = getTextContent('.ci-email > div > a')[0] || '';
    const name = getTextContent('#pv-contact-info');
    let firstName;
    let lastName;

    if (name) {
        firstName = name[0];
        lastName = name[1];
    }

    chrome.runtime.sendMessage({ firstName, lastName, phoneNr, emailAddress });
}

function getTextContent(querySelector) {
    const selector = document.querySelector(querySelector);

    if (selector) {
        return selector.textContent.replaceAll('\n', '').trim().split(' ');
    }
}
