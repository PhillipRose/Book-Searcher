const router = require('express').Router();
const { User, Review } = require('../models/index');
const withAuth = require('../utils/auth');


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



router.get('/reviews/', async (req, res)=>{
  console.log(req.params.user_id + ' is the user_id')
  
  try{
    const userReviews = await Review.findAll({ where: {
      user_id: req.session.user_id,
    }, 
    
  })

  console.log(userReviews);
    const users = userReviews.get({ plain: true });
    res.render('manageReview', {Reviews: users.Reviews, id: req.session.user_id, logged_in: req.session.logged_in });
  }catch (err){res.status(404).json(err.message)}
})

router.get('/myreviews/:user_id', withAuth, async (req, res) => {
  try {
  
    const userData = await User.findByPk(req.params.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Review} ],
    });

    const user = userData.get({ plain: true });
    console.log(req.params +' is the params');

    res.render('test', {
      Review: user.Reviews,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


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

// module.exports = router;
