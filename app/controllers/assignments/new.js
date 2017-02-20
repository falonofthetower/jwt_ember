import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save(){
      let model = this.store.createRecord('assignment', this.get("newModel"));
      this.set("newModel", {});
      model.save().then(()=>{
        this.transitionToRoute('assignments.assignment.show', model);
      });
    },
  }
});
