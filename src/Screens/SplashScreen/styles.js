import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { FontFamily } from '../../Helper/FontFamily';

export const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        backgroundColor: 'red',
        // justifyContent:'center'
    },
    Container: {
        // flex: 1,
        width: SCREEN_WIDTH ,
        height: SCREEN_HEIGHT
        
    }
})