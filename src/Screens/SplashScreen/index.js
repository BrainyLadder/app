import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import { styles } from "./styles";
import { ImagePathVariable } from "../../Helper/ImagePathVariable/ImagePathVariable";

export const SplashScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                resizeMode="cover"
                style={styles.Container}
                source={ImagePathVariable.Splash}
                // source={require('../../assets/images/fade.png')}
                >
            </ImageBackground>
        </View>
    )
}