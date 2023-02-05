import {Pressable, StyleSheet, Text, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";

const SingleStation = ({station, temperature, stationId}) => {
    const navigation = useNavigation()
    const pressHandler = () => {
        navigation.navigate("Detail", {
            stationId: stationId
        })
    }

    return (
        <Pressable style={({pressed}) => pressed ? styles.pressed : null} onPress={pressHandler}>
            <View style={styles.container}>
                <Text style={styles.text}>{station}</Text>
                <Text style={styles.text}>{temperature}°C</Text>
            </View>
        </Pressable>
    )
}

export default SingleStation

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#307fb7",
        borderWidth: 2,
        borderRadius: 8,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width:300,
        height:75
    },
    text: {
        fontSize: 24,
    },
    pressed: {
        opacity: 0.6
    }
})