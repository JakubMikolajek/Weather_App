import {StyleSheet, Text, View} from 'react-native'
import {useQuery} from "@tanstack/react-query";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import Title from "../components/Title";
import WeatherStationList from "../components/WeatherStationList";

export const fetchData = async () => {
    const res = await fetch("https://danepubliczne.imgw.pl/api/data/synop");
    return res.json();
};

const CitiesScreen = () => {
    const {isLoading} = useQuery(['weather'], fetchData)

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <SafeAreaView style={styles.flex_1}>
            <StatusBar/>
            <View style={styles.container}>
                <View style={styles.flex_1}>
                    <Title style={styles.titleMargin} title="Weather App"/>
                </View>
                <View style={styles.flex_9}>
                    <WeatherStationList/>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default CitiesScreen

const styles = StyleSheet.create({
    flex_1: {
        flex: 1
    },
    flex_9:{
        flex:9
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleMargin: {
        marginTop: 15
    }
});
