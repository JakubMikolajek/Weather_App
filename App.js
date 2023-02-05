import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SafeAreaProvider} from "react-native-safe-area-context";
import CitiesScreen from "./src/screens/CitiesScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SingleCityScreen from "./src/screens/SingleCityScreen";

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()
const Menu = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={CitiesScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Detail" component={SingleCityScreen} options={{
                headerTransparent: true,
                title:""
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