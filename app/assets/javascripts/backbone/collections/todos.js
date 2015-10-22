var App = App || {};

(function() {
  "use strict";

  App.Collections.Todos = Backbone.Collection.extend({
    model: App.Models.Todo,
    url: '/todos'
  });

})();
