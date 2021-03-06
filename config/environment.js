/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:jwt',
    routeAfterAuthentication: '/todos'
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:3000/auth_user',
    serverTokenRefreshEndpoint: 'http://localhost:3000/auth_user',
    identificationField: 'email',
    refreshAccessTokens: true,
    refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
  };

  if (environment === 'development') {
    ENV.APP.host = "http://localhost:3000";
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = "https://task-master-api-staging.herokuapp.com";
    ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: 'https://task-master-api-staging.herokuapp.com/auth_user',
      serverTokenRefreshEndpoint: 'https://task-master-api-staging.herokuapp.com/auth_user',
      identificationField: 'email',
      refreshAccessTokens: true,
      refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
    };
  }

  return ENV;
};
