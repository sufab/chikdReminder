import React from 'react';
import { Text, View } from 'react-native';

class Contact extends React.Component {
    
    render() {
        const { textStyle, viewStyle } = styles;

        return (
            <View>
                <Text>
                    {console.log('success')}
                    Contact
                </Text>
            </View>
        );
    }
} 

const styles = {
    viewStyle: {
    //    // bacgroundColor: '#0a70d6',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: 60,
    //     paddingTop: 15,
    //     position: 'relaive'
    },
    textStyle: {
        // fontSize: 40
    }
}

export default Contact;