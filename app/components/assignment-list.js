import Ember from 'ember';
import DS from 'ember-data';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('currentUser'),

  requestedAssignments: Ember.computed('assignments.@each.status', function() {
    let user = this.get('currentUser').user;
    const promise = Ember.RSVP.filter(this.get('assignments').toArray(), assignment => {
      let status = assignment.get('status');
      return assignment.get('assignee').then((assignee) => {
        return assignee === user && status === "requested"
      });
    });
    return DS.PromiseArray.create({
      promise: promise
    });
  }),
  pendingAssignments: Ember.computed('assignments.@each.status', function() {
    let user = this.get('currentUser').user;
    const promise = Ember.RSVP.filter(this.get('assignments').toArray(), assignment => {
      let status = assignment.get('status');
      return assignment.get('assignee').then((assignee) => {
        return assignee === user && status === "pending"
      });
    });
    return DS.PromiseArray.create({
      promise: promise
    });
  }),
  closedAssignments: Ember.computed('assignments.@each.status', function() {
    let user = this.get('currentUser').user;
    const promise = Ember.RSVP.filter(this.get('assignments').toArray(), assignment => {
      let status = assignment.get('status');
      return assignment.get('assignee').then((assignee) => {
        return assignee === user && status === "accepted"
      });
    });
    return DS.PromiseArray.create({
      promise: promise
    });
  }),
});
