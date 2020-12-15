const db = require('../model');

module.exports = {
    create: function(req, res) {
        db.Book.create(req.body).then(book => res.json(book))
        .catch(err => {
            console.error(err)
        })
    }, 
    findAll: function(req, res) {
        db.Book.find(req.query).sort({ date: -1 }).then(book => res.json(book))
        .catch(err => console.error(err))
    },
    update: function(req, res) {
        db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(book => res.json(book)).catch(err=> console.error(err))
    },
    findById: function(req, res) {
        db.Book.findById(req.params.id).then(book=> res.json(book))
        .catch(err=> console.error(err))
    },
    remove: function(req, res) {
        db.Book.findById({ _id: req.params.id }).then(book => book.remove())
        .then(book => res.json(book)).catch(err => console.error(err))
    }
};