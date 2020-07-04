import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default class WriteScreen extends React.Component{
   
    render(){
        return(
    <View>
        <Image source={require("../assets/writestory.jpg")} style={{width:200, height:200}}/>
        <Text style={styles.text3}>WRITE YOUR STORY HERE AND SUBMIT BUTTON DOES NOT WORK</Text>
        <TextInput style={styles.writeStory} placeholder='write your story here' keyboardType='default'></TextInput>
        

    </View>
        )
    }
    
}
const styles=StyleSheet.create({
text3:{textAlign:'center', fontSize:30},
writeStory:{width:300, height:400, borderWidth:2.5, fontSize:20, margin:10, paddingLeft:10}
})