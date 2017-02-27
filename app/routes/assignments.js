import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('my-assignment', {
      include: 'assignee,assigner,todo',
      filter: {
        finished: false
      }
    });
  },
});
