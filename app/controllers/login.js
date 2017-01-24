import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  errorMessage: '',
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).then(() => {}, (authenticator) => {
        this.set('errorMessage', authenticator.errors[0].detail);
        this.set('password', '');
      });
    },
  }
});
