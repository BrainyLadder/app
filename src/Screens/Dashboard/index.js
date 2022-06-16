import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import { IconPathVariable } from '../../Helper/IconPathVariable/IconPathVariable';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_HEIGHT } from '../../Helper/DeviceDimentions';
import { Colors } from '../../Helper/Colors';
import { ImagePathVariable } from '../../Helper/ImagePathVariable/ImagePathVariable';

export const Dashboard = ({ navigation }) => {

    const Data = [
        { id: 0, image: ImagePathVariable.card, title: 'Blogs' },
        { id: 1, image: ImagePathVariable.card, title: 'BL Society' },
        { id: 3, image: ImagePathVariable.card, title: 'DIY Activity' },
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <ImageBackground source={item.image} style={styles.image}>
                    <Text style={styles.txt}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={IconPathVariable.Menu}
                        style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Brainy Ladder</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient colors={['#ffffff', '#D6E4F7']} style={[styles.card]}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Shop Now</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={Data}
                        renderItem={renderItem}
                    />

                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomText}>Advertizing Content</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}