import React from 'react';
import { Button, TextInput, Text, View , Image, StyleSheet,FPressable,TouchableOpacity,ScrollView,Pressable  } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Home({ navigation }) {
  return (
   <ScrollView>
    <View style={styles.conteudo}>


        <View style={styles.perfil}>


<View style={{
          position:"absolute", top: 15, left: 15,
          

     }}>
     <Pressable onPress={() => navigation.navigate('menu')}>
      <Icon name="bars"  size = {25} >

      </Icon>
     </Pressable>
    </View>

          <Icon name="user" size={130}/>
          <Text style={{
            fontSize:20,
            marginTop:20,
            backgroundColor:'white'    
            }}>Nome do Usuário
          </Text>
        </View>

      <Text style={{ color: 'white',paddingBottom: 6, paddingTop: 10, paddingRight: 185}} >Curso</Text>
        <Text style={{
          color:'grey',
          borderBottomWidth: 1,
          width: 220,
          height:40,
          marginBottom: 5,
          borderBottomColor: 'grey'}}
          keyboardType="Curso"
        >Análise e Desenvolvimento de Sistemas
        </Text>

      <Text style={{ color: 'white', paddingBottom: 6, paddingTop: 10, paddingRight: 160}} >Matricula</Text>
        <Text style={{
          color:'grey',
          borderBottomWidth: 1,
          width: 220,
          height:24,
          marginBottom: 5,
          borderBottomColor: 'grey'}}
          keyboardType="Matricula">
          2214267743
        </Text>


      <View style={{}}>
        <Text style={{ color: 'white',paddingBottom: 6, paddingTop: 20, paddingLeft: 5}} >Ano/Turno</Text>
        <Text style={{
          color:'grey',
          borderBottomWidth: 1,
          width: 221,
          height:24,
          marginBottom: 5,
          marginLeft: 5,
          borderBottomColor: 'grey'}}
          keyboardType="Ano/turno"
        >2° / Noturno
        </Text>
      </View>

      <Text style={{
        fontSize:20,
        marginTop:20,
        color:'white'
      }}
      >Matérias Cadastradas</Text>

      <View style={{ flexDirection:'row', flexWrap:"wrap", alignItems:'center', flex: 1, justifyContent:'center' , marginTop: 30,marginBottom:50 }}>
        <View style={{}}>
          <Text
            style={styles.cards}>        
            Algoritmos de Programação
          </Text>
        </View>

        <View>
          <Text
            style={styles.cards}> 
            Métricas       
          </Text>
        </View>

        <View>
          <Text
            style={styles.cards}>        
            Desenvolvimento MOBILE
          </Text>
        </View>

        <View>
          <Text
            style={styles.cards}>        
              EAD - UX Design
          </Text>
        </View>
      
      </View>
        
    </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  perfil: {
    fontSize:50,
      width:335,
      height:240,
      marginEnd:1,
      marginVertical:10,
      marginTop:0,
      backgroundColor:'white',
      borderBottomEndRadius: 30,
      borderBottomLeftRadius: 30,
      alignItems:'center'
  },
  
  conteudo: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#6B256F',
  },



  //Estilo de cartões

  cards:{
    width:103,
    backgroundColor: 'silver',
    color: 'white',
    height: 60,
    fontSize: 12,
    margin:10,
    padding: 5,
    alignItems:'center',
    borderRadius:5
 
  },
});