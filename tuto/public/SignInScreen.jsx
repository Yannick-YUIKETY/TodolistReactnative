import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';



const SignInScreen = () => {

    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');

  return (
    <View>
    <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <Button title="Sign in" onPress={() => console.log('ok')} />
  </View>
  )
}

export default SignInScreen