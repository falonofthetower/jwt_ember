import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  currentUser: service('current-user'),
  actions: {
    assignTask(user, todo) {
      console.log(user.id);
      let assignment = this.store.createRecord('assignment', {
        assignee: user,
        todo: todo,
        status: 'requested'
      });
      assignment.save().then(()=>{
        this.transitionToRoute('todos');
      });
    }
  }
});
