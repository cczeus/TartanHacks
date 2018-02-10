import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, Platform, ScrollView } from 'react-native';

// import { Toolbar } from 'react-native-material-ui';
// import { UITheme } from '../../utils/MuiTheme';
import { height, width } from '../../utils/getDimensions';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { UITheme } from '../../utils/MuiTheme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

export default class Medicine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poster_name: props.name,
      profile_URL: props.img_URL,
      posted_time: props.time,
      header: props.header,
      liked: props.liked,
      status: props.status,
      message: props.message,
    };
  }
  render() {
  const C_UNSELECTED = '#BDBDBD';
  const C_SELECTED = '#64B5F6';
    return (
      <View style={style}>

          <View style={{ padding: 5, flexDirection: 'column' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Medicine Name</Text>
          </View>

          <View style={{ flex: 1, alignSelf: 'flex-end', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <Text style={{ fontSize: 32, fontWeight: 'bold', color: UITheme.palette.secondaryColor }}>26</Text>
            </View>

            <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center'}}>
              <Text style={{ fontSize: 16, color: 'gray'}}>left</Text>
            </View>
          </View>
        

      </View>
       
    );
  }
}



const styles = {
  headerStyle: {
    flex: 0.6,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  contentStyle: {
    // backgroundColor: 'red',
    marginTop: 15,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  lineStyle: {
    // backgroundColor: 'blue',
    borderTopWidth: 1,
    borderColor:'#E0E0E0',
    marginBottom: 0
  },
  lineStyleMargin: {
    // margin: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  metaDataStyle: {
    marginLeft: 20,
    flexDirection: 'row'
  },
  actionsStyle: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  actionStyle: {

    flexDirection: 'column',
    alignItems: 'center',
  }
}
const style = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '95%',
  backgroundColor: 'white',
  height: 125,
  borderRadius: 5,
  padding: 0,
  marginTop: 15,

  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 0.07
 
}