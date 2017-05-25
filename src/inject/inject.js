var previousSelectedText;

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

document.addEventListener('mouseup', function() {
    var selectedText = getSelectionText().trim();
    if (selectedText != "" && selectedText != previousSelectedText) {
        responsiveVoice.speak(selectedText, 'US English Female');
    } else if (selectedText != previousSelectedText) {
        responsiveVoice.cancel();
    }
}, true);