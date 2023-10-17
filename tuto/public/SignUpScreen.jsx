import { View, Text } from 'react-native'
import React from 'react'

const SignUpScreen = () => {
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
    <Button title="Sign up" onPress={() => console.log('ok')} />
  </View>

  )
}

export default SignUpScreen