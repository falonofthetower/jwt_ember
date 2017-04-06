import Ember from 'ember';
import DS from 'ember-data';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('currentUser'),
  myAssignments: Ember.computed('assignee', 'assignments.@each.assignee.[]', function() {
    let assignmentsArray = this.get('assignments').toArray();
    let user = this.get('currentUser').user

    let filterPromise = Ember.RSVP.filter(assignmentsArray, assignment => {
      return assignment.get('assignee').then( assignee => {
        return assignee.id === user.id
      })
    })
    return DS.PromiseArray.create({
      promise: filterPromise
    });
  }),

  requestedAssignments: Ember.computed('myAssignments.@each.status', function() {
    let assignments = this.get('myAssignments');
    return assignments.filterBy('status', "requested");
  }),
  pendingAssignments: Ember.computed('myAssignments.@each.status', function() {
    let assignments = this.get('myAssignments');
    return assignments.filterBy('status', "pending");
  }),
  closedAssignments: Ember.computed('myAssignments.@each.status', function() {
    let assignments = this.get('myAssignments');
    return assignments.filterBy('status', "accepted");
  }),
});
