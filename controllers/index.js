const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./api/userRoutes')
const reviewRoutes = require('./api/reviewRoutes')
router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
module.exports = router;

