
const axios = require('axios')
module.exports = {
    getBook(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
    }
}