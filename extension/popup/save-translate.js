import { API_KEY } from "./env.js";

const target_lang = 'FR';

/**
 * Log errors to console
 */
function onError(error) {
    console.error(`Error: ${error}`);
}

var requestObject = {
    method: "POST",
    headers: {
        "Authorization": 'DeepL-Auth-Key ' + API_KEY,
        "Content-Type": 'application/json'
    }
}

/**
 * Calls DeepL API to translate and return the given word
 */
function translate(word) {

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
