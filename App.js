import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import AppBar from './components/AppBar';
import Medicine from './components/Medicine';
import { height, width } from './utils/getDimensions';
import { UITheme } from './utils/MuiTheme';
import { ActionButton, Card, ThemeProvider } from 'react-native-material-ui';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={UITheme}>
      <View style={wrapperStyle}>
      <AppBar />
        <View>
          <Medicine />
          <Medicine />
          <Medicine />
        </View>
           <ActionButton style={styles}/>
      </View>

      </ThemeProvider>
    );
  }
}

const scrollViewStyle = {

  width: '100%',

}

const wrapperStyle= {
  flex: 1,
  backgroundColor: '#EEEEEE',
  
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: UITheme.palette.secondaryColor,
    position: 'absolute',
    bottom: 5,
    right: 5,
    zIndex: 100,
     

  }

})
