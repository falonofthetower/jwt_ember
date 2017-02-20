import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  isShowingAssignModal: false,
  newAssignment: {},
  actions: {
    save() {
      this.attrs.save();
    },
    destroyTodo() {
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('todos');
      });
    },
    toggleAssignModal: function() {
      this.toggleProperty('isShowingAssignModal');
    },
    assign() {
      let model = this.store.createRecord('assignment', this.get("newModel"));
      this.set("newModel", {});
      this.set('model.todo', model);
      model.save().then(()=>{
      });
    }
  },
});
