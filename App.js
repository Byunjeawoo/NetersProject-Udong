import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen';
import CollectScreen from "./screens/CollectScreen";
import DetailClubScreen from "./screens/DetailClubScreen";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Collect" component={CollectScreen}/>
        <Stack.Screen name="DetailClub" component={CollectScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;