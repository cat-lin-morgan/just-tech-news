const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => { //this is so if the api endpoint doesn't exist they get an error code
    res.status(404).end();
});

module.exports = router;