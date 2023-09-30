import {Button, Text, View, StyleSheet} from 'react-native';

export default function Imperio(props){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Minhas lindas fotos </Text>

    <Button title="Planetas" onPress={() => props.navigation.navigate('Planetas')}/>
    <Button title="Naves" onPress={() => props.navigation.navigate('Naves')}/>

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