import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,

  mouseEnter() {
    this.toggleProperty('isChecked')
  },
  mouseLeave() {
    this.toggleProperty('isChecked')
  },
  actions: {
    markComplete(task) {
      task.set('finished', true);
      task.save().then(()=> {
        this.toggleProperty('isChecked')
      });
    }
  }
});
