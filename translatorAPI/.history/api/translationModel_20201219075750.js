'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TranslationSchema = new Schema({
  original: {
    type: String,
    required: 'El texto que se desea traducir es requerido'
  },
  translation: {
    type: String
  }
});

module.exports = mongoose.model('Translations', TranslationSchema);
