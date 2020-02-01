import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Container/Login/login'
import { ImageBackground ,  TouchableHighlight,Alert, Image,} from 'react-native';
class App extends Component{
  
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  render(){
  return (
    <View style={styles.container}>
      <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('../testProject/assets/Images/bg.png')}>

      <Login />
      <TouchableHighlight style={styles.buttonContainerNew} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.textSty}>New Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainerNew2} onPress={() => this.onClickListener('register')}>
           <View style={styles.loginFB}>
            <Text style={styles.textSty}>Login with Facebook</Text>
            <Image style={styles.fbIcon} source={require('./assets/Images/fb.png')}/>
            </View>
        </TouchableHighlight>
       
      </ImageBackground>
    </View>
  );
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
buttonContainerNew: {
  height:50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',  
  width:'100%',
  borderColor:'red',
  backgroundColor:'#808080cf',
  opacity:0.5,
  borderColor:'grey',
  borderTopWidth:1,
  borderBottomWidth:1
},
buttonContainerNew2: {
  height:50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',  
  width:'100%',
  backgroundColor:'#808080cf',
  opacity:0.5,
  borderBottomWidth:1,
  borderColor:'grey',
  
},
loginFB:{
  flexDirection: 'row',
  justifyContent: 'center', 
alignItems: 'center' 

},
textSty:{
  color:'white',
  fontSize:16,
  fontFamily:'sans-serif',
  fontStyle:'italic',


},

fbIcon:{
  justifyContent: 'center',
  marginLeft:20
}
});
