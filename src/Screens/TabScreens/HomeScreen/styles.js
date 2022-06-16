import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Helper/DeviceDimentions';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.White,
        // alignItems: 'center'
    },
    subContainer: {
        padding: 10,
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SCREEN_HEIGHT * 0.016,
        elevation: 20,
        borderRadius: 60,
        shadowColor: '#808080',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.12,
        shadowRadius: 60,
        width: SCREEN_WIDTH * 0.765,
        height: SCREEN_HEIGHT * 0.24,
    },
    image: {
        width: SCREEN_WIDTH * 0.81,
        height: SCREEN_HEIGHT * 0.25,
    },
    header: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.3,
        // padding: 10
        padding: SCREEN_WIDTH * 0.04
    },
    icon: {
        height: SCREEN_HEIGHT * 0.058,
        width: SCREEN_WIDTH * 0.11,
        alignSelf: 'flex-end',
    },
    imageContainer: {
        height: SCREEN_HEIGHT * 0.1,
        width: SCREEN_WIDTH * 0.19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.White,
        marginLeft: SCREEN_WIDTH * 0.041,
        marginTop: SCREEN_HEIGHT * 0.014,
        borderRadius: 40,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.12,
        shadowRadius: 60,
    },
    kid: {
        height: SCREEN_HEIGHT * 0.096,
        width: SCREEN_WIDTH * 0.184,
    },
    container: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.7,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // paddingVertical: SCREEN_HEIGHT * 0.0,
        paddingHorizontal: SCREEN_WIDTH * 0.08
    },
    text: {
        color: '#5bc4c5',
    },
    textCompo: {
    //   marginTop: SCREEN_HEIGHT * 0.01,
      alignItems:'flex-start',
      justifyContent:'center',
      padding: 15
    },
    txt: {
     fontSize:24,
     fontWeight: 'bold',
     color:'#757575'
    },
})