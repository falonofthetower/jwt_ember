import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    save(user) {
      let newUser = user;
      newUser.save().catch((error) => {
        this.set('errorMessage', error);
      })
      .then(()=>{
        var credentials = newUser.getProperties('email', 'password'),
        authenticator = 'authenticator:jwt',
        headers = {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        };

        this.get('session').authenticate(authenticator, {identification: newUser.get('email'), password: newUser.get('password')}, headers).then(() => {}, (authenticator) => {
          this.set('errorMessage', authenticator.errors[0].detail);
          this.set('password', '');
        })
      });
    }
  }
});
