import Ember from 'ember';

export default Ember.Component.extend({
  assignedRequests: Ember.computed('requests.@each.status', function() {
    let requests = this.get('requests');
    return requests.filterBy('status', "requested");
  }),
  pendingRequests: Ember.computed('requests.@each.status', function() {
    let requests = this.get('requests');
    return requests.filterBy('status', "pending");
  }),
  closedRequests: Ember.computed('requests.@each.status', function() {
    let requests = this.get('requests');
    return requests.filterBy('status', "accepted");
  }),
});
