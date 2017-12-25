"use strict";

const config = require("../config.json");

let user = null;

module.exports.index = async(ctx) => {
	if (ctx.isAuthenticated()) {
		user = ctx.session.passport.user;
	}
	const data = {"slides": [{"template": "bar1", "data": {"video": "111"}}, {"template": "bar2", "data": {"video": "111"}}]};

	await ctx.render("index", data);

};
