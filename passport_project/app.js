// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecret'}));
app.use(passport.initialize());
app.use(passport.session());