import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import AppBar from './components/AppBar';
import HomePage from './containers/HomePage';
import MedicineScreen from './containers/MedicineScreen';

import { height, width } from './utils/getDimensions';
import { UITheme } from './utils/MuiTheme';
import { ActionButton, Card, ThemeProvider } from 'react-native-material-ui';
import {
  StackNavigator,
} from 'react-navigation';


const Navigation = StackNavigator({
  Home: { 
    screen: HomePage,
    navigationOptions: {
      title: 'My Medicines',
      titleStyle: { color: 'white' },
      headerStyle: { backgroundColor: UITheme.palette.secondaryColor },
      headerTitleStyle: { color: 'white' },
    },
  },
  MedicineScreen: {
    screen: MedicineScreen,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <Navigation />
      </View>
    )
  }
}

