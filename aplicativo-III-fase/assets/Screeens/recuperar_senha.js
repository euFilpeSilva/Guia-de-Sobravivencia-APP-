import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Recuperar_senha({navigation}) {
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
        Recuperar Senha
      </Text>
      <View style={{paddingHorizontal: 16}}>
        <Text style={styles.rotulo}>Insira nova senha</Text>
        <TextInput style={styles.input}
         secureTextEntry={true}
        />
        <Text style={styles.rotulo}>Repita novamente</Text>
        <TextInput style={styles.input}
          secureTextEntry={true}
        />
        	<View style={{paddingTop: 24}}>
          <Button title="Atualizar" color='black' onPress={()=> navigation.navigate ('login')}/>
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