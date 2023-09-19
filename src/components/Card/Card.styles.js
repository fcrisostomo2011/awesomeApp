import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        shadowColor: '#000',
        shadowOffset: {height:5, width:3},
        elevation:10,
        shadowOpacity:3,
        shadowRadius: 5,
    },
})
