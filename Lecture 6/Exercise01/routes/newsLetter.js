const express= require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf();

router.use(csrfProtection);

router.get('/', (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    res.render('newsLetter');
});

module.exports = router;