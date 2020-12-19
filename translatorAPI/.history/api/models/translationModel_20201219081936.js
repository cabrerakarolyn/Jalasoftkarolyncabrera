"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TranslationSchema = new Schema({
  original: {
    type: String,
    required: "El texto que se desea traducir es requerido",
  },
  translation: {
    type: String,
    required: "El texto traducido es requerido",
  },
});

module.exports = mongoose.model("Translations", TranslationSchema);
