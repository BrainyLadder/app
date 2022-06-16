import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.AppColor,
        padding: 6,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        height: SCREEN_HEIGHT * 0.043,
        width: SCREEN_WIDTH * 0.08,
    },
    compo: {
        width: SCREEN_WIDTH * 0.66,
        // backgroundColor:'red'
    },
    instruct: {
        fontSize: 22,
        color: Colors.White
    },
    container: {
        marginTop: SCREEN_HEIGHT * 0.16,
        padding: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 50,
        height: SCREEN_HEIGHT * 0.125,
        width: SCREEN_WIDTH * 0.24
    },
    component:{
        // backgroundColor:'red',
        alignSelf:'center',
        width: SCREEN_WIDTH * 0.28,
        alignItems:'flex-end'
    },
    subContainer: {
        marginTop: SCREEN_HEIGHT * 0.07,
        paddingHorizontal: SCREEN_WIDTH * 0.06
    },
    lable: {
        fontSize: 18,
        color: Colors.Black
    },
    textBox: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: SCREEN_WIDTH * 0.04,
        marginVertical: SCREEN_HEIGHT * 0.01
    },
    input: {
        fontSize: 16,
        color: Colors.Black
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.AppColor,
        marginTop: SCREEN_HEIGHT * 0.1,
        padding: 15,
        paddingHorizontal: SCREEN_WIDTH * 0.07,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 18,
        color: Colors.White
    },
})