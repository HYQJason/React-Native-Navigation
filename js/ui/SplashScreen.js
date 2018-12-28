import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  StatusBar,
  Button,
  View,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')


 class SplashSCreen extends React.Component{
static navigationOptions={
    header:null
}

    onSkipBtnHandle = (index) => {
      Alert.alert('Skip');
      console.log(index);
    }
    _onPress = () => {
      alert("111")
    //  this.props.navigation.navigate("Main")
    // this.props.navigation.replace('Main')
    }
    nextBtnHandle = (index) => {
      Alert.alert('Next');
      console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
      console.log(index, total);
    }

render() {
   
    return (
      <View style={styles.container}>
      <StatusBar translucent={true}  backgroundColor={'rgba(0,0,0,0)'}/>
      <Swiper style={styles.wrapper}
        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{
          bottom: 70
        }}
       

        loop={false}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{uri:"http://img.zcool.cn/community/01b4dd59642074a8012193a3304f00.jpg"}}
            resizeMode='cover'
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{uri:'http://img.zcool.cn/community/01b4dd59642074a8012193a3304f00.jpg'}}
            resizeMode='cover'
          />
        </View>
        <View style={styles.slide}>
     
        <Image style={styles.image} source={{uri:"http://www.17qq.com/img_qqtouxiang/81315318.jpeg"}} /> 
         <View style={{flex:1, position: 'absolute',  alignSelf: "center" ,bottom:80}}>
         <Button style={styles.btstyle} title="进入主页" onPress={()=>{
             this.props.navigation.replace('Main')
         }}  ></Button>

         </View>
        </View>
      </Swiper>
    </View>
    
       
    //
    );
}}



const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  btstyle:{
    width:100,
    height:48,
   
    },

  image: {
    width,
    height,
  }
})

export default SplashSCreen

/* const pageArray = [{
  title: 'Page 1',
  description: 'Description 1',
  img: '',
  imgStyle: {
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height,
  },
  backgroundColor: '#a4b602',
  fontColor: '#fff',
  level: 1,
}, {
  title: 'Page 2',
  description: 'Description 2',
  img: '',
  imgStyle: {
    width:Dimensions.get("window").width,
height:Dimensions.get("window").height,
  },
  backgroundColor: '#a4b602',
  fontColor: '#fff',
  level: 10,
}
, {
  showDoneButton:true,
    title: 'Page 3',
  
    description: 'Description 3',
    img: '',
    imgStyle: {
      width:Dimensions.get("window").width,
      height:Dimensions.get("window").height,
    },
    backgroundColor: '#a4b602',
    fontColor: '#fff',
    level: 10,
   
  }
]; */