const express = require('express');
const { generateInfo } = require('./generateInfo');

const router = express.Router();
router.options("/generateInfo", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.sendStatus(200);
});
router.post('/generateInfo', generateInfo);

module.exports = router;
