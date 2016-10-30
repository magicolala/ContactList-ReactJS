var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
	saveContact: function(contact) {
		this.firebaseRef = new Firebase(yourFireBaseUrl);
		this.firebaseRef.push({
			contact: contact
		});
	},

	getContacts: function() {
		this.firebaseRef = new Firebase(yourFireBaseUrl);
		this.firebaseRef.once("value", function(snapshot) {
			var contacts = [];
			snapshot.forEach(function(childSnapshot){
				var contact = {
					id: childSnapshot.key(),
					name: childSnapshot.val().contact.name,
					phone: childSnapshot.val().contact.phone,
					email: childSnapshot.val().contact.email,
				}
				contacts.push(contact);
				AppActions.receiveContacts(contacts);
			});
		});
	},

	removeContact: function(contactId) {
		this.firebaseRef = new Firebase(yourFireBaseUrl+contactId);
		this.firebaseRef.remove();
	},

	updateContact: function(contact) {
		var id = contact.id;
		var updatedContact = {
			name: contact.name,
			phone: contact.phone,
			email: contact.email
		}

		this.firebaseRef = new Firebase(yourFireBaseUrl+contact.id+'/contact');
		this.firebaseRef.update(updatedContact);
	}
}
