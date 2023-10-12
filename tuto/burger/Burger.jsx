import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import burgerstyles from './burgerstyles'
import { Button } from 'react-native-paper'

const Burger = () => {
  return (

    <View style={burgerstyles.container}>
        <ImageBackground 
                    style={burgerstyles.image}
                    source={{uri:'https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg'}}
                    resizeMode='cover'
        >

            <View>
                <Button style={burgerstyles.button} labelStyle={{color:"#f7a400", fontWeight:"700"}}  >
                    GET STARTED
                </Button>
            </View>
        
        </ImageBackground>
    </View>
  )
}

export default Burger