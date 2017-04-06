import Ember from 'ember';
import DS from 'ember-data';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  currentUser: service('currentUser'),
  session: service('session'),

  assignedRequests: Ember.computed('requests.@each.status', function() {
    let user = this.get('currentUser').user;
    const promise = Ember.RSVP.filter(this.get('requests').toArray(), request => {
      let status = request.get('status');
      return request.get('assigner').then((assigner) => {
        return assigner === user && status === "requested"
      });
    });
    return DS.PromiseArray.create({
      promise: promise
    });
  }),
  pendingRequests: Ember.computed('requests.@each.status', function() {
    let user = this.get('currentUser').user;
    const promise = Ember.RSVP.filter(this.get('requests').toArray(), request => {
      let status = request.get('status');
      return request.get('assigner').then((assigner) => {
        return assigner === user && status === "pending"
      });
    });
    return DS.PromiseArray.create({
      promise: promise
    });
  }),
  closedRequests: Ember.computed('requests.@each.status', function() {
    let user = this.get('currentUser').user;
    const promise = Ember.RSVP.filter(this.get('requests').toArray(), request => {
      let status = request.get('status');
      return request.get('assigner').then((assigner) => {
        return assigner === user && status === "accepted"
      });
    });
    return DS.PromiseArray.create({
      promise: promise
    });
  }),
});
