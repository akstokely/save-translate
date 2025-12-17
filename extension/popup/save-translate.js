const target_lang = 'FR';
const url = new URL("http://localhost:3000/translate");

/**
 * Log errors to console
 */
function onError(error) {
    console.error(`Error: ${error}`);
}

/**
 * Send request to backend to perform translation
 */
function translate(word) {
    url.search = new URLSearchParams({ test : "test"});
    console.log(url);

    fetch(url)
    .then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    })
    .then((json) => console.log("JSON", json))
    .catch(onError);
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
        translate(word)
        browser.storage.local.remove("currWord");
    }
})
.catch(onError);
