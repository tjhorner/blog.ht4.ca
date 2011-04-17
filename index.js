// Require Typhoon
var typhoon = require('typhoon');

// Add custom helpers
//typhoon.helpers.hello = function() { return 'world'; };

// Start server
typhoon.app(__dirname, require('./configs'));