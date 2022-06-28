import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Tela_cadastro({navigation}) {
  return (
    <View>
      <Text
        style={{
          paddingLeft: 16,
          backgroundColor: '#6B256F',
          color: 'white',
          height: 80,
          fontSize: 24,
          paddingVertical: 26,
        }}>
        Cadastrar 
      </Text>
      <View style={{paddingHorizontal: 16}}>
        <Text style={styles.rotulo}>Insira Email</Text>
        <TextInput style={styles.input}
        keyboardType="email-address"/>
        <Text style={styles.rotulo}>Insira Senha</Text>
        <TextInput style={styles.input}
          secureTextEntry={true}/>
          <Text style={styles.rotulo}>Repita Senha</Text>
        <TextInput style={styles.input}
          secureTextEntry={true}/>
        	<View style={{paddingTop: 24}}>
          
          <Button title="Cadastrar" color='black' onPress={()=> navigation.navigate ('login')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  rotulo: { 
    color: 'gray', 
    paddingTop: 16 
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});