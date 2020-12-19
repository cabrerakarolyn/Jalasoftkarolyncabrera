"use strict";
module.exports = function (app) {
  const translation = require("../controllers/translationController");

  app
    .route("/translation")
    .get(translation.list_all_translations)
    .post(translation.translate_and_create_translation);

  app
    .route("/translation/:translationId")
    .get(translation.read_or_create_a_translation)
    .delete(translation.delete_a_translation);
};
