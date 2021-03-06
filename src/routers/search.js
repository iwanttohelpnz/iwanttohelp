const express = require('express');
const router = new express.Router();

//Mocked data
const charities = require('../data/charities');
const charity = require('../data/charity');

router.get('/charities', async (req, res) => {
    res.status(200)
        .send(charities);
});

router.get('/charities/:id', async (req, res) => {
    const id = req.params.id;
    console.log('search ' + id);
    if (id === '2') {
        res.status(200).send(charity);
    }

    res.status(404).send();
});

module.exports = router;