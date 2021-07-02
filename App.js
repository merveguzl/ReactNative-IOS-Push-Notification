
import React, { useEffect } from 'react';
import {
  SafeAreaView
} from 'react-native';
import notification from './notification';
const App = () => {

  useEffect(() => {
    notification()
  }, [])
  
  return (
    <SafeAreaView style={{flex:1}} >

    </SafeAreaView>
  )
  
};

export default App;
