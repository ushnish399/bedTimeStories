import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default class ReadScreen extends React.Component{

    render(){
        return(
            <View>
                <Image source={require("../assets/readstory.jpg")} style={{width:200, height:200}}/>
                <Text style={styles.text2}>READ YOUR STORIES HERE</Text>
            </View>
        )
    }




}
const styles=StyleSheet.create({
 text2:{fontSize:30, textAlign:'center'}
})