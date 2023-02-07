import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SafeAreaProvider} from "react-native-safe-area-context";
import WeatherStationScreen from "./src/screens/WeatherStationScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SingleWeatherStationScreen from "./src/screens/SingleWeatherStationScreen";

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()



const Menu = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WeatherStationScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Detail" component={SingleWeatherStationScreen} options={{
                headerTransparent: true,
                title: ""
            }}/>
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Menu/>
                </NavigationContainer>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}