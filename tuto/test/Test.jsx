import { View, Text, FlatList } from 'react-native'
import React from 'react'
import testStyles from './testStyles'
import ItemCard from './ItemCard'
import ItemForYou from './ItemForYou'
import { Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';


const datas = [
  {
      id: 1,
      photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      nom: "D'Oliver VENOM",
      note: "4.9",
      formation: "UX - UI Design",
      poste: "Teacher",
      color: "#00cfcb"
  },
  {
      id: 2,
      photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      nom: "D'Oliver VENOM",
      note: "4.9",
      formation: "Animation in After Effects",
      poste: "Teacher",
      color: "#ff658c"
  },
  {
      id: 3,
      photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      nom: "D'Oliver VENOM",
      note: "4.9",
      formation: "Mobile App design",
      poste: "Teacher",
      color: "#7666ff"
  },
  {
      id: 4,
      photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      nom: "D'Oliver VENOM",
      note: "4.9",
      formation: "Data Scientist",
      poste: "Teacher",
      color: "#00cfcb"
  },
  {
      id: 5,
      photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      nom: "D'Oliver VENOM",
      note: "4.9",
      formation: "Requet SQL",
      poste: "Teacher",
      color: "#ff658c"
  },
]

const Test = ({navigation}) => {

  const deconnexion = () => { 
    auth().signOut()
  }
  const myAccount = () => { 
    navigation.navigate('profilescreen') ;
  }

  return (
    <View style={testStyles.container} >

      <View style={testStyles.box2}>

        <View style={testStyles.box21}>
          <Button onPress={myAccount}>Mon Compte</Button>
        </View>

        <View style={testStyles.box22}>

          <Button onPress={deconnexion}> déconnexion</Button>

          <View style={testStyles.box221}>
            <Text style={{color:"white", fontSize:25 , fontWeight:"700"}} >HI , Davis</Text>
          </View>

          <View style={testStyles.box222}>
            <Text style={{color:"white" , fontSize:15}}>learning is easier and faster with us</Text>
          </View>



        </View>

      </View>

      <View style={testStyles.box3}>

        <View style={testStyles.box31}>
        <Text style={{color:"black",fontSize:25 , fontWeight:"300"}}>Top Courses</Text>
        </View>

        <View style={testStyles.box4}>
          <FlatList
          data={datas}
          renderItem={({item}) => <ItemCard data={item}/>}
          keyExtractor={item => item.id}
          horizontal={true}
          /> 
        
        </View>

        <View style={testStyles.box31}>
          <Text style={{color:"black",fontSize:25 , fontWeight:"300"}}>For You</Text>
        </View>
        <View style={testStyles.boxFlatlist}>
          <FlatList
          data={datas}
          renderItem={({item}) => <ItemForYou data={item}/>}
          keyExtractor={item => item.id}
          numColumns="2"
          />
        </View>
      </View>

     
    </View>
  )
}

export default Test