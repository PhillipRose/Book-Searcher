const router = require('express').Router();
const { Review, User }  = require('../../models');

router.get('/', (req, res) => {
    Review.findAll({
        include: [User]
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
router.get('/:id', (req, res) => {
    Review.findByPk(req.params.id, {
        include: [User]
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
router.post('/', (req, res) => {
    Review.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
router.put('/:id', (req, res) => {
    Review.update({where:{id:req.params.id}}, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
router.delete('/:id', (req, res) => {
    Review.destroy({where:{id:req.params.id}})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
})
module.exports = router;