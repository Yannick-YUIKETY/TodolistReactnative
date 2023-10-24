import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore  from '@react-native-firebase/firestore';


const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');

    const goToSignIn = () => {  
      navigation.navigate('signin')
    }

    const goToSignUp = () => {  
      navigation.navigate('signup') ; 
    }

    const inscription =  async () => {  

      try {
        if (email != '' && password != ''){

          console.log('pas vide') ;

          const userAuth = await auth().createUserWithEmailAndPassword(email.trim() , password) ;
          console.log('userAuth' , userAuth) ;

          const uid = userAuth.user.uid ;


          //enregistrement de l'utilisateur en base de donnée a l'aide de son uid (user:id)
          await firestore().collection("user").doc(uid).set({email : email.trim()}) ;

        }



        console.log("inscription ",email , password) ;

      } catch (error) {

        console.log('error' , error) ;

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
    <Button  onPress={goToSignIn} >Connexion</Button>
    <Button  onPress={inscription} >Inscription</Button>
  </View>

  )
}

export default SignUpScreen