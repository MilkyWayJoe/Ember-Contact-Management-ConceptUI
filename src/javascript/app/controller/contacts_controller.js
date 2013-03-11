ContactManagement.ContactsController = Em.ArrayController.extend({
	count: function() {
		return this.get('filteredContent.length');
	}.property('filteredContent.@each'),
	searchWord: '',
	hasItems: function() {
		return this.get('count') > 0;
	}.property('count'),
	isSearchOn: function() {
		return this.get('searchWord') != '';
	}.property('searchWord'),
	filteredContent: function() {
		var word = this.get('searchWord').toLowerCase();

		if('' == word) {
			return this.get('content');
		} else {
			return this.get('content').filter(function(contact) {
				return contact.get('fullName').toLowerCase().indexOf(word) != -1 ||
				       contact.get('nickname').toLowerCase().indexOf(word) != -1;
			});
		}
	}.property('searchWord','content')
});