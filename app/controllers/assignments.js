import Ember from 'ember';


export default Ember.Controller.extend({
  cableService: Ember.inject.service('cable'),

  setupSubscription: Ember.on('init', function() {
    var consumer = this.get('cableService').createConsumer('ws://localhost:3000/websocket');
    var subscription = consumer.subscriptions.create("AssignmentsChannel", {
      received: (data) => {
        this.get('store').findRecord('my-assignment', data.id).then(function(assignment) {
          console.log(data.id);
          console.log(data.status);
          console.log(assignment);
          assignment.set('status', data.status);
        });
      }
    });
  }),
  actions: {
    markComplete(task) {
      task.set('finished', true);
      task.save().then(()=> {
        alert('Task Complete');
      });
    }
  }
});
