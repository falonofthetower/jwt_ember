import Ember from 'ember';

export default Ember.Route.extend({
   // model: function() {
   //   return this.store.findAll('todo');
   // }
   model() {
     return this.store.findAll('todo');
   }
});
