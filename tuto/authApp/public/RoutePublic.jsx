import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator() ;

const RoutePublic = () => {


  return (
    <Stack.Navigator>
      <Stack.Screen  name='signup' component={SignUp}/>
      <Stack.Screen  name='signin' component={SignIn}/>
    </Stack.Navigator>
  )
}

export default RoutePublic