import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import bikestyles from './bikestyles'
import { Button } from 'react-native-paper'

const Bike = () => {
  return (
    <View style={bikestyles.container}>
      <ImageBackground 
                    style={bikestyles.image}
                    source={{uri:'https://www.irishnews.com/picturesarchive/irishnews/irishnews/2020/08/16/214101340-a591578d-fa3c-4d7a-8986-fddd8e32cc9f.jpg'}}
                    resizeMode='cover'
                    >
        
        <View style={bikestyles.titleContainer}>
            <Text style={bikestyles.title}>
                The Original Wheelie On This Fast Motorbike
            </Text>

            
        </View>

        <View style={bikestyles.subtitleContainer}>
            <Text style={bikestyles.subtitle}>
                Take a closer look at the features behind of of its kind motorbike
            </Text>

            
        </View>

        <View>
                <Button style={bikestyles.button} labelStyle={{color:"#050603", fontWeight:"700"}}  >
                    GET STARTED
                </Button>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Bike