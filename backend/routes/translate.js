const express = require('express');
const translateController = require('../controllers/translateController.js');

const router = express.Router();

router.get("/translate", translateController.translate);

module.exports = router;