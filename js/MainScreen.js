import React from 'react';




import Invitation from './src/Invitation';
//import PScreen from './ProfileScreen';
import ISScreen from './InvestScreen';
import HomeScreen from './HomeScreen';
import MeScreen from './MeScreen';

import { StyleSheet, Image ,BackHandler,ToastAndroid} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Platform } from 'react-native';
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;


 /* const TabNavigator = createBottomTabNavigator({


  home: {

    screen: HomeScreen,
    headerMode: 'screen',

    navigationOptions: ({navigation}) => ({
   
      title: '首页',
      tabBarVisible: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return focused ? <Image style={{ width: 40, height: 33 }} source={require('../images/icon/icon_home_red.png')} /> : <Image style={{ width: 40, height: 33 }} source={require('../images/icon/icon_home.png')} />
      },
      tabBarOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: '#34355',
        labelStyle: {
          fontSize: 12,
        },

      },
      tabBarOnPress: () => {
        route(navigation)
    }
    }),


  },
  invest: {
    screen: ISScreen,
    headerMode: 'screen',

    navigationOptions: ({navigation}) => ({

      title: '投资',
      tabBarVisible: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return focused ? <Image style={{ width: 40, height: 33 }} source={require('../images/icon/btn_back.png')} /> : <Image style={{ width: 40, height: 33 }} source={require('../images/icon/btn_back.png')} />
      },

      tabBarOnPress: () => {
        route(navigation)
    }

    }),
  },
  setting: {
    screen: SettingScreen,
    headerMode: 'screen',

    navigationOptions: ({navigation}) => ({

      title: '投资',
      tabBarVisible: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return focused ? <Image style={{ width: 40, height: 33 }} source={require('../images/icon/btn_back.png')} /> : <Image style={{ width: 40, height: 33 }} source={require('../images/icon/btn_back.png')} />
      },


      tabBarOnPress: () => {
        route(navigation)
    }
    }),
  },
  me: {
    screen: MeScreen,
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
      title: '我的',
      tabBarVisible: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return focused ? <Image style={mstyles.tabBarIconStyle} source={require('../images/icon/btn_back.png')} /> : <Image style={mstyles.tabBarIconStyle} source={require('../images/icon/btn_back.png')} />
      },
      tabBarOnPress: () => {
        route(navigation)
    }
    }),


  }

  

},

{
  navigationOptions: {
    header: null,
},
}

)*/


/**
 * Tab点击跳转调用的公共方法
 */
const route = (navigation) => {
  if (!navigation.isFocused()) {
      navigation.navigate(navigation.state.routeName, {
          title: navigation.state.routeName
      })
  }
};

const  TabNavigator= createBottomTabNavigator({
  
    home: createStackNavigator(
      
      { screen: HomeScreen }, // StackNavigatorConfig
      {
          headerMode:'screen',
       
          navigationOptions:{
              title:'首页',
           tabBarVisible:true,
           tabBarIcon: ({focused, tintColor}) => {
            return  focused ? <Image style={{width: 40, height: 33}} source={require('../images/icon/icon_home_red.png')}/> : <Image style={{width: 40, height: 33}} source={require('../images/icon/icon_home.png')}/>
        },
        tabBarOptions: {
          activeTintColor: '#e91e63',
       //   inactiveTintColor:'#fff',
          labelStyle: {
            fontSize: 12,
          },
         
        }
          },
         
          
          
      }
      
   
    ),
    invest: createStackNavigator({ screen: ISScreen }, // StackNavigatorConfig
      {
          headerMode:'screen',
  
          navigationOptions:{
            
              title:'投资',
           tabBarVisible:true,
           tabBarIcon: ({focused, tintColor}) => {
            return  focused ? <Image style={{width: 40, height: 33}} source={require('../images/icon/btn_back.png')}/> : <Image style={{width: 40, height: 33}} source={require('../images/icon/btn_back.png')}/>
      
          },
      
   
  
          },

          defaultNavigationOptions:  ({navigation}) =>({
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
              textAlign: 'center',
              flex: 1,
              fontWeight: 'bold',
            },
            headerTitleContainerStyle: {
              left: TITLE_OFFSET,
              right: TITLE_OFFSET,
            }
          })
         
      }
      
      
      ),
  
    setting: createStackNavigator({ screen: Invitation }, // StackNavigatorConfig
      {
          headerMode:'screen',
    
          navigationOptions:{
            
              title:'邀请',
           tabBarVisible:true,
           tabBarIcon: ({focused, tintColor}) => {
            return  focused ? <Image style={{width: 40, height: 33}} source={require('../images/icon/btn_back.png')}/> : <Image style={{width: 40, height: 33}} source={require('../images/icon/btn_back.png')}/>
        },
  
   
  
          },
          
      }),
    me:createStackNavigator(
      // RouteConfigs
      {
              screen:MeScreen,
      },
      // StackNavigatorConfig
      {
          headerMode:'screen',
          navigationOptions:{
              title:'我的',
           tabBarVisible:true,
           tabBarIcon: ({focused, tintColor}) => {
            return  focused ? <Image style={mstyles.tabBarIconStyle} source={require('../images/icon/btn_back.png')}/> : <Image style={mstyles.tabBarIconStyle} source={require('../images/icon/btn_back.png')}/>
        },
  
   
  
          },
          
      }
  ),
  
  
  },
  
  {
    navigationOptions: {
      header: null,
  },

  }

  
  ); 


const mstyles = StyleSheet.create({
  tabBarIconStyle: {
    width: 30,
    height: 30,

  },
});





export default TabNavigator;
  //app容器
  //export default createAppContainer(TabNavigator);

  /*const AppContainer = createAppContainer(TabNavigator);
  
  
  export default class Main extends React.Component {
    render() {
      return <AppContainer />;
    }
  }*/