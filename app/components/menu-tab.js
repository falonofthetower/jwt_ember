import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  role: 'presentation',
  attributeBindings: ['role']
});
