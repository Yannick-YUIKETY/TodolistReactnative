import { View, Text, ActivityIndicator ,  Platform } from 'react-native'
import React, { useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux' ;
import firestore  from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';



const ProfileScreen = () => {

  
  const userId  = useSelector(state => state.user) ;

  console.log('user' , userId) ;

  const modifier = () => { 
    
    console.log(email , nom , prenom) ;

    firestore().collection('user').doc(userId).update({nom:nom , prenom:prenom, email})

  }

  const read = async () => { 

    const snapUser = await firestore().collection('user').doc(userId).get() ;

    console.log('snapUser' , snapUser.data()) ;

    setEmail(snapUser.data().email) ;
    setNom(snapUser.data().nom) ;
    setPrenom(snapUser.data().prenom) ;
  }


  const [nom, setNom] = React.useState(''); 
  const [prenom, setPrenom] = React.useState('');
  const [email, setEmail] = React.useState('');
  //const [user, setUser] = React.useState();

  const chooseFile = () => { 
    const options = {
      title: 'Select Image',
      storageOptions: {
          skipBackup: true, // do not backup to iCloud
          path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
    }
  }

  useEffect(() => {
    read() ;
  }, [])
  

  return (
    <View>

      <TextInput
      placeholder="nom"
      value={nom}
      onChangeText={setNom}
    />

      <TextInput
      placeholder="prenom"
      value={prenom}
      onChangeText={setPrenom}
    />

      <TextInput
      placeholder="email"
      value={email}
      onChangeText={setEmail}
    />

    <Button onPress={modifier}>Modifier</Button>
    <Button onPress={chooseFile}>PLUS</Button>

    </View>
  )
}

export default ProfileScreen