import {createStackNavigator} from '@react-navigation/stack';

import Imperio from './Imperio';
import Planetas from './Planetas';
import Naves from './Naves';

const Stack = createStackNavigator();

export default function ImperioStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Imperio" component={Imperio}/>
      <Stack.Screen name="Planetas" component={Planetas} options={{title:"Planetas StarWars"}}/>
      <Stack.Screen name="Naves" component={Naves} options={{title:"Naves StarWars"}}/>
    </Stack.Navigator>
  );
}