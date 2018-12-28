import React from 'react';
import { View ,Text,Image,Dimensions,StyleSheet} from 'react-native'
const {width,height}=Dimensions.get("window");

export default class Invitation extends React.Component {
    static navigationOptions = {
        header: null,
        headerTitle: '邀请',
    
      };

/* static navigationOptions=({navigation})=>{
       header:null
} */




    render() {

        return (<View style={{ flex: 1 }}>


            <Text>邀请</Text>
        </View>)

    }



}

const styles=StyleSheet.create({
bgviewstyle:{
    width,
    height:400
}

})