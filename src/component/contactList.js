import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Contact from './contact';

class ContactList extends React.Component {

    renderContacts () {
        //return this.state.childReminder.map(contact =>
        //<Contact key={'something from the phone} />
        //);
        <Contact />
    }

    render() {

        return (
            <ScrollView>
                {this.renderContacts()}
            </ScrollView>
        );
    }
}

export default ContactList;