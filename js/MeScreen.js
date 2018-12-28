import React from 'react';

import BaseScreen from './base/BaseScreen'
import {View,Button,Text} from 'react-native';


export default class MeScreen extends BaseScreen{
static navigationOptions ={
 //header:null

};


render(){
    return(<View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
<Text>我的</Text>


    </View>);
}

}

MeScreen.defaultProps = {
    disableBack: true
  };