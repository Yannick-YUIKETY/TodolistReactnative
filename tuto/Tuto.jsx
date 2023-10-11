import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tutoStyles from './tutoStyles'
import Icon from 'react-native-vector-icons/FontAwesome';


const Tuto = () => {
  return (
    <View style={tutoStyles.container}>
        <ImageBackground    style={tutoStyles.boxContainer1} 
                            source={{uri:'https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=0.8889431489846579xw:1xh;center,top&resize=1200:*'}}  
                            resizeMode='cover'>
            <View style={tutoStyles.boxContainer2}>
                <View style={tutoStyles.box1}/>
                <View style={tutoStyles.box2}><Icon name="send" size={20} color="#900" /></View>
                <View style={tutoStyles.box3}><Icon name="heart" size={20} color="#900" /></View>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Tuto