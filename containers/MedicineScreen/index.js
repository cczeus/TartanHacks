import React from 'react';
import AppBar from '../../components/AppBar';
import { StyleSheet, Text, View, ScrollView, Platform, TextInput } from 'react-native';
import Medicine from '../../components/Medicine';
import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';
import { ActionButton, Card, ThemeProvider } from 'react-native-material-ui';

export default class MedicineScreen extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={UITheme}>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}

      />
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
     

}})