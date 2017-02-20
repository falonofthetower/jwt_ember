import DS from 'ember-data';

export default DS.Model.extend({
  assigner: DS.belongsTo('user'),
  assignee: DS.belongsTo('user'),
  todo: DS.belongsTo('todo')
});
