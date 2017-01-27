import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  errorMessage: '',
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt',
        headers = {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        };

      this.get('session').authenticate(authenticator, credentials, headers).then(() => {}, (authenticator) => {
        this.set('errorMessage', authenticator.errors[0].detail);
        this.set('password', '');
      });
    },
  }
});
