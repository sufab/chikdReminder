import React from 'react';
import { Text, View, Bottom } from 'react-native';

class Segment extends React.Component{

    render() {

        const { textStyle, viewStyle, buttonStyle, buttonViewStyle, borderStyle } = styles;

        return (
            <View style={viewStyle}>
                <View style={borderStyle}>
                    <View style={buttonViewStyle}>
                    <Text style={buttonStyle}
                        onPress={() => console.log('contact')}>
                        אנשי קשר
                    </Text>
                </View>
                
                <View style={buttonViewStyle}>
                    <Text style={buttonStyle}
                        onPress={() => console.log('time')}>
                        שעת הגן
                    </Text>
                </View>
                
                <View style={buttonViewStyle}>
                    <Text style={buttonStyle}
                        onPress={() => console.log('user')}>
                        פרטי משתמש
                    </Text>
                </View>
                </View>
            </View>
        )
    }
} 

const styles = {
    viewStyle: {
        height: 45,
        alignItems: 'stretch',
        marginTop: 5,
        marginLeft: 10,
        marginRight:10,
        backgroundColor: '#d5dcd5',
        width: 200,
    },
    borderStyle: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:'#d5dcd5',
        borderRadius: 5
    },
    buttonViewStyle: {
        justifyContent: 'center',
        backgroundColor: '#d5dcd5',
        alignItems: 'center',
        width: 118,
        height: 45,
        
    },
    buttonStyle: {
        height: 35,
        backgroundColor: '#e9eae9',
        width: 108,
        textAlign: 'center',
        padding: 6,
        color: '#787978',
        fontSize: 15,
        borderWidth: 1,
        borderColor:'#e9eae9',
        borderRadius: 5
    },
    textStyle: {
        fontSize: 20,
        
    },
    textUnPressStyle: {
        fontSize: 20,
        color: '#d0d4d0'
    }
}
export default Segment;