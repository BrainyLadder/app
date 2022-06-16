import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { FontFamily } from '../../Helper/FontFamily';

export const styles = StyleSheet.create({
    image: {
        width: SCREEN_WIDTH * 0.999,
        height: SCREEN_HEIGHT * 0.32,
        // marginTop: - SCREEN_HEIGHT * 0.041,
        position: 'absolute',
        top: 0,
        zIndex: 10
    },
    container: {
        height: SCREEN_HEIGHT,
        backgroundColor: Colors.White,
        // marginTop: - SCREEN_HEIGHT * 0.2,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    subContainer: {
        marginTop: SCREEN_HEIGHT * 0.34,
        padding: 15,
        paddingHorizontal: SCREEN_WIDTH * 0.07
    },
    text: {
        color: Colors.DarkBlue,
        fontSize: 24,
        fontFamily: FontFamily.bold
    },
    txt: {
        fontSize: 18,
        color: Colors.DarkBlue,
        marginTop: SCREEN_HEIGHT * 0.06,
        fontFamily: FontFamily.bold
    },
    box: {
        height: 60,
        marginTop: 30,
        alignSelf: 'center',
    },
    input: {
        width: SCREEN_WIDTH * 0.17,
        marginHorizontal: SCREEN_WIDTH * 0.03,
        fontSize: 20,
        color: Colors.DarkBlue,
        textAlign: 'center',
        borderColor: '#7fd3d4',
        borderWidth: 1,
        backgroundColor: Colors.White,
        borderRadius: 20
    },
    button: {
        borderRadius: 25,
        zIndex: 10,
        marginTop: SCREEN_HEIGHT * 0.1,
        // shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        elevation: 10,
        padding: 4,
        paddingHorizontal: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#079cff'
    },
    buttonText: {
        fontSize: 22,
        color: Colors.White,
        fontFamily: FontFamily.bold
    },
    contain: {
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.09
    },
    otpText: {
        fontSize: 18,
        color: Colors.DarkBlue,
        fontFamily: FontFamily.bold
    },
})