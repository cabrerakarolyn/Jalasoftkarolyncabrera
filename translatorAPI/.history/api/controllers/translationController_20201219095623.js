"use strict";

const mongoose = require("mongoose");
const Translation = mongoose.model("Translations");
const translator = require("../../src/transaltor");

exports.list_all_translations = (_, res) => {
  Translation.find({}, (err, translation) => {
    if (err) res.send(err);
    res.json(translation);
  });
};

exports.create_a_translation = (req, res) => {
  const new_translation = new Translation(req.body);
  new_translation.save((err, translation) => {
    if (err) res.send(err);
    res.json(translation);
  });
};

exports.translate_and_create_translation = (req, res) => {
  translator.translateAndCallback(req.body.original, this.create_a_translation, req, res)
}

exports.read_a_translation = (req, res) => {
  // Translation.findById(req.params.translationId, (err, translation) => {
  //   if (err) res.send(err);
  //   res.json(translation);
  // });
  Translation.findOne({original: req.body.original}, (err, translation) => {
    if (err) res.send(err);
    res.json(translation);
  })
};

exports.update_a_translation = (req, res) => {
  Translation.findOneAndUpdate(
    { _id: req.params.translationId },
    req.body,
    { new: true },
    (err, translation) => {
      if (err) res.send(err);
      res.json(translation);
    }
  );
};

exports.delete_a_translation = (req, res) => {
  Translation.remove(
    {
      _id: req.params.translationId,
    },
    (err, _) => {
      if (err) res.send(err);
      res.json({ message: "Translation successfully deleted" });
    }
  );
};
