import React, { useState, useEffect } from 'react';
import {Button, Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import styles from '../components/estiloRebeldes';

const requestPlanetas = async (callback) => {
  const response = await fetch('https://swapi.dev/api/planets');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function Planetas(props){
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    requestPlanetas(setRegistros);
  },[])
  
  return(
    <SafeAreaView style={styles.container}>
      
    <View style={styles.container}>
      <Text style={styles.titulo}> Os Planetas </Text>
<FlatList data={registros} keyExtractor={(item) => item.name.toString()} renderItem={({item}) => <Text style={styles.item}> <Text> Nome: {item.name}{'\n'}</Text> <Text> Solo: {item.terrain}{'\n'}</Text>
      </Text>
      }/>
      <Button title="Voltar" onPress={() => props.navigation.navigate('Imperio')}/>
      </View>
      <View>
        <Text style={styles.superior}> StarWars </Text>
      </View>

      
      </SafeAreaView>

  );
}
