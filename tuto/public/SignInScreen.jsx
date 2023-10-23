import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore  from '@react-native-firebase/firestore';



const SignInScreen = ({navigation}) => {

    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');

  const goToSignUp = () => {  
    navigation.navigate('signup') ; 
  }

  const goToSignIn = () => {  
    navigation.navigate('signin')
  }

  const connexion = async () => { 
    try {
      await auth().signInWithEmailAndPassword(email , password) ;
    } catch (error) {
      console.log('error' , error)
    }
  }
 
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

    <Button onPress={connexion} > Connexion </Button>
    <Button title="Sign up" onPress={goToSignUp} > Inscription </Button>

  </View>
  )
}

export default SignInScreen