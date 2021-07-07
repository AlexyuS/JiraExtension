document.getElementById('chrome-extension-container').addEventListener('click', function(event) {
    const jiraSection = event.target.getAttribute('id');
    moveToJiraSection(jiraSection);
});

function moveToJiraSection(sectionId) {
    console.log(sectionId);
}
