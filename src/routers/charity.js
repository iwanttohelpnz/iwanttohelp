const express = require('express')
const router = new express.Router()

//Mocked data
const charities = require('../data/charities')
const charity = require('../data/charity')


router.get('/charity', async(req, res) => {
    res.status(200).send(charities)
})

router.get('/charity/:id', async(req, res) => {
    if(req.params.id === '2') {
        res.status(200).send(charity)
    }

    res.status(404).send()
})

module.exports = router