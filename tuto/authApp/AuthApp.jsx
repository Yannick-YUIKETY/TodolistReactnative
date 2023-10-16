import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoutePublic from './public/RoutePublic'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import RouteSecure from './secure/RouteSecure';

const authApp = () => {

    const [initializing, setInitializing] = useState(true) ;

    const [user, setUser] = useState() ;

    const onAuthStateChange = (user) => { 

        setUser(user) ;
        if (initializing){

            setInitializing(false) ;

        }
    }

    //abonnement au changement d'etat de la connexion
    useEffect(() => {
      
        const subscriber = auth().onAuthStateChanged(onAuthStateChange) ;

        return subscriber ;

    }, [])

    if (initializing)return null  
    

  return (
    <>
    {(!user)?
    <NavigationContainer>
        
        <RoutePublic/>
        
    </NavigationContainer> : <RouteSecure/> }

    </>
  )
}

export default authApp