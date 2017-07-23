import React from 'react';
import { Text, View } from 'react-native';

class Header extends React.Component {

    render() {

        const { textStyle, viewStyle } = styles;

        return(
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#0a70d6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;