import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Button, Alert, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Modal, TextInput } from 'react-native';
import AppBar from '../../components/AppBar';

import Patient from '../../components/patient';
import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';
import { ActionButton, Card, ThemeProvider } from 'react-native-material-ui';
import FoundationIcon from 'react-native-vector-icons/Foundation';


export default class HomePage extends React.Component {
 state = {
    modalVisible: false,
    placeholderText: '',
    maxCharacter: 0,
    characterType: 'default',
    textInput: '',
    medicines: [
    {
        patient: "Chris",
        doctor: "Dr. Seuss",
        medicine: "Ibuprofen",
        instructions: "Take twice every day",
        bottleId: "Ax67Ni",
        pills: [1, 10, 50, 100, 200],
        numFails: 1,
        events: [
            {pill: 1, time: 1518286674970},
            {pill: 50, time: 1518286694970}
        ]
    },
    {
        patient: "Nik",
        doctor: "Dr. Seuss",
        medicine: "Adderall",
        instructions: "Take once every morning",
        bottleId: "ABCDEF",
        pills: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 100, 200],
        numFails: 0,
        events: [
            {pill: 1, time: 1518286674970},
            {pill: 50, time: 1518286694970}
        ]
    },
    {
        patient: "Evan",
        doctor: "Dr. Seuss",
        medicine: "Vicodin",
        instructions: "Take once every morning",
        bottleId: "123456",
        pills: [1, 10, 50, 100, 200],
        numFails: 32,
        events: [
            {pill: 1, time: 1518286674970},
            {pill: 50, time: 1518286694970}
        ]
    },
    {
        patient: "Aaron",
        doctor: "Dr. Seuss",
        medicine: "Oxycontin",
        instructions: "Take once every evening",
        bottleId: "a1B2c3",
        pills: [1, 10, 50, 100, 200],
        numFails: 3,
        events: [
            {pill: 1, time: 1518286674970},
            {pill: 50, time: 1518286694970}
        ]
    },
    {
        patient: "Nik",
        doctor: "Dr. Seuss",
        medicine: "Oxycontin",
        instructions: "Take once every evening",
        bottleId: "abcdeg",
        pills: [1, 10, 50, 100, 200],
        numFails: 47,
        events: [
            {pill: 1, time: 1518286674970},
            {pill: 50, time: 1518286694970}
        ]
    }
    
]
  };

  openModal(isPill, index) {


    this.setState({
    	modalVisible:true, 
    	placeholderText: isPill ? 'Enter Pill ID' : 'Enter Bottle ID',
    	maxCharacter: isPill ? 3 : 6,
    	characterType: isPill ? 'numeric' : 'default',
    	index
    	
    });
  }

  closeModal(index) {
  	if(index >= 0) {
  	var newState = this.state.medicines;
  	var med = this.state.medicines[index];
  	med.takeNext = '24 hours',
  	med.events.push({pill: this.state.text, date: Date.now()})
  	newState[index] = med;
 	
    this.setState({
    	modalVisible:false,
    	text: '',
    	medicines: newState,
    });
} else {
	this.setState({
    	modalVisible:false,
    	text: '',
    });
}
  }
  render() {
  	const { navigate } = this.props.navigation;
  	const showAlert = () => {
      Alert.alert(
         'pressed'
      )
   }
    return (
      <ThemeProvider uiTheme={UITheme}>

      	<View style={{ flexDirection: 'column', flex: 1 }}>
      	<Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              style={modalStyle}
              onRequestClose={() => this.closeModal(this.state.index)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 125, borderRadius: 5, alignSelf: 'center'}}
        			placeholder={this.state.placeholderText} 
        			onChangeText={(text) => this.setState({text})}
        			keyboardType={this.state.characterType}
        			maxLength={this.state.maxCharacter}
        			value={this.state.text}/>
                <Button
                    onPress={() => this.closeModal(this.state.index)}
                    title="Done"
                >
                </Button>
              </View>
            </View>
        </Modal>
        {this.state.medicines.map(m => {
          return (
              <View key={m.bottleId}>
                  <Patient patient={m.patient} medicine={m.medicine} numFails={m.numFails} numLeft={m.pills.length - m.events.length} />
             </View>
        
            )
        })}
      		

        	
        	<TouchableOpacity
            	onPress={ () => this.openModal(false, -1) }
            	style={{position: 'absolute', bottom: 25, right: 25 }}>
            		<View style={actionButtonStyle}>
            			<FoundationIcon name="plus" style={{ alignSelf: 'center', top: 20 }} size={18} color="white" />
            		</View>
            	</TouchableOpacity>
           
        </View>
 
      </ThemeProvider>
    );
  }
}


const scrollViewStyle = {

  width: '100%',

}
const actionButtonStyle = {
	borderRadius: 50,
	backgroundColor: UITheme.palette.secondaryColor,
	width: 60,
	height: 60,
	shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 0.2
}
const modalStyle = {
	marginTop: 100,
}
const innerWrapperStyle={
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
}
const wrapperStyle= {
  flex: 1,
  backgroundColor: '#EEEEEE',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 100
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: UITheme.palette.secondaryColor,
    position: 'absolute',
    bottom: 5,
    right: 5,
    zIndex: 0,
  },
  modalContainer: {
    marginTop: 200
  }
})