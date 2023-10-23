import { View, Text } from 'react-native'
import React, { useEffect} from 'react'
import Todo from './src/Todo'
import Tuto from './tuto/Tuto'
import Leboncoin from './tuto/leboncoin/Leboncoin'
import AuthApp from './tuto/authApp/AuthApp'
import Test from './tuto/test/Test'
import RouteDavisScreen from './routesDavis/RouteDavisScreen'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
      
      // <Test/>
      <Provider store = {store}>
      <RouteDavisScreen/>
      </Provider>
    
  )
}

export default App