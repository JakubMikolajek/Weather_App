import {FlatList, RefreshControl, StyleSheet, Text, TextInput, View} from 'react-native'
import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../screens/WeatherStationScreen";
import SingleStation from "./SingleStation";
import {useState} from "react";

const WeatherStationList = () => {
    const {data, isRefetching, refetch} = useQuery(['weather'], fetchData, {enabled: false})
    const [search, setSearch] = useState("")

    const searchHandler = (value) => {
        setSearch(value)
    }

    const filteredData = data.filter((item) => item.stacja.toLowerCase().includes(search.toLowerCase()))

    const renderStation = (itemData) => {
        const item = itemData.item
        const stationProps = {
            station: item.stacja,
            temperature: item.temperatura,
            stationId: item.id_stacji
        }
        return <SingleStation {...stationProps}/>
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Wpisz miejscowość" onChangeText={searchHandler}/>
            {filteredData.length === 0 ? <Text>Nie posiadamy stacji w tym mieście</Text> :
                <FlatList data={filteredData} renderItem={renderStation} keyExtractor={item => item.id_stacji}
                          showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch}/> }
                />}
        </View>
    )
}

export default WeatherStationList

const styles = StyleSheet.create({
    container: {
        marginTop: 8
    },
    input: {
        width: 300,
        height: 30,
        alignSelf: "center",
        fontSize: 16,
        borderBottomColor: "#307fb7",
        borderBottomWidth: 2,
        marginBottom: 16

    }
})

