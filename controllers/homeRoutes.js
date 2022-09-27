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

router.get('/reviews/:user_id', async (req, res)=>{
  
  try{
    const userReviews = await User.findByPk(req.params.user_id, {
      include: [
        {
          model: Review,
          attributes: ['book_title', 'book_author', 'review_content'],

        },
      ],
    },
    )
    const users = userReviews.get({ plain: true });
    console.log(users);
    res.render('manageReview', users.Reviews[0] );
  }catch (err){res.status(404).json(err.message)}
})

module.exports = router;
