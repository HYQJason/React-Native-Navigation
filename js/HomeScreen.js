import React, { Component } from "react";
import BaseScreen from './base/BaseScreen'
import Mstyle from './res/Styles'
import LoadingView from './ui/LoadingView'
import Banner from './ui/banner'
import ItemDivideComponent from './ui/ItemDivideComponent'

import { Animated, FlatList, StyleSheet, Image, View, Text, TouchableOpacity, ProgressBarAndroid, DeviceEventEmitter } from 'react-native';




export default class HomeScreen extends BaseScreen {

  _keyExtractor = (item, index) => item.newsId;
  constructor(props) {
    super(props)
    this.state = {
      alpha: 0,
      isLoading: true,
      dataArr: [],
      bannerList: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  static navigationOptions = {
    header: null,
    headerTitle: 'Home',

  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let params = { "appStore": "jjy100001", "appVersion": "5.0.3", "deviceId": "123456", "deviceSystem": "ANDROID", "deviceType": "123456789" };
    fetch('https://test2-app.jajaying.com/app/ANDROID/getIndexInfo', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)

    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("------------------responseData============" + JSON.stringify(responseData))
        if (responseData.resultCodeMsg === "成功" && responseData.resultCode === "C03000000") {
          let datalist = responseData.businessObject.newsList;
          let dataBlog = [];
          let i = 0;
          datalist.map((item) => {
            dataBlog.push({
              key: i,
              value: item
            })
            i++;
          })

          // DeviceEventEmitter.emit('bannerList',responseData.businessObject.bannerList)
          /*   let data = responseData.items;
            let dataBlob = [];
            let i = 0;
            data.map(function (item) {
                dataBlob.push({
                    key: i,
                    value: item,
                })
                i++;
            }); */




          this.setState({
            isLoading: false,
            dataArr: dataBlog
          })
          datalist = null;
          dataBlog = null;

        } else {

        }


      }).catch((error) => {
        console.log("------------------error============" + error)

      });
  }




  _header = () => {
    return <Image style={Mstyle.hemeHeaderImageStyle} resizeMode='stretch' source={{ uri: "http://pic1.win4000.com/pic/e/35/e0103300db.jpg" }}></Image>;
  }


  refreshing() {
    alert('正在刷新中.... ');
  }
  _renderFooter() {
    return (
      <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
        <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
          正在加载更多数据
                </Text>
      </View>
    );


  }
  _onScroll = (event) => {
    var y = event.nativeEvent.contentOffset.y;
 //   console.log("-----------======================" + y)
    if (y == 0) {
      this.setState({
        alpha: 0
      })
    } else
      if (y > 0 && y <= 220) {
        var scale = y / 220
        this.setState({
          alpha: scale
        })
      } else {
        this.setState({
          alpha: 1.0
        })
      }

  }
  _onPressItem = (id) => {
    console.log("id=========="+id)
    this.props.navigation.navigate("DScreen",{"id":id})
  };

  _renderItem = ({ item }) => (
  

    <MyListItem
        id="11111111111111"
      onPressItem={this._onPressItem}
      //  selected={!!this.state.selected.get(item.id)}

      title={item.value.title}
    />

  );

  _LoadingView() {
    return (<View style={{
      flex: 1,
      justifyContent: "space-evenly",
      padding: 10
    }}>
      <ProgressBarAndroid styleAttr="Inverse" color="#2196F3"></ProgressBarAndroid>

    </View>)
  }

  render() {
    if (this.state.isLoading) {
      return this._LoadingView();
    }

    return (
      
      <View style={styles.container}>

        <FlatList
          data={this.state.dataArr}
          extraData={this.state}
          ItemSeparatorComponent={ItemDivideComponent}//分割线组件
          ListHeaderComponent={Banner}
          ListFooterComponent={mListFooterComponent}
          onRefresh={this.refreshing}
          refreshing={false}
          onEndReachedThreshold={1}
          ListFooterComponent={this._renderFooter.bind(this)}
          onScroll={this._onScroll.bind(this)}

          /*   data={[
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
              { key: 'https://facebook.github.io/react-native/img/favicon.png' },
            ]} */

            keyExtractor={(item, index) => index.toString()}
          //  keyExtractor={this._keyExtractor}
          //  renderItem={({ item }) => <Image source={{ uri: item.key }} style={styles.im}></Image>}
          renderItem={this._renderItem}
        />

        <View style={[styles.titleStyle, { backgroundColor: `rgba(243,89,55,${this.state.alpha})` }]}>
          <Image style={{ position: 'absolute', alignSelf: "flex-end" }} source={require('../images/icon/icon_message.png')}></Image>

        </View>
      </View>

    );
  }
}





HomeScreen.defaultProps = {
  disableBack: true
};
class MyListItem extends React.PureComponent {



  _onPress = () => {
    this.props.onPressItem(this.props.id);
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





class mListFooterComponent extends Component {
  render() {
    return <View style={styles.footerView}>
      <Text>{"Footer"}</Text>

    </View>
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