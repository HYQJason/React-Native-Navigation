import React from "react";
import { Button, View, Text } from 'react-native';

export default  class ProfileScreen extends React.Component{


    

    render(){
     let itemId=  this.props.navigation.getParam('id','NO-ID')
     console.log("+++++++++++++itemId+++++++++"+itemId)


         return (
         <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text> the is ProfileScreen</Text>
           <Button     title="button" ></Button>


             </View>
)
}
}