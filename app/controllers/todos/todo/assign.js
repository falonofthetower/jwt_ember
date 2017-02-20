import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    assignTask(user, todo) {
      let model = this.store.createRecord('assignment', {
        assignee: user,
        assigner: user,
        todo: todo
      });
      model.save().then(()=>{
        this.transitionToRoute('todos.todo.show', todo);
      });
    }
  }
});
