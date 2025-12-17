const deepl = require('deepl-node');
const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const deeplClient = new deepl.DeepLClient(DEEPL_API_KEY);

/**
 * Use the DeepL API to translate the given text
 */
function translate(req, res) {
    console.log(req.query.currWord);
    console.log(req.query.target);
    console.log("In translateController");

    deeplClient.translateText(req.query.currWord, null, req.query.target)
    .then((result) => {
        console.log(result.text);
        return res.json({ message: result.text});
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Translation Error" });
    });
}

module.exports = {
    translate
}