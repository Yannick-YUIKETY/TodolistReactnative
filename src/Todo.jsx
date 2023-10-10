import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ListerTodo from './component/ListerTodo'
import AddTodo from './component/AddTodo'

const Todo = () => {
  return (
    <View style={styles.container}>
      <AddTodo/>
      <ListerTodo/>
      
    </View>
  )
}

export default Todo