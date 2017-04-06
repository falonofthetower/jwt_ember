import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject: { service }, Component } = Ember;

export default Component.extend(ApplicationRouteMixin, {
  session: service('session'),
  currentUser: service('current-user'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
