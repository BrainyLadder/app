import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Modal, ScrollView, TextInput, Image, ToastAndroid } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { LoginApi } from "../../Helper/API_Calling";
import { SCREEN_HEIGHT } from "../../Helper/DeviceDimentions";
import { IconPathVariable } from "../../Helper/IconPathVariable/IconPathVariable";
import { ValidateNumber } from "../../Helper/Validations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { getProjectData } from "../../Redux/Actions/action";

export const LoginScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [contactNumber, setContactNumber] = useState('')
    const [showCountryCode, setShowCountryCode] = useState(false)
    const [text, setText] = useState('+91')
    const dispatch = useDispatch();
    const DATA = [
        { id: 0, CountryName: 'India', code: '+91', flag: IconPathVariable.Flag },
        { id: 1, CountryName: 'United State', code: '+1', flag: IconPathVariable.US },
    ]

    const handleLogin = async () => {
        if (!contactNumber) {
            ToastAndroid.show('Please enter contact number',
                ToastAndroid.SHORT)

        } else if (!ValidateNumber(contactNumber)) {
            ToastAndroid.show('Please enter valid no',
                ToastAndroid.SHORT)
        }
        else {
            console.log('hey')
            LoginApi(contactNumber).then(async (resp) => {
                let response = resp;
                console.log('response====', response)
                if (response.data.status === 201) {
                    const id = JSON.stringify(response.data.id)
                    console.log('id===', id)
                    await AsyncStorage.setItem('userId', id)
                    dispatch(getProjectData(JSON.parse(id)))
                    navigation.navigate('BottomTab')
                    ToastAndroid.show('Successfully Logeed In',
                        ToastAndroid.SHORT)
                }
                else {
                    navigation.navigate('Dash');
                    // ToastAndroid.show(response.data.message,
                    //     ToastAndroid.SHORT)
                }
            })
        }
    }

    const handleUpdate = (item) => {
        console.log('id====', item.id)
        // let arr = DATA

    }

    return (
        <LinearGradient colors={['#ffffff', '#D6E4F7']}
            style={styles.mainContainer}>
            <View style={styles.Container}>
                <Text style={styles.text}>Happy{'\n'}learning</Text>
                <TouchableOpacity style={[styles.button, {

                }]}
                    onPress={() => setModalVisible(true)}>
                    {/* <LinearGradient colors={['#079cff', '#fcfcfc']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={[styles.button, {
                            padding: 10,
                            paddingHorizontal: 38,
                        }]}
                    > */}
                    <Text style={styles.buttonText}>Sign In</Text>

                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}
                            style={styles.crossContainer}>
                            <Image source={require('../../assets/icons/close.png')}
                                style={styles.cross} />
                        </TouchableOpacity>
                        <View style={{
                            padding: 20,
                            paddingVertical: SCREEN_HEIGHT * 0.01
                        }}>
                            <Text style={styles.textStyle}>ENTER YOUR PHONE NUMBER</Text>
                            <View style={styles.box}>
                                <TouchableOpacity onPress={() => setShowCountryCode()}
                                    style={styles.dropDown}>
                                    <Image source={IconPathVariable.Flag} style={styles.flag} />
                                    <Text style={styles.number}>{text}</Text>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={showCountryCode}
                                    onRequestClose={() => {
                                        setShowCountryCode(false);
                                    }}
                                >
                                    <View style={styles.listModal}>
                                        <ScrollView>
                                            {
                                                DATA.map((item) => (
                                                    <TouchableOpacity onPress={() => handleUpdate(item)}
                                                        style={styles.list}>
                                                        <Image source={item.flag} style={styles.flag} />
                                                        <Text style={styles.name}>{item.CountryName}</Text>
                                                        <Text style={styles.name}>{item.code}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                        </ScrollView>
                                    </View>
                                </Modal>
                                <View style={styles.textBox}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType='numeric'
                                        value={contactNumber}
                                        onChangeText={(text) => setContactNumber(text)}
                                        placeholder="Enter Registered Phone Number"
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={[styles.loginButton, {
                                // backgroundColor: 'red',
                                // marginTop: SCREEN_HEIGHT * 0.06,
                                // borderRadius: 8,
                                // elevation: 10
                            }]}
                                onPress={() => handleLogin()}>
                                {/* <LinearGradient colors={['#079cff', '#fcfcfc']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={[styles.loginButton, {
                                    padding: 12,

                                }]}
                            > */}
                                <Text style={styles.buttonText}>Login</Text>
                                {/* </LinearGradient> */}
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => handleLogin()}
                            style={styles.loginButton}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity> */}
                        </View>
                    </View>
                </Modal>
            </View>
            <Image
                resizeMode="contain"
                source={require('../../assets/images/image.png')}
                style={styles.imageContainer} />

        </LinearGradient>
    )
}