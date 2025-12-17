const deepl = require('deepl-node');
const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const deeplClient = new deepl.DeepLClient(DEEPL_API_KEY);

/**
 * Use the DeepL API to translate the given text
 */
function translate(req, res) {
    console.log(req.query.test);
    console.log("In translateController");

    return res.json({ message: "in translateController" });
}

module.exports = {
    translate
}