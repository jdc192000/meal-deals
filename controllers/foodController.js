const db = require("../models");

// Defining methods for the drinkController
module.exports = {
    findAll: function (req, res) {
        db.FoodSpecials
            .findAll()
            .then(dbModel =>
                res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.FoodSpecials
            .findById(req.params.id)
            .then(dbModel =>
                res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.FoodSpecials
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.FoodSpecials
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.FoodSpecials
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
