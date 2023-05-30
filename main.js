var editor = ace.edit("editor");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/python");
editor.setFontSize("16px");

var languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function() {
    var selectedLanguage = languageSelect.value;
    editor.session.setMode("ace/mode/" + selectedLanguage);
});

var themeSelect = document.getElementById("theme-select");
themeSelect.addEventListener("change", function() {
    var selectedTheme = themeSelect.value;
    editor.setTheme("ace/theme/" + selectedTheme);
});

var copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", function() {
    copyToClipboard();
});

function copyToClipboard() {
    var code = editor.getValue();
    navigator.clipboard.writeText(code)
        .then(function() {
            alert("Code copied to clipboard!");
        })
        .catch(function(error) {
            alert("Unable to copy code: " + error);
        });
}