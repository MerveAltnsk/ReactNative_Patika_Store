import React, { useState } from 'react'; 
import {View, FlatList, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import patika_store from './patika_store.json';
import Card from './components/Card/Card';



function App(){
  
  const [searchText, setSearchText] = useState('');
  const renderProduct = ({item}) => <Card product={item} />;
  const keyExtractorFunction = item => item.id.toString()

  return (

  <View style = {styles.container}>
    
  <Text style = { styles.app_title}>
  PATIKASTORE
  </Text>

  <TextInput 
  style = {styles.textInput}
  placeholder="Search products"
  value={searchText}
  onChangeText={text => setSearchText(text)} // Update state when text changes
  />

  <FlatList
    numColumns={2}
    data={patika_store}
    renderItem={renderProduct}
    keyExtractor={keyExtractorFunction}
  />

</View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  app_title: {
    fontSize: 26, 
    fontWeight: '500', 
    letterSpacing: 1.5, 
    textAlign: 'center', 
    marginVertical: 25, 
    color: '#3E2723', 
    textShadowColor: '#EDE7F6',
    textShadowOffset: { width: 0, height: 1.5 }, 
    textShadowRadius: 4, 
    fontFamily: 'serif', 
  },

  textInput: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 15,
    margin: 10,
    fontSize: 20,
    borderColor: 'transparent',
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#ECEFF1',
    marginHorizontal: 10,
    paddingLeft: 10,
  },
});


  export default App;