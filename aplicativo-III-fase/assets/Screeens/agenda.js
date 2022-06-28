import React from 'react';
import { Button, TextInput, Text, View , Image, StyleSheet,FlatList,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Agenda({ navigation }) {
  
  const materia = [
    { materia: 'Matéria:', atividade: "Evento:", dia: 'Dia:',horario:"Horário:" },
    { materia: 'Algorítmo',atividade: "Prova",dia: 'terça', horario:"19:00 - 22:00" },
   { materia: 'Métricas',atividade: "Trabalho",dia: 'quarta', horario:"19:00 - 22:00" },
   { materia: 'Lógica',atividade: "Prova",dia: 'quarta', horario:"19:00 - 22:00" },
   { materia: 'Hardware',atividade: "Prova",dia: 'sexta', horario:"19:00 - 22:00" },
    
  ];
  
  const Atividade = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 36,
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
          alignItems: 'center',
          paddingHorizontal: 5
        }}>
        <Text style={{ flex: 1 }}>{item.materia}</Text>
        <Text style={{ flex: 1}}>{item.professor}</Text>
        <Text style={{ flex: 1 }}>{item.atividade}</Text>
        <Text style={{ flex: 1 }}>{item.dia}</Text>
        <Text style={{ flex: 1 }}>{item.horario}</Text>
      </View>
    );
  }
  const Aula = ({ item }) => {
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
        <Text style={{ flex: 3 }}>{item.materia}</Text>
        <Text style={{ flex: 2}}>{item.atividade}</Text>
        <Text style={{ flex: 1 }}>{item.dia}</Text>
      </View>
    );
  }

   return (
    <View style={styles.conteudo}>
      <View style={{
          position:"absolute", top: 15, left: 15,
          

     }}>
     <Pressable onPress={() => navigation.navigate('menu')}>
      <Icon name="bars"  size = {25} >

      </Icon>
     </Pressable>
    </View>

      <View style={{
        alignItems:'Left',
        width:300,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop:10,
        }}>

      <Text style={{
        fontSize: 25,
        marginLeft:10,
        fontWeight: 'bold',
        color: 'dark',
        marginTop: 10,
      }}>Agenda Semanal</Text>
    
      <Text style={{ color: 'dark', paddingTop: 20, marginLeft: 20}} ></Text>
      <FlatList data={materia} renderItem={Atividade} />

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