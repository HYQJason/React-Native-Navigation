import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  DeviceEventEmitter
} from 'react-native';
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')


export default class Banner extends React.Component{

  componentDidMount() {
    console.log("===============================componentDidMount===")
  this.event=DeviceEventEmitter.addListener("bannerList",(bannerList)=>{
    console.log("===============================收到通知===")
    bannerList.map((item,i)=>{
      console.log("=================================="+i+{item})
      console.log(item)
    })

  })

  }



    componentWillUnmount(){
        // 移除通知 
        this.event.remove();
    }



render(){
    console.log(this.props.uri)
    return(



        <Swiper style={styles.wrapper}
        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{
          bottom: 20
        }}
       
        height={220}
        loop={true}
        autoplay={true} 
        >
      
          <Image
            style={styles.image}
            source={{uri:"http://img.zcool.cn/community/01b4dd59642074a8012193a3304f00.jpg"}}
            resizeMode='cover'
          />
     
        
          <Image
            style={styles.image}
            source={{uri:'http://img.zcool.cn/community/01b4dd59642074a8012193a3304f00.jpg'}}
            resizeMode='cover'
          />
       
       
     
        <Image style={styles.image} source={{uri:"http://www.17qq.com/img_qqtouxiang/81315318.jpeg"}} /> 
        
      
      </Swiper>
    
    )
    
}


}

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
  

  
    image: {
      width,
      height:220,
    }
  })