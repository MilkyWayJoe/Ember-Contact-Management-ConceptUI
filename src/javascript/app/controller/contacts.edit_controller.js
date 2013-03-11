ContactManagement.ContactEditController = Em.ObjectController.extend({
	deleteContact: function() {
		this.get('target').send('removeContact', this.get('content'));
	},
	saveContact: function() {
		this.get('target').send('save', this.get('content'));
	},
	cancelEdit: function() {
		this.get('target').send('cancel', this.get('content'));
	}
});