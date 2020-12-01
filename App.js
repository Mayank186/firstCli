import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  
  const [items, setItems] = useState([
  {id: makeid, text: 'Milk'},
  {id: makeid, text: 'Eggs'},
  {id: makeid, text: 'Bread'},
  {id: makeid, text: 'Juice'},
  {id: makeid, text: 'Ice'},
  ]);

  const makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if (!text) {
       Alert.alert('Error', 'Please Enter a item ', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id : makeid, text}, ...prevItems];
      })
    }
    
  }

  return(
    <View style={{flex:1}}>
      <Header title= 'Shopping List'/>
      <AddItem addItem= {addItem}/>
      <FlatList data={items} 
      renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem}/>
      )}
      />
    </View>
  )
};

export default App;