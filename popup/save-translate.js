/**
 * Log errors to console
 */
function onError(error) {
    console.error(`Error: ${error}`);
}

/**
 * Get selected text from storage and display
 */
browser.storage.local.get("currWord")
.then((word) => {
    const text = document.createTextNode(word.currWord);
    document.getElementById("popup-content").appendChild(text);
    console.log(word.currWord);
})
.catch(onError);
