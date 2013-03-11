ContactManagement.ContactViewRoute = Em.Route.extend({
	model: function(params) {
		return ContactManagement.Contact.find(params.contact_id);
	},
	renderTemplate: function() {
		this.render('contact/view', {
			into: 'application', 
			outlet: 'content'
		});

		this.render('contact/sidebar', {
			into: 'application', 
			outlet: 'sidebar'
		});
	}
});