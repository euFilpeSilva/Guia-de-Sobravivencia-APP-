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
        marginTop: 80
      }}>Login</Text>
    
      <Text style={{ color: 'grey', paddingTop: 20, paddingRight: 185}} >Email</Text>
      <TextInput style={styles.input}
        keyboardType="email-address"
      />
      <Text style={{ color: 'grey', paddingTop: 20, paddingRight: 185}}>Senha</Text>
      <TextInput style={styles.input}
        secureTextEntry={true}
      />

      <View style={{paddingTop: 24,}}>
      <Button 
      title="Entrar" color='black' onPress={() => navigation.navigate('tela_home')}/>
      </View>
      <View>
      <Pressable onPress={() => navigation.navigate('recuperar_senha')}>
      <Text style={{fontSize: 12, color: 'blue', marginTop: 10}}> 
      Esqueceu a senha? </Text>
      </Pressable>
      </View>
      <View>
      <Pressable onPress={() => navigation.navigate('tela_cadastro')}>
      <Text style={{fontSize: 12, color: 'blue', marginTop: 10}}> 
      Cadastre-se  </Text>
      </Pressable>
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