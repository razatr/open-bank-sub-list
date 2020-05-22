const router = require('express').Router();
const mocks = require('./mock');

router.get('/subscriptions', function (req, res, next) {
    const subscriptions = mocks.subscriptions;
    res.json(subscriptions)
});

module.exports = router;
