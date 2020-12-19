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

exports.read_a_translation = (req, res) => {
  Translation.findById(req.params.translationId, (err, translation) => {
    if (err) res.send(err);
    res.json(translation);
  });
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

exports.translate_and_create_translation = (req, res) => {
  translator.translateAndCallback(
    req.body.original,
    this.create_a_translation,
    res
  );
};

exports.read_or_create_a_translation = (req, res) => {
  Translation.findOne(
    { original: req.params.translationId },
    (err, translation) => {
      if (err) res.send(err);
      if (translation) {
        console.log("CREATED AT-------", translation.createdAt.getTime(), typeof translation.createdAt.getTime());
        console.log("CURRENT TIMESTAMP", Date.now(), typeof Date.now())
        // console.log("DIFF", parseInt(Date.now().getTime()) - Math.floor(parseInt(translation.createdAt.getTime())/1000))
        res.json(translation);
      } else {
        translator.translateAndCallback(
          req.params.translationId,
          this.create_a_translation,
          res
        );
      }
    }
  );
};
