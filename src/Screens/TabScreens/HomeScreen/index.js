import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useSelector } from "react-redux";
import { CustomHeader } from "../../../Component/CustomHeader";
import { getData } from "../../../Helper/API_Calling";
import { Colors } from "../../../Helper/Colors";
import { SCREEN_HEIGHT } from "../../../Helper/DeviceDimentions";
import { IconPathVariable } from "../../../Helper/IconPathVariable/IconPathVariable";
import { ImagePathVariable } from "../../../Helper/ImagePathVariable/ImagePathVariable";
import { styles } from "./styles";

export const HomeScreen = ({ route, props, navigation }) => {

    const [loading, setLoding] = useState(false)
    const [daTa, setData] = useState([]);
    // const projectData = useSelector(state => state?.ladder?.projectData)
    // const userId = projectData

    useEffect(() => {
        getDetails();
    }, [])

    const getDetails = async () => {
        const userId = await AsyncStorage.getItem('userId')
        console.log('iddddd====id', userId)
        let url = 'http://45.138.27.8:8006/userdetail/' + userId
        getData(url).then(async res => {
            let response = res
            console.log('responseData====', response.data.data.kit)
            setLoding(true)
            setData(response.data.data.kit)
        }).catch(e => {
            let error = e;
            console.log(error)
        })
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity
            onPress={() => navigation.navigate('KitDetail',
                { categoryId: item.id })}
            style={styles.card}>
            <ImageBackground resizeMode="contain"
                source={ImagePathVariable.Card}
                style={styles.image}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'http://45.138.27.8:8006/' + item.logo_img }} style={styles.kid}
                    // source={ImagePathVariable.KId} style={styles.kid}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={[styles.text, { fontSize: 24, }]}>{item.kit_name}</Text>
                    <Text style={[styles.text, { fontSize: 18, }]}>Age group {item.age_group}</Text>
                    <Text style={[styles.text, { fontSize: 18, }]}>{item.number_of_subcategory} Lessons</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={ImagePathVariable.Header}
                style={styles.header}>
                <TouchableOpacity>
                    <Image source={IconPathVariable.Notification} style={styles.icon} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.textCompo}>
            <Text style={styles.txt}>Lets make the learning fun!</Text>
            </View>
            <View style={styles.subContainer}>
                {
                    loading == false ?
                        <View style={{ justifyContent: 'center', marginTop: 180 }}>
                            <Image source={require('../../../assets/gif/loadder.gif')}
                                style={{ alignSelf: 'center', width: 180, height: 180 }} />
                        </View>
                        :
                        <FlatList
                            style={{ marginBottom: 300 }}
                            showsVerticalScrollIndicator={false}
                            data={daTa}
                            renderItem={renderItem}
                        // keyExtractor={item => item.id.toString()}
                        />
                }
            </View>
        </View>
    )
}