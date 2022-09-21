const router = require('express').Router();
const api = require('../../utils/api')
router.get('/:book', (req, res)=> {
    api.getBook(req.params.book)
    .then(data => res.json(data.data)) 
    .catch(err => res.status(500).json(err.message))
}) 

module.exports = router