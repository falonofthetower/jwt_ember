import Ember from 'ember';

export default Ember.Component.extend({
  requestedAssignments: Ember.computed('assignments.@each.status', function() {
    let assignments = this.get('assignments');
    return assignments.filterBy('status', "requested");
  }),
  pendingAssignments: Ember.computed('assignments.@each.status', function() {
    let assignments = this.get('assignments');
    return assignments.filterBy('status', "pending");
  }),
  closedAssignments: Ember.computed('assignments.@each.status', function() {
    let assignments = this.get('assignments');
    return assignments.filterBy('status', "accepted");
  }),
});
