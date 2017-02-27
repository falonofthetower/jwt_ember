import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    markComplete(task) {
      task.set('finished', true);
      task.save().then(()=> {
        alert('Task Complete');
      });
    }
  }
});
