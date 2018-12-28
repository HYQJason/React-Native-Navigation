import React from "react";
import { Button, View, Text } from 'react-native';


export default  class SettingScreen extends React.Component{
      render(){
          return (
       <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text> SettingScreen</Text>
      <Button
       title="button"
onPress={() => this.props.navigation.navigate('Profile')}
      ></Button>


           </View>
)
}
}