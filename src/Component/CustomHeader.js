import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimentions';
import { FontFamily } from '../Helper/FontFamily';
import { IconPathVariable } from '../Helper/IconPathVariable/IconPathVariable';

export const CustomHeader = ({ text, Icon, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}
                style={styles.touchable}>
                <Image source={Icon} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LightBlue,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: SCREEN_HEIGHT * 0.1,
    },
    icon: {
        height: SCREEN_HEIGHT * 0.021,
        width: SCREEN_WIDTH * 0.021,
        tintColor: Colors.DarkBlue,
        marginLeft: SCREEN_WIDTH * 0.01
    },
    textContainer: {
        width: SCREEN_WIDTH * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop:-10,
        fontSize: 22,
        color: Colors.DarkBlue,
        fontFamily: FontFamily.bold,
    },
    touchable: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_HEIGHT * 0.04,
        // backgroundColor:'red',
        justifyContent:'center'
    }
})
