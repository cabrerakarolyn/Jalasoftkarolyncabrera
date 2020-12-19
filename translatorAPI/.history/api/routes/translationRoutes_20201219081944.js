"use strict";
module.exports = function (app) {
  var translation = require("../controllers/translationController");

  app
    .route("/translation")
    .get(translation.list_all_translations)
    .post(translation.create_a_translation);

  app
    .route("/translation/:translationId")
    .get(translation.read_a_translation)
    .put(translation.update_a_translation)
    .delete(translation.delete_a_translation);
};
