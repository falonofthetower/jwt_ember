import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    assignTask(user, todo) {
      console.log(todo);
      let assignment = this.store.createRecord('assignment', {
        assignee: user,
        assigner: user,
        todo: todo
      });
      assignment.save().then(()=>{
        this.transitionToRoute('todos');
      });
    }
  }
});
