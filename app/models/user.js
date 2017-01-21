import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  todo: DS.hasMany('todo')
});
