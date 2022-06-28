import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Button, Alert, Pressable } from "react-native";

const MateriasDisponiveis = ({ navigation }) => {
  const [alignContent, setAlignContent] = useState("space-between");

  return (
    
    <PreviewLayout
      label="Materias Disponiveis"
      selectedValue={alignContent}
      navigation = {navigation}
      values={[
        "Logica de programação",
        "Machine Learn",
        "Topicos de Matematica",
        "Bussines Inteligence",
        "Banco de Dados",

        
      ]}
      setSelectedValue={setAlignContent}>
      
    </PreviewLayout>
    
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
  navigation,
}) => (
  
  <View style={{ flex: 1 }}>
    <Text style={styles.label}>Materias Disponiveis</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
    <View style={styles.fixToText}>
        <Button
          title="Voltar" color='black'
          onPress={() => navigation.navigate('tela_home')}
        />
        <Button
          title="Adicionar" color='black'
          onPress={() => navigation.navigate('materias')}
        />
      </View>
  </View>
  
  
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "white",
    maxHeight: 400,
    
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor:'white'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "#6B256F",
    borderWidth: 0,
  },
  fixToText: {
    backgroundColor:'white',
    paddingLeft:8,
    paddingRight:8,
    paddingTop:80,
    flexDirection: 'row',
    justifyContent: 'space-between'},
    
   
    
    
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
          paddingLeft: 26,
          backgroundColor: '#6B256F',
          color: 'white',
          height: 80,
          fontSize: 24,
          paddingVertical: 26,
          
  },
});

export default MateriasDisponiveis;