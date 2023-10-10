import { View, Text, Button } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';

const ItemTodo = ({todo}) => {
    const supprimer  = () => { 

        firestore().collection("Todo").doc(todo.id).delete() ;

    }

    const realiser  = () => { 

        firestore().collection("Todo").doc(todo.id).update({
            status: !todo.status ,

        }) ;

    }
  return (
    <View style={{height:50 , backgroundColor:"fff" , margin:10 , flexDirection:"row"}}>
      <View style={{backgroundColor:"green" , flex:5}} />
      <View style={{backgroundColor:"skyblue" , flex:1}} />
      <View style={{backgroundColor:"orange" , flex:1}} />
      

    </View>


    // <View>
    //   {todo.status  ? <Text style={{textDecorationLine:'line-through'}}>{todo?.task}</Text>
    //                 : <Text>{todo?.task}</Text>
    //                 }
    //   <Button title='del ' onPress={supprimer}/>
    //   <Button title='upd ' onPress={realiser}/>
    // </View>
  )
}

export default ItemTodo