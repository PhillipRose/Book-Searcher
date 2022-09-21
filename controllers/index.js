const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

module.exports = router;


// require all routes and export to the rest of the application
