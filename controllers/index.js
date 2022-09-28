const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/user', apiRoutes);
router.use('/review', apiRoutes);
module.exports = router;

