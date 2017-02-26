import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  session:     service('session'),
  currentUser: service('current-user')
});
