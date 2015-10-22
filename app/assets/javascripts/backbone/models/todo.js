var App = App || {};

(function() {
  "use strict";

  App.Models.Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

})();
