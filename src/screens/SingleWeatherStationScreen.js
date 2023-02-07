import {StyleSheet, Text, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {useQuery} from "@tanstack/react-query";
import {fetchData} from "./WeatherStationScreen";
import {StatusBar} from "expo-status-bar";
import Title from "../components/Title";

const SingleWeatherStationScreen = ({route}) => {
    const stationId = route.params.stationId
    const {data} = useQuery(['weather'], fetchData, {enabled: false})

    const singleCity = data.find(item => item.id_stacji === stationId)

    return (
        <SafeAreaView style={styles.flex}>
            <StatusBar/>
            <View style={styles.container}>
                <View style={[styles.flex, styles.titleContainer]}>
                    <Title style={styles.title} title={singleCity.stacja}/>
                </View>
                <View style={styles.flex_2}>
                    <Text style={styles.description}>Temperatura: {singleCity.temperatura}°C</Text>
                    <Text style={styles.description}>Wiatr: {singleCity.predkosc_wiatru}km/h</Text>
                    <Text style={styles.description}>Ciśnienie: {singleCity.cisnienie} hPa</Text>
                    <Text style={styles.description}>Wilgotność: {singleCity.wilgotnosc_wzgledna}%</Text>
                    <Text style={styles.description}>Suma opadów: {singleCity.suma_opadu}%</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SingleWeatherStationScreen

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: "center"
    },
    flex_2: {
        flex: 2,
        alignItems: "center"
    },
    container: {
        marginTop: 12,
        alignItems: "center"
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 32
    },
    description:{
        fontSize: 20,
        padding:2
    }
})