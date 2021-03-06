import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,
  isCrossed: false,

  mouseEnter() {
    const crossed = this.get('isCrossed');
    if (crossed === false) {
      this.set('isChecked', true);
    }
  },
  mouseLeave() {
    const crossed = this.get('isCrossed');
    if (crossed === false) {
      this.set('isChecked', false);
    }
  },
  actions: {
    markComplete(task) {
      task.set('finished', true);
      task.save().then(()=> {
        this.set('isChecked', true);
        this.set('isCrossed', true);
      });
    }
  }
});
