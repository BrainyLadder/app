import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import LinearGradient from 'react-native-linear-gradient';
import { ImagePathVariable } from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';
import { SCREEN_HEIGHT } from '../../Helper/DeviceDimentions';

export const OtpVerify = ({ navigation }) => {

    const [otp, setOtp] = useState('')

    // useEffect(() => {
    //     const backAction = () => {
    //         BackHandler.exitApp()
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );

    //     return () => backHandler.remove();
    // }, []);

    const handleLogin = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View>
            <Image resizeMode='contain'
                source={ImagePathVariable.Image1} style={styles.image} />
            <View
                style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.text}>Welcome!</Text>
                    <Text style={styles.txt}>Identification Code</Text>

                    <View style={styles.box}>
                        <OtpInputs
                            clearTextOnFocus
                            handleChange={(code) => setOtp(code)}
                            numberOfInputs={4}
                            selectTextOnFocus={false}
                            inputStyles={styles.input}
                        />
                    </View>
                    <TouchableOpacity style={styles.contain}>
                        <Text style={styles.otpText}>Resend OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {
                        marginTop: SCREEN_HEIGHT * 0.1,
                    }]}
                        onPress={() => handleLogin()}>
                        {/* <LinearGradient colors={['#079cff', '#fcfcfc']}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={[styles.button, {
                                padding: 4,
                                paddingHorizontal: 38,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}
                        > */}
                            <Text style={styles.buttonText}>Confirm</Text>
                        {/* </LinearGradient> */}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}