const router = require('express').Router();
const { User, Review } = require('../models/index');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('manageReview', { users });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/reviews/:user', async (req, res)=>{
  try{
    const userReviews = await Review.findAll({order: [['book_title', 'ASC']]})
    const reviewList = userReviews.map((reviewContent) => reviewContent.get({ plain: true }));
    res.render('manageReview', {reviewList})
  }catch (err){res.status(404).json(err.message)}
})

module.exports = router;
