console.log("in handle-text");

/**
 * Wait for message from background-script.js and send back selected text
 */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == "getText") {
        const text = window.getSelection().toString();
        console.log(text);
    }
})

/**
 * - put selected text in a popup
 * - translate word, allow additional notes
 * - save word and translation for later use
 * - webpage to view words and translations
 * - ability to download csv for quizlet import
 */