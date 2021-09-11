/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,Dimensions
} from 'react-native';
import Quiz from './Quiz';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
import result from './results';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="result" component={result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const width = Dimensions.get("screen").width;

function App({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{backgroundColor:'#00af91',flex:1}}>
          <View style={{justifyContent:'flex-end',alignItems:'center',flex:0.6}}>
            <Image source={require('/home/naveen/MCQuiz/brain.png')} style={{width:200,height:200,tintColor:'#fca831'}}/>
            
          </View>
          <View style={{alignContent:'center',alignItems:'center',justifyContent:'center',flex:0.3}}>
            <TouchableOpacity activeOpacity={0.85} style={{width:width/2,height:40,marginTop:40,borderWidth:2,borderRadius:10,borderColor:'#fca831',alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'#fca831'}}>
                  Start Study
                </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.85} onPress={()=>navigation.navigate('Quiz')} style={{width:width/2,height:40,marginTop:40,borderWidth:2,borderRadius:10,borderColor:'#fca831',alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'#fca831'}}>
                  Start Quiz
                </Text>
            </TouchableOpacity>
          </View>
          
      </View>
      
    </View>
        
    
  );
};


