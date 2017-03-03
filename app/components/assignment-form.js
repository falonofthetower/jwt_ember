import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectTodo(value, event) {
      this.set('model.todo', value);
    }
  }
});
