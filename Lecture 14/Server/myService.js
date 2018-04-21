const express = require('express');
const router = express.Router();

router.get('/getData', (req, res, next) => {
    let db = req.db;
    db.collection('students').find().toArray((err,result)=>{
        if(err) throw err;
        res.json(result);
        res.end();
    });
});

router.get('/students/profile/:id', (req, res, next)=>{
    let db= req.db;
    console.log(req.params.id);
    console.log("Here");
    db.collection('students').findOne({"id":req.params.id},(err, result)=>{
        if(err) throw err;
        res.json(result);
        res.end();
    });
});
module.exports = router;