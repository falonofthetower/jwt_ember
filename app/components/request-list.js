import Ember from 'ember';
import DS from 'ember-data';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  currentUser: service('currentUser'),
  session: service('session'),

  myRequests: Ember.computed('assigner', 'requests.@each.assigner.[]', function() {
    let requestsArray = this.get('requests').toArray();
    let user = this.get('currentUser').user

    let filterPromise = Ember.RSVP.filter(requestsArray, request => {
      return request.get('assigner').then( assigner => {
        return assigner.id === user.id;
      })
    })
    return DS.PromiseArray.create({
      promise: filterPromise
    });
  }),

  assignedRequests: Ember.computed('myRequests.@each.status', function() {
    let requests = this.get('myRequests');
    return requests.filterBy('status', "requested");
  }),
  pendingRequests: Ember.computed('myRequests.@each.status', function() {
    let requests = this.get('myRequests');
    return requests.filterBy('status', "pending");
  }),
  closedRequests: Ember.computed('myRequests.@each.status', function() {
    let requests = this.get('myRequests');
    return requests.filterBy('status', "accepted");
  }),
});
