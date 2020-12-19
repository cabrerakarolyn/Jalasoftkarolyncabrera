"use strict";

const mongoose = require("mongoose");
const Translation = mongoose.model("Translations");

exports.list_all_translations = function (req, res) {
  Translation.find({}, function (err, translation) {
    if (err) res.send(err);
    res.json(translation);
  });
};

exports.create_a_translation = function (req, res) {
  const new_translation = new Translation(req.body);
  new_translation.save(function (err, translation) {
    if (err) res.send(err);
    res.json(translation);
  });
};

exports.read_a_translation = function (req, res) {
  Translation.findById(req.params.translationId, function (err, translation) {
    if (err) res.send(err);
    res.json(translation);
  });
};

exports.update_a_translation = function (req, res) {
  Translation.findOneAndUpdate(
    { _id: req.params.translationId },
    req.body,
    { new: true },
    function (err, translation) {
      if (err) res.send(err);
      res.json(translation);
    }
  );
};

exports.delete_a_translation = function (req, res) {
  Translation.remove(
    {
      _id: req.params.translationId,
    },
    function (err, translation) {
      if (err) res.send(err);
      res.json({ message: "Translation successfully deleted" });
    }
  );
};
