function clipboardcopy() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.contentEditable = true;
    copyText.readOnly = true;
    copyText.setSelectionRange(0, 999999);

     /* Copy the text inside the text field */
    // navigator.clipboard.writeText(copyText.value);
    document.execCommand("copy")
  
    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  }

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
