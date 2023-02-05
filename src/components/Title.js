import {StyleSheet, Text} from 'react-native'

const Title = ({title, style}) => {
    return <Text style={[styles.title, style && style]}>{title}</Text>

}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "500"
    }
})