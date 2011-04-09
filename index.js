// Require Typhoon
var typhoon = require('typhoon');

// Add custom helpers
// typhoon.Helpers.hello = function() { return 'world'; };

// Start server
typhoon(__dirname, require('./configs'));
