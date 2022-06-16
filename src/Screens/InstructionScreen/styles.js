import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.White,
        height: SCREEN_HEIGHT,
    },
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icon: {
        height: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH * 0.08,
        tintColor: Colors.White,
        marginLeft: SCREEN_WIDTH * 0.01
    },
    compo:{
        width: SCREEN_WIDTH * 0.62,
        // backgroundColor:'red'
    },
    instruct:{
        fontSize: 22,
        color: Colors.White
    },
    container: {
        marginTop: SCREEN_HEIGHT * 0.07,
        padding: 15,
    },
    card: {
        backgroundColor: Colors.White,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        elevation: 10,
        marginHorizontal: 1,
        marginVertical: SCREEN_HEIGHT * 0.01,
        shadowRadius: 60,
        shadowColor: Colors.TextGrey,
        justifyContent: 'center',
        // alignItems:'center',
        
    },
    text: {
        color: Colors.Black
    },
    picContainer: {
        alignSelf: 'center',
        backgroundColor: '#b3dff0',
        height: SCREEN_HEIGHT * 0.37,
        width: SCREEN_WIDTH * 0.5,
        marginVertical: SCREEN_HEIGHT * 0.01,
        marginHorizontal: SCREEN_WIDTH * 0.02,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SCREEN_HEIGHT * 0.011
    },
    textStyle: {
        marginLeft: SCREEN_WIDTH * 0.01,
        fontSize: 15,
        color: Colors.Black,
        marginVertical: SCREEN_HEIGHT * 0.004,
        lineHeight: SCREEN_HEIGHT * 0.03
    },
    index: {
        height: 30,
        width: 30
    }
})