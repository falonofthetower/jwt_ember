import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  currentUser: service('current-user'),
  actions: {
    assignTask(user, todo) {
      let assignment = this.store.createRecord('assignment', {
        assignee: user,
        todo: todo
      });
      assignment.save().then(()=>{
        this.transitionToRoute('todos');
      });
    }
  }
});
