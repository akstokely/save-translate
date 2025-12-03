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
    if (word.currWord) {
        const text = document.createTextNode(word.currWord);
        document.getElementById("top").appendChild(text);
        console.log(word.currWord);
        browser.storage.local.remove("currWord");
    }
})
.catch(onError);
