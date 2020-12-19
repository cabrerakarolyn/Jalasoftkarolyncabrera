'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/translationController');

  app.route('/translation')
    .get(todoList.list_all_translations)
    .post(todoList.create_a_translation);


  app.route('/translation/:translationId')
    .get(todoList.read_a_translation)
    .put(todoList.update_a_translation)
    .delete(todoList.delete_a_translation);
};