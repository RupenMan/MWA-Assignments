const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('updateLocation');
});

router.post('/', (req, res, next) => {
    var newLocation = {
        name: req.body.name,
        category: req.body.category,
        "coord": [parseFloat(req.body.longitude),parseFloat(req.body.latitude)]
    };
    req.db.collection('locationInfo').insert(newLocation, (err) => {
        if (err) throw err;
        res.send("Location Inserted");
    });
});

router.get('/delete', (req, res, next)=>{
    res.render('delete');
});

router.post('/deleteLocation', (req, res, next)=>{
    var location = req.body.deleteLocation;
    req.db.collection('locationInfo').remove({name:location},(err)=>{
        if(err) throw err;
        res.send("Location Erased");
    });
});

module.exports = router;