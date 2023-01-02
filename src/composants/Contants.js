import { Component } from "react";
import "./ContactsStyle.css";
import { mycontacts } from "./assets/mycontacts";
class ContactsList extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}

class ContactView extends Component {
  render() {
    var mycontacts = [];
    this.props.mycontacts.forEach((contact) => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      mycontacts.push(<ContactsList id={contact.id} contact={contact} />);
    });
    return (
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">
              <i className="fa fa-fw fa-user"></i>Name
            </th>
            <th>
              <i className="fa fa-fw fa-envelope"></i>Email
            </th>
            <th>
              <i className="fa fa-fw fa-phone"></i>
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="tbody">{mycontacts}</tbody>
      </table>
    );
  }
}
class ShowContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      mycontacts,
    };
    this.handleText = this.handleText.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    var timestamp = new Date().getTime();
    contact["id"] = timestamp;
    this.state.mycontacts.push(contact);
    this.setState({ mycontacts: this.state.mycontacts });
  }

  handleText(filterText) {
    this.setState({
      filterText: filterText,
    });
  }
  render() {
    return (
      <section className="contact">
        <div>
          <AddContact addContact={this.addContact} />
          <ContactView
            mycontacts={this.state.mycontacts}
            filterText={this.state.filterText}
          />
        </div>
      </section>
    );
  }
}

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.handleadd = this.handleadd.bind(this);
  }

  handleadd(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;

    var contact = {
      name: name,
      phone: phone,
      email: email,
    };
    this.props.addContact(contact);
  }
  render() {
    return (
      <form onSubmit={this.handleadd}>
        <div>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <input type="email" name="email" placeholder="Email" />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    );
  }
}
export default ShowContacts;
