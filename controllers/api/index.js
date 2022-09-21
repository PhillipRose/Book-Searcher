const router = require('express').Router();
// const userRoutes = require('./user-routes')
const googleBookRoutes = require('./google-books')
// router.use('/user', userRoutes)
router.use('/googlebook', googleBookRoutes)

module.exports = router