//import a library to create component

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import SettingPage from './src/component/settingPage';

//create a component 

export default class App extends React.Component {

  render(){
    return (
      <View>
        <SettingPage />
      </View>
    );
  }
}
