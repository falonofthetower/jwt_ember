import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('users', this.store.findAll('user'));
  }
});
