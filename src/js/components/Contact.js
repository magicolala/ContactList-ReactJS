var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Contact = React.createClass({
	render: function(){
		return(
			<tr className="contact-Item">
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>
                    <a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a>
                    <a href="#" className="btn btn-danger btn-remove" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a>
                </td>
            </tr>
		);
	},

    handleRemove: function(i, j) {
        AppActions.removeContact(i);
    },

    handleEdit: function(i, j) {
        AppActions.editContact(i);
    }
});

module.exports = Contact;
