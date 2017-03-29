import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('login');
  this.route('signup');
  this.route('index');
  this.route('todos', function() {
    this.route('todo', { path: ':todo_id'}, function() {
      this.route('show');
      this.route('assign');
      this.route('edit');
    });
    this.route('new');
  });
  this.route('assignments');
  this.route('requests');
});

export default Router;
