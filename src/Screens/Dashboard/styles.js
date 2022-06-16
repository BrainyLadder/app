import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../Helper/DeviceDimentions';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: SCREEN_WIDTH * 0.078,
        height: SCREEN_HEIGHT * 0.042,
        tintColor: Colors.DarkBlue
    },
    title: {
        fontSize: 22,
        marginLeft: SCREEN_WIDTH * 0.08,
        color: Colors.DarkBlue
    },
    card: {
        backgroundColor: Colors.White,
        elevation: 10,
        borderRadius: 20,
        padding: 10,
        marginVertical: SCREEN_HEIGHT * 0.04,
        marginHorizontal: 5,
        borderColor: Colors.Blue,
        borderWidth:1,
        height: SCREEN_HEIGHT * 0.23,
        justifyContent:'flex-end'
    },
    text: {

    },
    button: {
        padding: 9,
        paddingHorizontal: SCREEN_WIDTH * 0.07,
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#f53b39',
        marginVertical: SCREEN_HEIGHT * 0.034,
        marginLeft: SCREEN_WIDTH * 0.05
    },
    buttonText: {
        color: Colors.White,
        fontWeight: 'bold'
    },
    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.Black
    },
    container: {
        backgroundColor: 'red',
        // marginVertical: SCREEN_HEIGHT * 0.01,
        margin: SCREEN_WIDTH * 0.03,
        borderRadius: 25,
        elevation: 10,
        marginTop: SCREEN_HEIGHT * 0.04
    },
    image: {
        width: SCREEN_WIDTH * 0.33,
        height: SCREEN_HEIGHT * 0.21,
        // marginVertical: SCREEN_HEIGHT * 0.01,
        margin: SCREEN_WIDTH * 0.03,
        borderRadius: 25,
        elevation: 10,
        marginTop: SCREEN_HEIGHT * 0.04,
        justifyContent:'flex-end',
        padding:16
    },
    txt:{
        fontSize: 18,
        color: Colors.White
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: SCREEN_HEIGHT * 0.04
    },
    bottomButton: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    icon1: {
        width: SCREEN_WIDTH * 0.075,
        height: SCREEN_HEIGHT * 0.04,
        tintColor: Colors.White
    },
    bottomText: {
        color: Colors.White,
        fontSize: 18
    },
    bottomContainer: {
        padding: 10,
        marginTop: SCREEN_HEIGHT * 0.05,
        backgroundColor: Colors.AppColor,
        borderRadius: 20,
        height: SCREEN_HEIGHT * 0.26,
    }

});
export default styles;