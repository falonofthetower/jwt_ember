import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
    });
  },

  setupController(controller, models) {
    controller.set('users', models.users);
  }
});
