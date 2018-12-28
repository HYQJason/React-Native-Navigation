import React,{ Component } from 'react';
import BaseScreen from './base/BaseScreen'
import Mstyle from './res/Styles'
import {StyleSheet, Text,  View ,Image,FlatList,TouchableOpacity} from 'react-native';
import ItemDivideComponent from './ui/ItemDivideComponent'


export default class InvestScreen extends BaseScreen {
    static navigationOptions = ({ navigation }) => {
        return {
          title: '项目',
        };
      };

     constructor(props){
         super(props)
         this.state={
            dataArr:[]
         }
     }

     refreshing() {
      alert('正在刷新中.... ');
    }

     _renderItem = ({ item }) => (
  

        <MyListItem
          //   id={item.id}
         // onPressItem={this._onPressItem}
          //  selected={!!this.state.selected.get(item.id)}
    
         // title={item.value.title}
        />
    
      );

      _renderFooter() {
        return (
          <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
              正在加载更多数据
                    </Text>
          </View>
        );
    
    
      }
    render() {

        return (
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
         <FlatList 
          //  data={this.state.dataArr}
            extraData={this.state}
          //  ItemSeparatorComponent={ItemDivideComponent}//分割线组件
            ListFooterComponent={mListFooterComponent}
            onRefresh={this.refreshing}
            refreshing={false}
            onEndReachedThreshold={1}
            ListFooterComponent={this._renderFooter.bind(this)}

                data={[
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
            ]}

            keyExtractor={(item, index) => index.toString()}
    
          renderItem={this._renderItem}
         />

      
      
      
                   </View>
        )
    }

}
class mListFooterComponent extends Component {
    render() {
      return <View style={styles.footerView}>
        <Text>{"Footer"}</Text>
  
      </View>
    }
  }
InvestScreen.defaultProps = {
    disableBack: true
  };

  class MyListItem extends React.PureComponent {



    _onPress = () => {
      this.props.onPressItem();
    };
  
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      return (
        <TouchableOpacity onPress={this._onPress}>
  
          <View style={Mstyle.container}>
  
            <View style={Mstyle.view2style} >
              <View style={Mstyle.welcome}></View>
              <Text  style={Mstyle.TextTitle}>{this.props.title}{this.props.key}</Text>
            </View>
            <View style={Mstyle.view3style} >
              <Text style={Mstyle.Text1}>80%</Text>
              <Text style={Mstyle.Text2}>30<Text style={Mstyle.Text3}>天</Text></Text>
  
              <View style={Mstyle.view4style}>
                <Text>剩余</Text>
                <Text>74.30万</Text>
              </View>
  
              <Text style={Mstyle.Text6}>收益中</Text>
            </View>
            <View style={Mstyle.Line}></View>
  
            <View style={Mstyle.view5style}>
              <Text style={Mstyle.Text5}>可用: 红包 |  加息券 |  现金券</Text>
              <Text style={Mstyle.Text5}>已加入 1000 人</Text>
            </View>
  
            <Image style={{ width: 60, height: 60, position: 'absolute', backgroundColor: '#ffaabbcc', alignSelf: "flex-end" }}></Image>
  
          </View>
        </TouchableOpacity>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    im: {
      flexDirection: 'row',
      height: 100,
      width: 100,
    },
    txt: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'black',
      fontSize: 30,
    },
    footerView: {
      alignItems: 'center',
      flex: 1,
      height: 80,
    },
    titleStyle: {
      width: 480,
      height: 48,
      position: 'absolute',
      alignSelf: "flex-end", flex: 1
  
    }
  });
  