const router = require('express').Router();
const path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/loginModal.html'));
});

module.exports = router;