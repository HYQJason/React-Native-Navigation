import React from 'react';
import { View, Button, Text } from 'react-native'



 class LoginScreen extends React.Component {

    WwillFocus=this.props.navigation.addListener("willFocus",(aa)=>{
        console.log(aa)
        console.log('===========willFocus')
    })
  
    

    componentWillMount() {
        console.log("组件将要被加载到视图之前调用");
    }


    /*shouldComponentUpdate:一般用于优化，可以返回false或true来控制是否进行渲染(true 的话进行下2步操作，false不会进行下去)
      componentWillUpdate: 组件刷新前调用
    componentDidUpdate：更新后

    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.detailContent, 'detailContent');
        if (this.state.count !== nextState.count) {
            console.log("shouldComponentUpdate1111---组件需要更新");
            return true;
        }
        return false;
    }



    componentWillUpdate() {
        console.log("组件将要更新");
    }

    componentDidUpdate() {
        console.log("组件更新完毕");
    }

    componentDidMount() {
        // 添加监听
        this.viewDidAppear = this.props.navigation.addListener(
            'didFocus',
            (obj)=>{
                console.log(obj)
            }
        )


        console.log("加载状态        在调用了render方法，组件加载成功并被成功渲染出来之后，所要执行的后续操作，一般都会在这个函数中进行，比如经常要面对的网络请求等加载数据操作");
    }

    componentWillUnmount() {
        console.log("卸载状态");
     this.viewDidAppear.remove()
   this.  WwillFocus.remove()
    }

    // 在子组件中对父元素props或state的改变进行监听进行相应的操作
    componentWillReceiveProps(nextProps) {
        console.log(this.props.detailContent, 'this--->>componentWillReceiveProps');
        console.log(nextProps.detailContent, 'next--->>componentWillReceiveProps')
    }



    //覆盖
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            headerTitle: params ? params.commTitle : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerStyle.backgroundColor,
            },
            headerTintColor: navigationOptions.headerTintColor,
        };
    };


    render() {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>点击登录 </Text>
            <Button title='startMain'
                onPress={() => {
                    this.props.navigation.replace("Main")

                }}
            >
            </Button>


        </View>)
    }


}



export default LoginScreen