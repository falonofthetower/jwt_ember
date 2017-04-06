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
    authenticationRoute: 'login',
    // routeAfterAuthentication: '/assignments',
    baseURL: '/login',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:3000/auth_user',
    serverTokenRefreshEndpoint: 'http://localhost:3000/auth_user',
    identificationField: 'email',
    refreshAccessTokens: true,
    refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  };

  if (environment === 'development') {
    ENV.APP.host = "http://localhost:3000";
    ENV.APP.websocket_host = "ws://localhost:3000/websocket";
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
    ENV.APP.websocket_host = "wss://task-master-api-staging.herokuapp.com/websocket";
    ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: 'https://task-master-api-staging.herokuapp.com/auth_user',
      serverTokenRefreshEndpoint: 'https://task-master-api-staging.herokuapp.com/auth_user',
      identificationField: 'email',
      refreshAccessTokens: true,
      refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    };
  }

  return ENV;
};
