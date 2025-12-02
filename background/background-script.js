/**
 * Log errors to console
 */
function onError(error) {
    console.error(`Error: ${error}`);
}

/**
 *  Listen for commands from shortcut
 */
console.log("in background-script.js");
browser.commands.onCommand.addListener((command) => {
    console.log(command);
    if (command === "highlight") {
        console.log("highlight");
        //send message to handle-text.js to get selected text
        browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
            console.log("sending message");
            browser.tabs.sendMessage(tabs[0].id, {action: "getText"}).catch(onError);
        });
    }
});