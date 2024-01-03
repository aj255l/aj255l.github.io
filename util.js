function generateEmail() {
    return 'lmao';
}

function copyToClipboard() {
    navigator.clipboard.writeText(generateEmail());
    var tooltip = document.getElementById("emailTooltip");
    tooltip.innerHTML = "Copied email to clipboard!";
}

function displayTooltip() {
    var tooltip = document.getElementById("emailTooltip");
    tooltip.innerHTML = "Copy email to clipboard";
}