const express = require('express');
const router = new express.Router();

router.get('', async(req, res) => {
    res.status(200).render('charities');
});

router.get('/detail', async(req, res) => {
    res.status(200).render('detail', {id: req.query.id});
});

module.exports = router;