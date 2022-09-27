const router = require('express').Router();
const userRoutes = require('./userRoutes')
const reviewRoutes = require('./reviewRoutes')
// const googleBookRoutes = require('./google-books')
router.use('/user', userRoutes)
router.use('/reviews', reviewRoutes)
// router.use('/googlebook', googleBookRoutes)

module.exports = router
