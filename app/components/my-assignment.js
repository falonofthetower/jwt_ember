import Ember from 'ember';

export default Ember.Component.extend({
  // cableService: Ember.inject.service('cable'),

  // setupSubscription: Ember.on('init', function() {
  //   var consumer = this.get('cableService').createConsumer('ws://localhost:3000/websocket');
  //   var subscription = consumer.subscriptions.create("MessagesChannel", {
  //     received: (data) => {
  //       this.get('assignments').pushObject({data});
  //     }
  //   });
  // }),

  isChecked: false,
  isCrossed: false,

  mouseEnter() {
    const crossed = this.get('isCrossed');
    if (crossed === false) {
      this.set('isChecked', true);
    }
  },
  mouseLeave() {
    const crossed = this.get('isCrossed');
    if (crossed === false) {
      this.set('isChecked', false);
    }
  },
  actions: {
    markComplete(task, status) {
      task.set('status', status);
      task.save().then(()=> {
        this.set('isChecked', true);
        this.set('isCrossed', true);
      });
    }
  }
});
