import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Colors } from '../../Helper/Colors';
import { IconPathVariable } from '../../Helper/IconPathVariable/IconPathVariable';
import { SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { styles } from './styles';

export const SignUpScreen = () => {
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={[styles.icon, {
                        tintColor: Colors.White, marginLeft: SCREEN_WIDTH * 0.01
                    }]} />
                </TouchableOpacity>
                <View style={styles.compo}>
                    <Text style={styles.instruct}>Profile Details</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={IconPathVariable.User1}
                        style={[styles.icon, { tintColor: Colors.TextGrey, }]} />
                </View>
                <TouchableOpacity style={styles.component}>
                    <Image source={IconPathVariable.Camera} 
                    style={[styles.icon, {marginTop: -36}]}/>
                </TouchableOpacity>

                <View style={styles.subContainer}>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.lable}>Full Name</Text>
                        <View style={styles.textBox}>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your name'
                                placeholderTextColor={'grey'}
                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.lable}>Email</Text>
                        <View style={styles.textBox}>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your mail'
                                placeholderTextColor={'grey'}
                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.lable}>City</Text>
                        <View style={styles.textBox}>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your city'
                                placeholderTextColor={'grey'}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Save Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}