import "bootstrap/dist/js/bootstrap.bundle";

Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL",
});

Template.main.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe("allUsers");
	});
});

Template.main.events({
	"click #sendNotification": function (event) {
		event.preventDefault();
	},
});
