import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  points: DS.attr('number'),
  assigner: DS.belongsTo('user', { async: true })
});
