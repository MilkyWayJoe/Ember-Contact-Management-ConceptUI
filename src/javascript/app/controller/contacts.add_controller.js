ContactManagement.ContactsAddController = Em.ObjectController.extend({

	saveContact: function() {
		this.get('target').send('save', this.get('content'));
	}, 
	cancel: function() {
		this.get('target').send('cancel', this.get('content'));
	}

});