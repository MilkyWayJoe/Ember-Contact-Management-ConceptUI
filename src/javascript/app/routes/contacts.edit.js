ContactManagement.ContactEditRoute = Em.Route.extend({
	model: function(params) {
		return ContactManagement.Contact.find(params.contact_id);
	},
	renderTemplate: function() {
		this.render('contact/edit', {
			into: 'application', 
			outlet: 'content'
		});

		this.render('contacts/edit/sidebar', {
			into: 'application', 
			outlet: 'sidebar'
		});
	},
	events: {
		removeContact: function(record) {
			console.log(record);
			record.deleteRecord();
			//record.store.commit();
			this.transitionTo('index');
		},
		save: function(record) {
			//record.get('transaction').commit();
			this.transitionTo('index');
		}, 
		cancel: function(record) {
			record.get('transaction').rollback();
			this.transitionTo('index')
		}
	}
});