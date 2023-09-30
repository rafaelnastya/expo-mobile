import {Button, Text, View, StyleSheet} from 'react-native';

export default function Imperio(props){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Minhas lindas fotos </Text>

    <Button title="Fotos Etec" onPress={() => props.navigation.navigate('FotosEtec')}/>
    <Button title="Fotos Familia" onPress={() => props.navigation.navigate('FotosFamilia')}/>

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