import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function Login({navigation}) {
  return (
    <View
      style={styles.conteudo}>

      <View style={{
        alignItems:'center',
        width:300,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 5,
        }}>

      <Text style={{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
        marginTop: 40
      }}>Menu</Text>
    
      
      <View style={{paddingTop: 24, width:120}}>
      <Button 
      title="Home" color='black' onPress={() => navigation.navigate('tela_home')}/>
      </View>
     
      <View style={{paddingTop: 24, width:120}}>
      <Button 
      title="Perfil" color='black' onPress={() => navigation.navigate('tela_perfil')}/>
      </View>

         <View style={{paddingTop: 24, width:120}}>
      <Button 
      title="Agenda" color='black' onPress={() => navigation.navigate('agenda')}/>
      </View>

       <View style={{paddingTop: 24, width:120}}>
      <Button 
      title="Histórico" color='black' onPress={() => navigation.navigate('materias')}/>
      </View>
      <View style={{paddingTop: 24, width:120}}>
      <Button 
      title="Sair" color='gray' onPress={() => navigation.navigate('login')}/>
      </View>
      
      
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#6B256F',
    
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    width: 220,
    borderBottomColor: 'grey',
   
  },
});