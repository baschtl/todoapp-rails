//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(data) {
    var todos = new App.Collections.Todos(data.todos);
    new App.Routers.TodosRouter({ todos: todos });
    Backbone.history.start();
  }
};
