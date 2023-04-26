import React,{useState} from 'react';
import { Button, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export function AuthenticationScreen({ navigation }) {
  const [phoneNumber,setPhoneNumber]=useState()

  const onChangePhone = (number) =>{
    setPhoneNumber(number);
  }

  const onPressContinue=()=>{

  }
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}>
          <Text style={styles.textTitle}>Please enter your phone number</Text>
          <View style={styles.containerInput}>
            <View style={styles.openDialogView}>
              <Text style={{color:'#000'}}>+91</Text>
            </View>
            <TextInput 
            style={styles.phoneInput}
            placeholder="123456789"
            keyboardType='phone-pad'
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            />
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity onPress={onPressContinue}>
              <View style={[styles.btnContainer,{
                backgroundColor:phoneNumber?'244DB7':'gray'
              }]}>
                <Text style={styles.textContinue}>
                  Continue
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    containerAvoidingView:{
      flex:1,
      alignItems:'center',
      padding:10
    },
    textTitle:{
      color:'#000',
      marginBottom:25,
      marginTop:25,
      fontSize:15
    },
    containerInput:{
      flexDirection:'row',
      paddingHorizontal:12,
      borderRadius:10,
      backgroundColor:'white',
      alignItems:'center',
      borderBottomWidth:1.5
    },
    openDialogView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    phoneInput:{
      marginLeft:5,
      flex:1,
      height:50,
      color:'#000'
    },
    viewBottom:{
      flex:1,
      justifyContent:'flex-end',
      marginBottom:50,
      alignItems:'center'
    },
    btnContainer:{
      width:150,
      height:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    textContinue:{
      color:'#ffffff', 
      alignItems:'center'
    }
  })