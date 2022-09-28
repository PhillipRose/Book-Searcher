const router = require('express').Router();
const { Review, User }  = require('../../models');
// finds all reviews
router.get('/', (req, res) => {
    Review.findAll({
        exclude: [User]
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})

// finds a specific review
router.get('/:id', (req, res) => {
    Review.findByPk(req.params.id, {
        exclude: [User]
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
// allows the user to create a review
router.post('/', (req, res) => {
   Review.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})

// THESE ARE OPTIONAL 

// allows the user to update their specific review
router.put('/:review_id', (req, res) => {
    Review.update(req.body,{where: {review_id:req.params.review_id}} )
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
// allows a user to delete their specific review
router.delete('/:review_id', (req, res) => {
    Review.destroy({where:{review_id: req.params.review_id}})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
module.exports = router;