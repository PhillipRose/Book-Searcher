const router = require('express').Router();
const { User, Review } = require('../models/index');
// const Reviews = require('../models/Reviews');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { users, logged_in: req.session.logged_in });
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
    res.render('test', {Reviews: users.Reviews});
  }catch (err){res.status(404).json(err.message)}
})

router.get('/login', async (req, res)=>{
  res.render('login');
})

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.render('homepage');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
