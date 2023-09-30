import {Text, View, StyleSheet} from 'react-native';

export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Seja bem vindo </Text>
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