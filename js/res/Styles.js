import React from 'react';
import {StyleSheet,Dimensions} from 'react-native'

const dev_width=Dimensions.get("window").width;
const dev_height=Dimensions.get("window").height;


const styles=StyleSheet.create({
iamgestyle:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height,
    flex: 1,
},
hemeHeaderImageStyle:{
width:dev_width,
height:220

},
itemRootStyle:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'stretch',
},
container: {
    flex: 1,// [fleks]
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 40,
  },
  Line: {
    height: 1,
    backgroundColor: '#d1d1d1'

  },
  welcome: {
    width: 2,
    height: 40,
    backgroundColor: 'red',

  },


  view2style: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 40,
    marginLeft: 36,

  },
  view3style: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    marginLeft: 64,
    marginRight: 77,

  },
  view4style: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
   


  },
  view5style: {
    marginLeft: 64,
    marginRight: 77,
    flexDirection: 'row',
    height:60,
    justifyContent: 'space-between',



  },
  Text1: {
    color: "#f1523c",
    textAlign: 'center',
    width: 65,
    fontSize: 25,
    fontWeight: 'bold',
  },
  
  TextTitle: {
    height: 40,
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 25,

  },
  Text2: {
    fontSize: 21,
    fontWeight: 'bold',
    color: "#666666",
    textAlign: "center"

  },
  Text3: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center"

  },

  Text4: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center"

  },
  Text5: {
    paddingLeft: 10,
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    textAlignVertical: 'center',
  },
  Text6: {
    fontSize: 14,
    color: "#f1523c",
    textAlign: "center",
    display: 'none',
 
  },





})

export default styles