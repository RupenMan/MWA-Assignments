/**
 * Written on April 9, 2018
 * Decrypts the message which was encrypted using AES256 encryption and key "asaadsaad"
 * @author Rupendra MAHARJAN
 */
const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const algorithm ="aes256";
const key = "asaadsaad";

router.get('/',(req, res, next) =>{
    mongoClient.connect('mongodb://localhost:27017', (err, client)=>{
        if(err) throw err;
        const db = client.db('lecture07');
        db.collection('homework7').findOne({}, (err, msg) =>{
            if(err) throw err;
            var message = decrypt(msg.message);
            res.send(message);
        });
        client.close();
    });
});

/**
 * 
 * @param {*} msg - Encrypted Data 
 * Function to decrypt the encrypted data
 */
function decrypt(msg){
    var decipher = crypto.createDecipher(algorithm, key);
    var dec =decipher.update(msg,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
}

module.exports = router;