import DS from 'ember-data';

export default DS.Model.extend({
  assigner: DS.belongsTo('user', { async: true }),
  assignee: DS.belongsTo('user', { async: true }),
  todo: DS.belongsTo('todo', { async: true }),
  finished: DS.attr('boolean')
});
