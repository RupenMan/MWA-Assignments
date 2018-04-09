const express = require('express');
const router = express.Router({
    caseSensitive: true,
    strict: true
});
const url = require('url');
const fs = require('fs');

router.post('/', (req, res, next) => {
    fs.appendFile('./subscribers.txt', req.body.email + "\n", (err) => {
        if (err) throw err;
    });
    res.render('thankyou',{mailAddress: req.body.email});
});

module.exports = router;