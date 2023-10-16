import { View, Text } from 'react-native'
import React from 'react'
import testStyles from './testStyles'

const ItemCard = ({data}) => {
    return (
      <View  style={{...testStyles.flatlistContainer , backgroundColor:data.color }} >
        <View style={testStyles.box421}>
            <Text style={{fontWeight:"600"}}>{data.note}</Text>
        </View>

        <View style={testStyles.box422}>
            <Text style={{color:"white" ,  fontSize:data.formation.length<19 ? 20 : 17}}>{data.formation}</Text>
        </View>

        <View style={testStyles.boxContainer}>
            <View style={testStyles.box423}>
                
            </View>
            <View style={testStyles.box4231}>
                <Text style={{color:"white" , fontWeight:"300" , fontSize:15}}>{data.poste}</Text>
                <Text style={{color:"white" , fontWeight:"600" , fontSize:15}} >{data.nom}</Text>
            </View>
        </View>
      </View>
    )
  }

export default ItemCard