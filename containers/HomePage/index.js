import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Button,  Alert, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppBar from '../../components/AppBar';
import Medicine from '../../components/Medicine';
import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';
import { ActionButton, Card, ThemeProvider } from 'react-native-material-ui';


export default class HomePage extends React.Component {
  render() {
  	const { navigate } = this.props.navigation;
  	const showAlert = () => {
      Alert.alert(
         'pressed'
      )
   }
    return (
      <ThemeProvider uiTheme={UITheme}>
      <View style={wrapperStyle}>

        <View>
     
          
          <TouchableHighlight
            style={{

            }}
            onPress={()=>navigate('MedicineScreen', {})}>
            <View>
            	<Medicine />
            </View>
            </TouchableHighlight>
            
            <TouchableHighlight
            style={{

            }}
            onPress={()=>navigate('MedicineScreen', {})}>
            <View>
            	<Medicine />
            </View>
            </TouchableHighlight>

                  <TouchableHighlight
            style={{

            }}
            onPress={()=>navigate('MedicineScreen', {})}>
            <View>
            	<Medicine />
            </View>
            </TouchableHighlight>
        
      
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
  marginTop: 50,
  flexDirection: 'column',
  alignItems: 'center'
  
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: UITheme.palette.secondaryColor,
    position: 'absolute',
    top: 100,
    right: 5,
    zIndex: 100,
     

}})