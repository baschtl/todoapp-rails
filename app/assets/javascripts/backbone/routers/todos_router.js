var App = App || {};

(function() {
  "use strict";

  App.Routers.TodosRouter = Backbone.Router.extend({
    initialize: function(options) {
      this.todos = options.todos;
    },

    routes: {
      "": "index"
    },

    index: function() {
      var view = new App.Views.Todos.IndexView({ collection: this.todos });
      $('body').html(view.render().$el);
    }
  });

})();


// class TodoApp.Routers.TodosRouter extends Backbone.Router
//   initialize: (options) ->
//     @todos = new TodoApp.Collections.TodosCollection()
//     @todos.reset options.todos

//   routes:
//     "new"      : "newTodo"
//     "index"    : "index"
//     ":id/edit" : "edit"
//     ":id"      : "show"
//     ".*"        : "index"

//   newTodo: ->
//     @view = new TodoApp.Views.Todos.NewView(collection: @todos)
//     $("#todos").html(@view.render().el)

//   index: ->
//     @view = new TodoApp.Views.Todos.IndexView(collection: @todos)
//     $("#todos").html(@view.render().el)

//   show: (id) ->
//     todo = @todos.get(id)

//     @view = new TodoApp.Views.Todos.ShowView(model: todo)
//     $("#todos").html(@view.render().el)

//   edit: (id) ->
//     todo = @todos.get(id)

//     @view = new TodoApp.Views.Todos.EditView(model: todo)
//     $("#todos").html(@view.render().el)
