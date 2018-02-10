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
    headerText: '',
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
      headerText: isPill ? 'Enter the ID of the pill' : 'Add a new prescription',
    	index
    	
    });
  }

  closeModal() {
 
  	var newState = this.state.medicines;

    newState.push({
      patient: this.state.patient_text,
      doctor: "Dr, Seuss",
      medicine: this.state.prescription_text,
      instructions: this.state.instructions_text,
      numFails: 0,
      bottleId: this.state.medicines.length,
      events: [],
      pills: this.generatePills(this.state.numPills_text),


    });

 	
    this.setState({
    	modalVisible:false,
    	text: '',
    	medicines: newState,
    });

}
  
  generatePills(numPills) {
    var arr = [];
    for(var i = 0; i < numPills; i++) {
      arr.push(i);
    }
    return arr;
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
         <ScrollView>
      	<Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              style={modalStyle}
              onRequestClose={() => this.closeModal(this.state.index)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
              <Text style={{fontSize: 18, fontWeight: '600', alignSelf: 'center', paddingBottom: 20}}>Add a new prescription</Text>
      
              
              <TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 125, borderRadius: 5, alignSelf: 'center', marginBottom: 15 }}
        			placeholder="Patient Name" 
        			onChangeText={(patient_text) => this.setState({patient_text})}
        			keyboardType={this.state.characterType}
        			maxLength={40} />
               <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 125, borderRadius: 5, alignSelf: 'center', marginBottom: 15 }}
              placeholder="Presciption name"
              onChangeText={(prescription_text) => this.setState({prescription_text})}
              keyboardType={this.state.characterType}
              maxLength={40}/>
              <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 125, borderRadius: 5, alignSelf: 'center', marginBottom: 15 }}
              placeholder="Instructions" 
              onChangeText={(instructions_text) => this.setState({instructions_text})}
              keyboardType={this.state.characterType}
              maxLength={300} />
               <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 125, borderRadius: 5, alignSelf: 'center', marginBottom: 15 }}
              placeholder="Number of pills" 
              onChangeText={(numPills_text) => this.setState({numPills_text})}
              keyboardType="numeric"
              maxLength={3}/>
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
      		

        	
        	</ScrollView>
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