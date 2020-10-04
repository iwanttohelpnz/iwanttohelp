const express = require('express')
const router = new express.Router()

router.get('', async(req, res) => {
    res.status(200).render('charities')
})

module.exports = router