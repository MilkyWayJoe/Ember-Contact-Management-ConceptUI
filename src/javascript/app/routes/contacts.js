
ContactManagement.ContactsRoute = Em.Route.extend({
	model: function() {
		return ContactManagement.Contact.find();
	},
	setupController: function(controller, model) {
		var models = this.get('currentModel');
		controller.set('content', models);
	},
	renderTemplate: function() {

		var controller = this.controllerFor('contacts');
		var models = this.get('currentModel');
		controller.set('content', models);

		this.render('contacts/index', {
			into: 'application', 
			outlet: 'content',
			controller: controller
		});

		this.render('contacts/sidebar', {
			into: 'application', 
			outlet: 'sidebar'
		});
	},
	events: {
		deleteContact: function(record) {
			record.deleteRecord();
			this.get('store').commit();
		}
	}
});