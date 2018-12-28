
import React from "react";
import { Button, View, Text } from 'react-native';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from "react-navigation";



export default class DetailsScreen extends React.Component {
/*   static navigationOptions ={
   header:null
    
    }; */
    constructor(props){
      super(props)
      const { navigation } = this.props;
      const itemId = navigation.getParam('id', 'NO-ID');
      this.newsid=itemId;
      console.log("constructor============"+this.newsid)

    }
/*static navigationOptions ={
headerTitle: '1111111',
headerRight:(<Button
title='right'
color='#226688'

/>)

}
*/
/* static navigationOptions = ({navigation})=>{
 return {
 title:navigation.getParam('otherParam','获取标题，当前是默认')
 }

  };*/

  componentDidMount() {
    // 添加监听
    console.log("componentDidMount============"+this.newsid)
}
  render() {
     const { navigation } = this.props;
      const itemId = navigation.getParam('id', 'NO-ID');
  
      const otherParam = navigation.getParam('name', 'some default value');
     /* const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
      const otherParam =this.props. navigation.getParam('name', 'some default value');*/

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>

          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
<Button
title='更新顶部title'
onPress ={()=> this.props.navigation.setParams({otherParam:'222222'})}
/>

        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
         <Button
                  title="Go back"
                  onPress={() => this.props.navigation.popToTop()}
                />
      </View>
    );
  }
}