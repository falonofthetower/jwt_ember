import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: service('currentUser'),
  session: service('session'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  },

  model () {
    return this.get('store').findAll('assignment', {
      include: 'assignee,assigner,todo',
      filter: {
          assigner_id: this.get('currentUser').user.id
      }
    })
  },
  setupController: function(controller, model) {
    controller.set("requests", model);
  }
});
