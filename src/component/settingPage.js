import React from 'react';
import { View, Text, SegmentControlIos } from 'react-native';
import PropTypes from 'prop-types';
import Header from './header';
import Segment from './segment';
import ContactList from './contactList';

class SettingPage extends React.Component {

    state = { selectIndex: 0 }
    
    render() {
        return (
            <View>
                <Header headerText={'הגדרות'} />
                <Segment />
                <ContactList />
            </View>
        );
    }
}


export default SettingPage;