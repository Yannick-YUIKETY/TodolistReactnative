import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../tuto/public/SignInScreen';
import SignUpScreen from '../tuto/public/SignUpScreen';
import Test from '../tuto/test/Test';
import ProfileScreen from '../tuto/private/ProfileScreen';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator() ;

const RouteDavisScreen = () => {

    // const [isSignedIn, setIsSignedIn] = useState(false) ;
    const [initializing, setInitializing] = useState(true) ; 
    const [user , setUser]  = useState() ;

    //change l'état de l'utilisateur
    const onUserStateChanged = (user) => { 
        setUser(user) ;
        if(initializing) setInitializing (false) ;
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onUserStateChanged);
        return subscriber; // se desabonne a la fermeture 
      }, []);


  return (
    
    <NavigationContainer>
        <Stack.Navigator>
                { ! user ? (
        <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
        ) : (
        <>
            
            <Stack.Screen name="Home" component={Test} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
        )

        }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouteDavisScreen