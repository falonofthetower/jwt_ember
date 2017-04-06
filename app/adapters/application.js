// app/adapters/application.js
import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'frontend/config/environment';

const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:jwt',
  host: config.APP.host,
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
