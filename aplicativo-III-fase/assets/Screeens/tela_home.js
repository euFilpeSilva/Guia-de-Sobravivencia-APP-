import React, { Component }  from 'react';
import { Button, TextInput, Text, View , Image, StyleSheet,FlatList,Pressable,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  
  

  const materia = [
    { materia: 'Algoritimos',atividade: "Prova", dia: '15/06',horario:"19:00 - 22:00" },
    { materia: 'Programação',atividade: "Trabalho",dia: '02/06', horario:"19:00 - 22:00" },
    { materia: 'Programação',atividade: "Apresentação",dia: '02/06', horario:"19:00 - 22:00" },

    
  ];
  const Atividade = ({ item }) => {
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
        <Text style={{ flex: 2 }}>{item.materia}</Text>
        <Text style={{ flex: 2}}>{item.atividade}</Text>
        <Text style={{ flex: 1 }}>{item.dia}</Text>
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
      <Icon name="align-justify"  size = {25} >

      </Icon>
     </Pressable>
    </View>
     <Text style={{
        position:"absolute", top: 5, left: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
     }}>Home</Text>
     <View style={{
        width:300,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop:5,
        }}>
      
      <Text style={{
        position: 'relative',
        justifyItems: 'center',
        alignContent: 'center',
        marginLeft:70,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'dark',
        marginTop: 10,
      }}>TERÇA : 24/05
      </Text>
   
       <Text style={{
            paddingLeft:15,
            color: 'grey', 
            paddingTop: 5, 
            fontSize: 20,}} >
        Aula:</Text>
         <Text style={{
            paddingLeft:15,
            color: 'dark', 
            paddingTop: 5, 
            fontSize: 15,}} >
        Engenharia de software  - 19:00 / 22:00</Text>
     <Text style={{
            paddingLeft:10, 
            paddingTop: 5, 
            fontSize: 15,}} >
        <Text style={{color: 'gray', paddingLeft: 5}}>Atividades:</Text><Text style={{
            
            color:'dark',
            paddingLeft:5, 
            }} >Apresentação</Text>  </Text>
        
      
      
      </View>
      

      <View style={{
        alignItems:'Left',
        width:300,
        height: 200,
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
      }}>Próximos Eventos: </Text>
    
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
});