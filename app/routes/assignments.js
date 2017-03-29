import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model (params) {
    return Ember.RSVP.hash({
      requests: this.store.query('my-assignment', {
        include: 'assignee,assigner,todo',
        filter: {
          status: "requested"
        }
      }),
      pendings: this.store.query('my-assignment', {
        include: 'assignee,todo,assigner',
        filter: {
          status: "pending"
        }
      }),
      closings: this.store.query('my-assignment', {
        include: 'assignee,todo,assigner',
        filter: {
          status: "accepted"
        }
      }),
    });
  },

  setupController(controller, models) {
    controller.set('requests', models.requests);
    controller.set('pendings', models.pendings);
    controller.set('closings', models.closings);
  }
});
