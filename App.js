import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View,Image ,FlatList,TouchableOpacity, ImageStore} from 'react-native';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ca nau lau",
    tenshop:" Devang",
    img:require("./image/ca_nau_lau.png")
  }, 
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "1Kg khô gà bở tỏi",
    tenshop:" LTD Food",
    img:require("./image/ga_bo_toi.png")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Xe cần cẩu đa năng",
    tenshop:" Thế giới đồ chơi",
    img:require("./image/xa_can_cau.png")
  },
];
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  // <Text>{item.title}</Text>
  
  <View style={{flexDirection:'row'} }>
    <View style={{flex:2}}>
      <Image style={{width:100,height:100}} source={item.img}></Image>
    </View>
    <View style={{flex:4}}>
      <Text style={{fontSize:16}}>{item.title}</Text>
      <Text style={{fontSize:16,color:'red'}}>Shop {item.tenshop}</Text>
    </View>
    <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity title='Chat' style={styles.btnChat}>
        <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        
        <View style={{flex:1,alignItems:'center',paddingLeft:15,paddingRight:15,justifyContent:'space-between',flexDirection:'row'}}>
          <Image source={require('./image/back.png')}></Image>
          <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}> Chat</Text>
          <Image source={require('./image/giohang.png')}></Image>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{flex:1,paddingLeft:10}}>
        <View style={{paddingLeft:20}}><Text style={styles.text}>Bạn có thắc mắc về sản phẩm vừa xem. Đừng ngại</Text>
        <Text style={styles.text}>chat với shop</Text>
        </View>
        <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       
      />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between', alignItems:'center',padding:20}}>
          <Image source={require('./image/gach.png')}></Image>
          <Image source={require('./image/home.png')}></Image>
          <Image source={require('./image/back1.png')}></Image>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  header:{
    flex:0.7,
    flexDirection:'row',
    backgroundColor:'#1BA9FF',
    justifyContent:'center',
    alignItems:'center'


  },
  body:{
    flex:7.5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    // backgroundColor:'#E5E5E5'
  },
  footer:{
    flex:0.7,
    backgroundColor:'#1BA9FF',
    flexDirection:'row',
    
    
  },
  text:{
    fontSize:16,
    color:'black'
  },
  btnChat:{
    width:100,
    height:55,
    backgroundColor:'#F31111',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  
  }
});
