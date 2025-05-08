import React, {Component} from "react";
import { View,ScrollView,StyleSheet,Text } from 'react-native';
import ContainerImg from "./components/ContainerImg";
import MostCaroussel from "./components/MostCaroussel";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Routes from "./components/Routes";
import Partiners from "./components/Partiners";

class App extends Component{
  render(){
    return(
      <ScrollView showsVerticalScrollIndicator ={ false  } style={styles.container} >
        <ContainerImg style = {styles.containerimg}/>
        <View style={styles.pad}>
          <Text style={styles.slogan}>
            Somos a Kapitour, e viemos lhe revelar o que Maricá pode te
            proporcionar
          </Text>
          <MostCaroussel />
          <Categories />
          <Map />
        </View>
        <Routes />
        <Partiners />
        <Footer />
      </ScrollView>
    )
  }
}

export default App

//CSS ________________________________________________________________________________________
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2c2c2c',
    height:"auto",
    width:"auto"
  },
  containerimg:{
    height:250,
  },
  pad:{
    marginHorizontal: 15,
  },
  slogan: {
    color: "#f0f0f0",
    textAlign: "center",
    fontSize: 16,
    padding: 25,

  },
})
  