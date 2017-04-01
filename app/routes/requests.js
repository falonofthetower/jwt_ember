import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model (params) {
    return this.get('store').findAll('my-request', {
        include: 'assignee,assigner,todo'
    })
  }
    // return Ember.RSVP.hash({
    //   requested: this.store.query('my-request', {
    //     include: 'assignee,assigner,todo',
    //     filter: {
    //       status: "requested"
    //     }
    //   }),
    //   pending: this.store.query('my-request', {
    //     include: 'assignee,assigner,todo',
    //     filter: {
    //       status: "pending"
    //     }
    //   }),
    //   closed: this.store.query('my-request', {
    //     include: 'assignee,assigner,todo',
    //     filter: {
    //       status: "accepted",
    //     }
    //   })
    // });
  // },

  // setupController(controller, models) {
    // controller.set('requested', models.requested);
    // controller.set('pending', models.pending);
    // controller.set('closed', models.closed);
  // }
});
