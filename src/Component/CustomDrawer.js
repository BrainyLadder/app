import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../Helper/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimentions';
import { IconPathVariable } from '../Helper/IconPathVariable/IconPathVariable';

export const CustomDrawer = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={()=> navigation.closeDrawer()}>
                <Image source={IconPathVariable.Close} style={[styles.icon, {
                    marginLeft: SCREEN_WIDTH * 0.03,
                    tintColor: Colors.TextGrey
                }]} />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={IconPathVariable.User1} style={[styles.icon, {
                        tintColor: Colors.TextGrey
                    }]} />
                </View>
                <View style={{ marginLeft: SCREEN_WIDTH * 0.04 }}>
                    <Text style={styles.txt}>Pratibha Chouhan</Text>
                    <Text style={styles.text}>8880344456</Text>
                    <Text style={styles.text}>preet@gmail.com</Text>
                </View>
            </View>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.container}>
                    <Image source={IconPathVariable.Cart} style={styles.icon} />
                    <Text style={[styles.txt, { marginLeft: SCREEN_HEIGHT * 0.03 }]}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={IconPathVariable.Facebook} style={styles.icon} />
                    <Text style={[styles.txt, { marginLeft: SCREEN_HEIGHT * 0.03 }]}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={IconPathVariable.Instagram} style={styles.icon} />
                    <Text style={[styles.txt, { marginLeft: SCREEN_HEIGHT * 0.03 }]}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={IconPathVariable.Rate} style={styles.icon} />
                    <Text style={[styles.txt, { marginLeft: SCREEN_HEIGHT * 0.03 }]}>Rate Us</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Image source={IconPathVariable.Logout} style={styles.icon} />
                <Text style={styles.txt}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 15,
    },
    icon: {
        width: SCREEN_WIDTH * 0.043,
        height: SCREEN_HEIGHT * 0.023,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SCREEN_HEIGHT * 0.03
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: Colors.DarkBlue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    subContainer: {
        marginLeft: SCREEN_HEIGHT * 0.02
    },
    txt: {
        fontSize: 16,
        color: Colors.DarkBlue,
        fontWeight: 'bold'
    },
    text: {
        color: Colors.TextGrey,
        fontSize: 12
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.White,
        borderRadius: 10,
        padding: 8,
        elevation: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: SCREEN_WIDTH * 0.3,
        position: 'absolute',
        bottom: SCREEN_HEIGHT * 0.04,
        right: SCREEN_WIDTH * 0.06
    }
})