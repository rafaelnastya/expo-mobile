import React, { useState, useEffect } from 'react';
import {Button, Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import styles from '../components/estiloRebeldes';

  const requestNaves = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
}
export default function Naves(props){
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    requestNaves(setRegistros);
  },[])
  return(
        <SafeAreaView style={styles.container}>

    <View style={styles.container}>
      <Text style={styles.titulo}> Fotos das Naves </Text>
<FlatList data={registros} keyExtractor={(item) => item.name.toString()} renderItem={({item}) => <Text style={styles.item}> <Text> Nome: {item.name}{'\n'}</Text> <Text> Solo: {item.terrain}{'\n'}</Text>
      </Text>
      }/>
      <Button title="Voltar" onPress={() => props.navigation.navigate('Imperio')}/>
      </View>
      </SafeAreaView>

  );
}

