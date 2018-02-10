import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import AppBar from './components/AppBar';
import HomePage from './containers/HomePage';
import MedicineScreen from './containers/MedicineScreen';
import DoctorPage from './containers/DoctorPage';
import PageController from './containers/PageController';

import { height, width } from './utils/getDimensions';
import { UITheme } from './utils/MuiTheme';
import { ActionButton, Card, ThemeProvider } from 'react-native-material-ui';
import {
  StackNavigator,
} from 'react-navigation';


const Navigation = StackNavigator({
  Home: { 
    screen: PageController,
   
  },
  DoctorPage: {
    screen: DoctorPage,
     navigationOptions: {
      title: 'Your Patients',
      titleStyle: { color: 'white' },
      headerStyle: { backgroundColor: UITheme.palette.secondaryColor },
      headerTitleStyle: { color: 'white' },
    },
  },
  HomePage: {
    screen: HomePage,
     navigationOptions: {
      title: 'My Medicines',
      titleStyle: { color: 'white' },
      headerStyle: { backgroundColor: UITheme.palette.secondaryColor },
      headerTitleStyle: { color: 'white' },
    },
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <Navigation />
      </View>
    )
  }
}

