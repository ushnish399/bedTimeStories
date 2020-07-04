import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{

  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}
  
 const TabNavigator=createBottomTabNavigator({
    ReadScreen:{screen:ReadScreen},
    WriteScreen:{screen:WriteScreen}
  },

  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
        const routeName=navigation.state.routeName;
        if(routeName==="ReadScreen"){
          return(
            <Image source={require("./assets/readstory.jpg")} style={{width:40, height:40}}/>
          )
        }
        else if(routeName==="WriteScreen"){
          return(
            <Image source={require("./assets/writestory.jpg")} style={{width:40, height:40}}/>
          )
        }
      }
    })
  })

 
  const AppContainer=createAppContainer(SwitchNavigator);









const styles=StyleSheet.create({
   text1:{textAlign:'center', fontSize:50, justifyContent:'center'}
})