import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  points: DS.attr('number'),
  // user: DS.belongsTo('user')
});
