var lastActiveElement=determineCurrentState();
document.getElementById("newInterview").addEventListener('click',function (elem){
   changeActiveElement("newInterview");
})
document.getElementById("hrInterview").addEventListener('click',function (elem){
    changeActiveElement("hrInterview");
})
document.getElementById("requestedForTechnical").addEventListener('click',function (elem){
    changeActiveElement("requestedForTechnical");
})
document.getElementById("technicalInterview").addEventListener('click',function (elem){
    changeActiveElement("technicalInterview");
})
document.getElementById("technicalInterviewDone").addEventListener('click',function (elem){
    changeActiveElement("technicalInterviewDone");
})
document.getElementById("requestedForFinal").addEventListener('click',function (elem){
    changeActiveElement("requestedForFinal");
})
document.getElementById("finalInterview").addEventListener('click',function (elem){
    changeActiveElement("finalInterview");
})
document.getElementById("finalInterviewDone").addEventListener('click',function (elem){
    changeActiveElement("finalInterviewDone");
})
document.getElementById("decision").addEventListener('click',function (elem){
    changeActiveElement("decision");
})

// document.getElementById("login").addEventListener('click',function (elem){
//     document.getElementById("chrome-extension-login").classList.add("hidden");
//     document.getElementById("chrome-extension-add-user").classList.remove("hidden");
// })
//
// document.getElementById("addUser").addEventListener('click',function (elem){
//     notifyNewUserInsertion();
//     document.getElementById("chrome-extension-add-user").classList.add("hidden");
//     document.getElementById("chrome-extension-container").classList.remove("hidden");
// })



function changeActiveElement(elemId){
    lastActiveElement.classList.remove("activeState");
    lastActiveElement = document.getElementById(elemId);
    lastActiveElement.classList.add("activeState");
    changeExtensionIcon(elemId);
}

function determineCurrentState(){
    return document.getElementById("newInterview");
}

function changeExtensionIcon(elem){
    chrome.action.setIcon({
        path:determineIconPath(elem)
    });
}

function determineIconPath(elemId){
    switch (elemId){
        case 'newInterview':
            return "../icons/icon-new-interview_30x30.svg"
        case 'hrInterview':
            return "../icons/icon-hr-interview_30x30.svg"
        case 'requestedForTechnical':
            return "../icons/icon-requested-for-technical_30x30.svg"
        case 'technicalInterview':
            return "../icons/icon-technical-interview_30x30.svg"
        case 'technicalInterviewDone':
            return "../icons/icon-done_30x30.svg"
        case 'requestedForFinal':
            return "../icons/icon-requested-for-technical_30x30.svg"
        case 'finalInterview':
            return "../icons/icon-final-interview_30x30.svg"
        case 'finalInterviewDone':
            return "../icons/icon-final-interview-done_30x30.svg"
        case 'decision':
            return "../icons/icon-decision_30x30.svg"
        default:
            return "Icon path not found"
    }
}
