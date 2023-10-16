import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

const RouteSecure = () => {
  const signOut = () => { 

    auth()
  .signOut()

  }
  
  return (
    <View>
      <Text>RouteSecure</Text>
      <Button onPress={signOut} >Deconnexion</Button>
    </View>
  )
}

export default RouteSecure