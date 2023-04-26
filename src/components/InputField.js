import React from 'react';
import {View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={styles.mainContainer}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput1}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.fieldButton}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    textInput:{
        flex: 1, 
        paddingVertical: 0
    },
    textInput1:{
        flex: 1, 
        paddingVertical: 0
    },
    fieldButton:{
        color: '#AD40AF', 
        fontWeight: '700'
    }
})