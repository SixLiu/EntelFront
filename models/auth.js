"use strict";

const passport = require("../index.js").passport;
const config = require("../config.json");

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});