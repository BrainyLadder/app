import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { FontFamily } from '../../Helper/FontFamily';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    Container: {
        paddingVertical: SCREEN_HEIGHT * 0.09,
        paddingHorizontal: SCREEN_WIDTH * 0.089
    },
    imageContainer: {
        width: SCREEN_WIDTH * 0.87,
        height: SCREEN_HEIGHT * 0.6,
    },
    text: {
        fontSize: 30,
        fontFamily: FontFamily.bold,
        color: Colors.DarkBlue,
        lineHeight: SCREEN_HEIGHT * 0.05,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        alignSelf: 'flex-start',
        zIndex: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
        backgroundColor: '#079cff',
        marginTop: SCREEN_HEIGHT * 0.07,
        padding: 10,
        paddingHorizontal: 38,
    },
    buttonText: {
        color: Colors.White,
        fontSize: 18,
        fontFamily: FontFamily.normal
    },
    modal: {
        backgroundColor: Colors.White,
        width: SCREEN_WIDTH * 0.94,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.4,
    },
    textStyle: {
        fontSize: 22,
        alignSelf: 'center',
        color: Colors.DarkBlue,
        fontFamily: FontFamily.bold
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.Grey,
        borderRadius: 8,
        marginTop: SCREEN_HEIGHT * 0.03
    },
    dropDown: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
        width: SCREEN_WIDTH * 0.26,
        height: SCREEN_HEIGHT * 0.063,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        paddingHorizontal: SCREEN_WIDTH * 0.02
    },
    textBox: {

    },
    flag: {
        height: SCREEN_HEIGHT * 0.03,
        width: SCREEN_WIDTH * 0.06,
    },
    number: {
        fontSize: 18,
        color: Colors.Black,
        marginHorizontal: SCREEN_WIDTH * 0.02
    },
    crossContainer:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        padding:10
    },
    cross:{
        height: SCREEN_HEIGHT * 0.021,
        width: SCREEN_WIDTH * 0.04,
        tintColor: Colors.TextGrey
    },
    icon: {
        height: SCREEN_HEIGHT * 0.01,
        width: SCREEN_WIDTH * 0.03
    },
    input: {
        marginLeft: SCREEN_WIDTH * 0.03,
        color: Colors.Black
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: SCREEN_HEIGHT * 0.055,
        borderRadius: 8,
        elevation: 10,
        padding: 12,
        backgroundColor: '#079cff'
    },
    loginText: {
        fontSize: 20,
        color: Colors.White,
        fontFamily: FontFamily.normal
    },
    listModal: {
        backgroundColor: Colors.White,
        padding: 15,
        width: SCREEN_WIDTH * 0.84,
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.6,
        elevation: 10,
        borderWidth: 1,
        borderColor: Colors.Grey
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SCREEN_HEIGHT * 0.01
    },
    name: {
        fontSize: 18,
        color: Colors.TextGrey,
        marginHorizontal: SCREEN_WIDTH * 0.02
    },
})