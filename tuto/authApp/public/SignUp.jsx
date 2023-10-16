import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

const SignUp = ({navigation}) => {

  const goTo = () => { 

    navigation.navigate('signin') ;
  }

  const [name, setName] = useState('') ;

  const [email, setEmail] = useState('') ;

  const [password, setPassword] = useState('') ;

  const [confirmPassword, setConfirmPassword] = useState('') ;

  const send = () => { 


  }

  return (
    <View>
        <TextInput
          label="Name"
          value={name}
          onChangeText={name => setName(name)}
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}

        />

        {/* <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          secureTextEntry={true}

        /> */}
      
      <Button onPress={goTo}> Inscription </Button>
    </View>
  )
}

export default SignUp