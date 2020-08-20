import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
	name: "main",
	action() {
		this.render("main");
	},
});
