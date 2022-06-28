import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function Materias({ navigation }) {
  const disciplinas = [
    { nome: 'Projeto de interface', fone: 'Fulaninho' },
    { nome: 'Arquitetura de Software', fone: 'beltraninho' },
    { nome: 'Logica de programação', fone: 'jubiscreuzo' },
  ];
  const Contato = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
          alignItems: 'center',
          paddingHorizontal: 16
        }}>
        <Text style={{ flex: 2 }}>{item.nome}</Text>
        <Text style={{ flex: 1 }}>{item.fone}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex :1}}>
    
    <View style={{flex :1}}>
    
       <View style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          backgroundColor: '#6B256F',
          height: 56,
          alignItems: 'center'
        }}>
        <View style={{
          position:"absolute", top: 15, left: 15,
          

     }}>
     <Pressable onPress={() => navigation.navigate('menu')}>
      <Icon name="bars"  size = {25} >

      </Icon>
     </Pressable>
    </View>
          <Text
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
              paddingLeft:25,
            }}>
            Matérias
          </Text>
            
      </View>
      <FlatList data={disciplinas} renderItem={Contato} />
      <Pressable 
      style={{position: 'absolute', bottom: 16, right: 16,
      height: 48, width: 48, backgroundColor: 'gray', 
      borderRadius: 30, justifyContent: 'center', 
      alignItems: 'center'
      }}
      onPress={() => navigation.navigate('materias_disponiveis')}>
        <Text style={{color: 'white', fontSize: 24}}>+</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}