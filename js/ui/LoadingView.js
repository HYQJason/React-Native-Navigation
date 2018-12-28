import  React ,{Component} from 'react';
import {   StyleSheet, ProgressBarAndroid, View, } from 'react-native';

export default class LoadingView extends  React.PureComponent {
    render() {
      return (
        <View style={styles.container}>
    <ProgressBarAndroid styleAttr="Inverse" color="#2196F3"></ProgressBarAndroid>
         
    
       
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-evenly",
      padding: 10
    },
    loadstyle:{

    }
  });