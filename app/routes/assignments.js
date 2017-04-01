import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  // cableService: Ember.inject.service('cable'),

  // setupSubscription: Ember.on('init', function() {
  //   var consumer = this.get('cableService').createConsumer('ws://localhost:3000/websocket');
  //   var subscription = consumer.subscriptions.create("MessagesChannel", {
  //     received: (data) => {
  //       this.get('assignments').pushObject({data});
  //     }
  //   });
  // }),

  model (params) {
    return this.get('store').findAll('my-assignment', {
        include: 'assignee,assigner,todo'
    })
    // return Ember.RSVP.hash({
    //   requests: this.store.query('my-assignment', {
    //     include: 'assignee,assigner,todo',
    //     filter: {
    //       status: "requested"
    //     }
    //   }),
    //   pendings: this.store.query('my-assignment', {
    //     include: 'assignee,todo,assigner',
    //     filter: {
    //       status: "pending"
    //     }
    //   }),
    //   closings: this.store.query('my-assignment', {
    //     include: 'assignee,todo,assigner',
    //     filter: {
    //       status: "accepted"
    //     }
    //   }),
    // });
  },//,

  // setupController(controller, models) {
  //   controller.set('model', models);
  //   // controller.set('pendings', models.pendings);
  //   // controller.set('closings', models.closings);
  // }
});
