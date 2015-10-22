var App = App || {};

(function() {
  "use strict";

  App.Views.Todos.IndexView = Backbone.View.extend({
    template: JST["backbone/templates/todos/index"],

    render: function() {
      this.$el.html(this.template({ todos: this.collection }));
      return this;
    }
  });

})();

// class TodoApp.Views.Todos.IndexView extends Backbone.View
//   template: JST["backbone/templates/todos/index"]

//   initialize: () ->
//     @collection.bind('reset', @addAll)

//   addAll: () =>
//     @collection.each(@addOne)

//   addOne: (todo) =>
//     view = new TodoApp.Views.Todos.TodoView({model : todo})
//     @$("tbody").append(view.render().el)

//   render: =>
//     @$el.html(@template(todos: @collection.toJSON() ))
//     @addAll()

//     return this
