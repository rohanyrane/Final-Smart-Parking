import * as React from 'react';
import { Button, View, Text } from 'react-native';

export function InputOTPScreen({ navigation }) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>OTP Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }