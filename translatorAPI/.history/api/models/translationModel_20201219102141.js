"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TranslationSchema = new Schema(
  {
    original: {
      type: String,
      required: "El texto que se desea traducir es requerido",
    },
    translation: {
      type: String,
      required: "El texto traducido es requerido",
    },
  },
  { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
);

module.exports = mongoose.model("Translations", TranslationSchema);
