import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';



const SignIn = ({navigation}) => {

  
  const goTo = () => { 

    navigation.navigate('signup') ;
  }


  const [email, setEmail] = useState('') ; 

  const [password, setPassword] = useState('') ;

  const send = async () => { 

    console.log('envoyer' , email , password) ;

    //permet a l'utilisateur de se connecter avec un email et un mdp ou non grace au catch error
    try {
      await auth().signInWithEmailAndPassword(email , password)

    } catch (error) {
      console.log('error' , error) ; 
    }

    
  }


  return (
    <View>
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

      
      <Button onPress={send}> Connexion </Button>
      <Button onPress={goTo}> Inscription </Button>
    </View>
  )
}

export default SignIn