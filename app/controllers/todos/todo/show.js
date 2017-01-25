import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    destroyTodo() {
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('todos');
      });
    }
  }
});
