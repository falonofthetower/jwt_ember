import Ember from 'ember';
import config from 'frontend/config/environment';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  cableService: service('cable'),
  store: service('store'),

  setupSubscription: Ember.on('init', function() {
    var consumer = this.get('cableService').createConsumer(config.APP.websocket_host);
    var store = this.get('store');
    consumer.subscriptions.create("AssignmentsChannel", {
      received: (data) => {
        store.pushPayload(data);
      }
    });
  })
});
