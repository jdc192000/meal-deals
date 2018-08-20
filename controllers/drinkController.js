const db = require("../models");

// Defining methods for the drinkController
module.exports = {
    findAll: function (req, res) {
        db.DrinkSpecials
            .findAll()
            .then(dbModel =>
                res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.DrinkSpecials
            .findById(req.params.id)
            .then(dbModel =>
                res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.DrinkSpecials
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.DrinkSpecials
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.DrinkSpecials
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
