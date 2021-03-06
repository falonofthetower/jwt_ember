import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      todo: this.store.findRecord('todo', params.todo_id)
    });
  },

  setupController(controller, models) {
    controller.set('users', models.users);
    controller.set('todo', models.todo);
  }
});
