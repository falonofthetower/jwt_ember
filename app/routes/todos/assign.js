import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      todo: this.store.findRecord('todo', params.todo_id),
      users: this.store.findAll('user')
    });
  },
  setupController(controller, models) {
    controller.set("users", models.users);
    controller.set("todo", models.todo);
  }
});
