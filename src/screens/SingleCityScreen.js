import {StyleSheet, Text, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {useQuery} from "@tanstack/react-query";
import {fetchData} from "./CitiesScreen";
import {StatusBar} from "expo-status-bar";
import Title from "../components/Title";

const SingleCityScreen = ({route}) => {
    const stationId = route.params.stationId
    const {data} = useQuery(['weather'], fetchData, {enabled: false})

    const singleCity = data.find(item => item.id_stacji === stationId)

    console.log(singleCity)

    return (
        <SafeAreaView style={styles.flex}>
            <StatusBar/>
            <View style={styles.container}>
                <Title title={singleCity.stacja}/>
                <Text>Temperatura: {singleCity.temperatura}°C</Text>
                <Text>Wiatr: {singleCity.predkosc_wiatru}km/h</Text>
                <Text>Ciśnienie: {singleCity.cisnienie} hPa</Text>
                <Text>Wilgotność: {singleCity.wilgotnosc_wzgledna}%</Text>
                <Text>Suma opadów: {singleCity.suma_opadu}%</Text>
            </View>
        </SafeAreaView>
    )
}

export default SingleCityScreen

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: "center"
    },
    container:{
        marginTop: 12,
        alignItems:"center"
    }
})