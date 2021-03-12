const express = require('express');
const router = new express.Router();

router.get('', async(req, res) => {
    res.status(404).render('not-found');
});

module.exports = router;