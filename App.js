import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen';
import RecruitScreen from "./screens/RecruitScreen";
import DetailClubScreen from "./screens/DetailClubScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Recruit" component={RecruitScreen}/>
        <Stack.Screen name="DetailClub" component={DetailClubScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;