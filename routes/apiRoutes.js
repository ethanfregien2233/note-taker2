const fs = require('fs');
const router = require('express').Router();
let db = require('../db/db.json');

router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    res.json(db);
});

router.delete('/notes/:id', (req, res) => {
    let noteSave = [];
    for(let i = 0; i < db.length; i++) {
        if (db[i].id != req.params.id) {
            noteSave.push(db[i]);
        }
    }
    db = noteSave;
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
        if (err) {
            throw err;
        }
    });
    res.json(db);
});

router.post('/notes', (req, res) => {
    let bigNote = {
        text: req.body.title,
        title: req.body.title,
        id: Math.floor(Math.random())
    }
    db.push(bigNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
});



module.exports = router; 