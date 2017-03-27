import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').query('my-assignment', {
      include: 'assignee,assigner,todo',
      filter: {
        finished: false
      }
    });
  },
});
