import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { FontFamily } from '../../Helper/FontFamily';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    header: {
        width: SCREEN_WIDTH.width,
        height: SCREEN_HEIGHT * 0.3
    },
    subContainer: {
        backgroundColor: Colors.White,
        marginTop: SCREEN_HEIGHT * 0.14,
        height: SCREEN_HEIGHT,
        padding: 15,
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
    },
    card: {
        marginVertical: SCREEN_HEIGHT * 0.03,
        marginHorizontal: SCREEN_WIDTH * 0.07,
        // paddingVertical: SCREEN_HEIGHT * 0.002,
        // paddingHorizontal: SCREEN_WIDTH * 0.0011,
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 10,
        width: SCREEN_WIDTH * 0.33,
        height: SCREEN_HEIGHT * 0.17,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.12,
        shadowRadius: 30,
    },
    image: {
        width: SCREEN_WIDTH * 0.36,
        height: SCREEN_HEIGHT * 0.18,
    },
    inputBox: {
        marginTop: SCREEN_HEIGHT * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 30,
        paddingHorizontal: SCREEN_WIDTH * 0.04,
        width: SCREEN_WIDTH * 0.88,
        alignSelf: 'center'
    },
    input: {
        fontSize: 18
    },
    icon: {
        width: SCREEN_WIDTH * 0.096,
        height: SCREEN_HEIGHT * 0.051
    },
    container: {
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.03,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.White,
        borderRadius: 50,
        elevation:10,
        width: SCREEN_WIDTH * 0.17,
        height: SCREEN_HEIGHT * 0.09,
        marginTop: SCREEN_HEIGHT * 0.012,
        marginLeft: SCREEN_WIDTH * 0.034,
    },
    cateGory: {
        height: SCREEN_HEIGHT * 0.06,
        width: SCREEN_WIDTH * 0.12,
        resizeMode: 'contain'
    },
    textContainer: {
        alignSelf: 'flex-end',
        marginTop: SCREEN_HEIGHT * 0.011,
        marginRight: SCREEN_WIDTH * 0.04
    },
    text: {
        fontSize: 15,
        color: '#5bc4c5',
        fontFamily: FontFamily.bold,
        textAlign: 'center'
    },
    box: {
        // backgroundColor:'red',
        top: SCREEN_HEIGHT * 0.01,
        left: SCREEN_WIDTH * 0.03,
        justifyContent: 'center',
        // alignItems:'center',
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_HEIGHT * 0.06
    },
    back: {
        width: 20,
        height: 20,
        tintColor: Colors.White,

    }
})