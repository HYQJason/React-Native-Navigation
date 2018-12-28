/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import LoginScreen from './js/LoginScreen';
import StartScreen from './js/StartScreen';
import MainScreen from './js/MainScreen';
import DetailsScreen from './js/DetailsScreen';
import SplashScreen from './js/ui/SplashScreen'


import { createStackNavigator, createAppContainer } from "react-navigation";
// //import { Navigator } from 'react-native-deprecated-custom-components';
import { Platform } from 'react-native';
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;



const AppNavigator = createStackNavigator({
  Start: {
    screen: StartScreen
  },

  Login: {
    screen: LoginScreen
  },


  Splash:{
    screen:SplashScreen
    
    },


  Main: {
    screen: MainScreen
  },
  DScreen:{
screen: DetailsScreen
  },
  initialRouteName: 'Start',
},
  {
    defaultNavigationOptions:  ({navigation}) =>({

      headerTitle:  navigation.state.routeName,
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

)
//App 容器负责管理应用的 state, 并将顶层的 navigator 链接到整个应用环境。
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;




