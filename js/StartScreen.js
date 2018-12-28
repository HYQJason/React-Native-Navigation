import React from 'react';
import {View,Image,StyleSheet,StatusBar} from 'react-native'
import { NavigationActions } from 'react-navigation';
import styles from './res/Styles'
import Storage from 'react-native-storage';
//import StorageUtils from './src/utils/StorageUtils';
import { AsyncStorage } from 'react-native';
export default class StartScreen extends React.Component{
    constructor(props){
        super(props)
      this.state = {
    firstStart:null
};

    }
    static navigationOptions = {
        header: null,
    
      };

    

    render(){
return (
    <View style={{flex:1}}>
   <StatusBar  
         hidden={true}  //是否隐藏状态栏。  
        >  
        </StatusBar>  
        <Image style={styles.iamgestyle} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544786935998&di=19be4494bba81ea5a12be053e027c098&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20164_9_17%2Fa45x096936507259405.jpg'}}></Image>

    </View>

 )

    }

    componentDidMount() {
        var mthis=this;
        AsyncStorage.getItem('firstStart', function (error, result) {
            if (error) {
         
                console.log("-------------------------------------------------读取失败-------");
            }else {
                mthis.setState(
                   
                {
                firstStart:result
                }
                
                );
    
            }
        })
    
        console.log("-------------------------------------------------------"+this.state.firstStart);
            this.timer = setTimeout(() => {
                if(this.state.firstStart===null){
                    this.props.navigation.replace('Splash')

                }else{
                    this.props.navigation.replace('Login', {
                        itemId: 86,
                        commTitle: '登录'})

                }
               
    
            }, 1000);

        
      
      }
      componentWillUnmount() {
        // 请注意Un"m"ount的m是小写
    
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
      }
}