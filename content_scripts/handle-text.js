/**
 * Wait for message from background-script.js and send back selected text
 */
browser.runtime.onMessage.addListener((message) => {
    if (message.action == "getText") {
        const text = window.getSelection().toString();
        console.log(text);
        return Promise.resolve({ response: text });
    }
})