ContactManagement.Router.map(function() {
	this.resource('contacts', {path: 'contacts'}, function() {
		this.route('add', { path: 'add' });
	});
	this.resource('contact', function() {
		this.route('edit', { path: ':contact_id/edit' });
		this.route('view', { path: ':contact_id' })
	});
});

ContactManagement.IndexRoute = Em.Route.extend({
	redirect: function() {
		this.transitionTo('contacts.index');
	}
});