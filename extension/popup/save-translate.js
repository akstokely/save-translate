const target_lang = 'FR';
const url = new URL("http://localhost:3000/translate");

/**
 * Log errors to console
 */
function onError(error) {
    console.error(`Error: ${error}`);
}

/**
 * Send request to backend to perform translation.
 * Return a promise that either errors or resolves to backend response.
 */
function translate(word, targetLang) {

    return new Promise((resolve, reject) => {
        url.search = new URLSearchParams({ currWord : word, target : targetLang });
        console.log(url);

        fetch(url)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                reject(Error(`Response status: ${response.status}`));
            }

            resolve(response.json());
        });
    })

    
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

        return translate(word.currWord, target_lang);
    }

    return { message: ""}; //no word has been saved to browser
})
.then((text) => {
    console.log("In second then", text.message);
    const message = document.createTextNode(text.message);
    document.getElementById("bottom").appendChild(message);

    browser.storage.local.remove("currWord");
})
.catch(onError);
