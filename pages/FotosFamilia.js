import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

export default function FotosFamilia(props){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Fotos Familia </Text>

      <Button title="Fotos" onPress={() => props.navigation.navigate('Fotos')}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 25,
    color: '#ff00ab'
  }
})