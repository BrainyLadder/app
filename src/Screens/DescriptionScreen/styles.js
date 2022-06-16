import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    header: {
        backgroundColor: '#5dbfc1',
        padding: 6,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icon: {
        height: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH * 0.08,
        tintColor: Colors.White,
        marginLeft: SCREEN_WIDTH * 0.01
    },
    compo:{
        width: SCREEN_WIDTH * 0.582,
        // backgroundColor:'red'
    },
    lession:{
        fontSize: 24,
        color: Colors.White
    },
    container: {
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.1,
        paddingHorizontal: SCREEN_WIDTH * 0.03,
    },
    text: {
        marginVertical: SCREEN_HEIGHT * 0.01,
        textAlign: 'center'
    },
    tile: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: SCREEN_HEIGHT * 0.088,
        borderRadius: 50,
        marginVertical: SCREEN_HEIGHT * 0.04
    },
    circle: {
        backgroundColor: '#fff',
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH * 0.51
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.White,
        padding: 10,
        borderRadius: 30,
        paddingHorizontal: 15,
        elevation: 10,
        // marginLeft: SCREEN_WIDTH * 0.22
    },
    buttonText: {
        fontSize: 18,
        color: '#5dbfc1'
    },
})