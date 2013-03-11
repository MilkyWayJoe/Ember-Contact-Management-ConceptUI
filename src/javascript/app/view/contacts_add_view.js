ContactManagement.ContactsAddView = Em.View.extend({
	didInsertElement: function() {
		this.get('controller.content').set('pictureUrl', 'http://frandi.files.wordpress.com/2011/06/723839-dtthumb-hoodie.jpg');
	}
})