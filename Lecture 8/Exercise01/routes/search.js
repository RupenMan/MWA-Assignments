const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    req.db.collection('locationInfo').createIndex({coord: '2d'});
    req.db.collection('locationInfo')
        .find({coord:{$near:[-91.9669535,41.0224169], $maxDistance:2000}})
        .limit(10)
        .toArray((err, result)=>{
            console.log(result);
            res.render('search',{location:result});
        });
});
module.exports = router;