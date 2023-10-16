import { View, Text } from 'react-native'
import React from 'react'
import testStyles from './testStyles'


const ItemForYou = ({data}) => {
  return (
    <View style={{...testStyles.box5, backgroundColor:data.color}}>
      
      <View style={{flexDirection:"row" , alignItems:"center" }}>
          <View style={testStyles.box51}>

          </View>

          <View style={testStyles}>

            <Text style={{fontSize:12}}>{data.nom}</Text>

          </View>
      </View>

        <View style={{...testStyles.box52 , backgroundColor:"white"}}>
            <View style={testStyles.note}>
              <Text>{data.note}</Text>
            </View>
            <View style={testStyles.formation}>
              <Text style={{color:"black" , fontWeight:"500"}}>{data.formation}</Text>
            </View>
        </View>
    </View>
  )
}

export default ItemForYou