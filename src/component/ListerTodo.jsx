import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore  from '@react-native-firebase/firestore';
import ItemTodo from './ItemTodo';
import styles from '../styles';

const ListerTodo = () => {

    /***
     * init all state : 
     */

    //useState : initialisation des data
    const [todos, setTodos] = useState([]) ;

    //initialisation du loading
    const [loading, setLoading] = useState(true) ;

    useEffect(() => {

        console.log("Lister") ;
        
        //snapshot : abonnement a toutes les modifs de la db
        firestore().collection("Todo").onSnapshot(querySnapshot => {
            
            //console.log('querySnapshot' , querySnapshot) ;


            const dataTodos = [] ;

            //Lecture des documents dans la collection 
            querySnapshot.forEach(doc => {

                dataTodos.push({    id : doc.id , 
                                    ...doc.data()
                                    })

            })

            setTodos(dataTodos) ;
            
            loading && setLoading(false) ;
        })

    }, [])
    

  return (
    <View>
        {loading ? <ActivityIndicator animating={true}/> :
        <FlatList
        
        data={todos}
        renderItem={({item}) => <ItemTodo todo={item}/>}
        keyExtractor={item => item.id}
        /> }
    </View>
  )
}

export default ListerTodo