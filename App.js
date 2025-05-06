import React, {Component} from "react";
import { View,ScrollView,Text,StyleSheet } from 'react-native';
import ContainerImg from "./components/ContainerImg";

class App extends Component{
  render(){
    return(
      <ScrollView style={styles.container} >
        <ContainerImg />

      </ScrollView>
    )
  }
}

export default App

//CSS ________________________________________________________________________________________
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2c2c2c'
  }
})
  