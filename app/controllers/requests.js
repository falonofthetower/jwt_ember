import Ember from 'ember';
import config from 'frontend/config/environment';

export default Ember.Controller.extend({
  cableService: Ember.inject.service('cable'),

  setupSubscription: Ember.on('init', function() {
    var consumer = this.get('cableService').createConsumer(config.APP.websocket_host);
    var subscription = consumer.subscriptions.create("AssignmentsChannel", {
      received: (data) => {
        this.get('store').findRecord('assignment', data.id, { reload: true }).then(function(assignment) {
          assignment.set('status', data.status);
          assignment.get('assigner');
        });
      }
    });
  })
});
