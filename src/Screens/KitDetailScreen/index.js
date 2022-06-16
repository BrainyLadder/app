import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconPathVariable } from '../../Helper/IconPathVariable/IconPathVariable';
import { ImagePathVariable } from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';
import { getData } from '../../Helper/API_Calling';

export const KitDetailScreen = ({ route, navigation }) => {

    const [query, setQuery] = useState('');
    const categoryId = route.params.categoryId
    console.log('category=====', categoryId)

    const [arr, setArr] = useState([])

    useEffect(() => {
        getDetails()
     }, [])

     const getDetails = async() =>{
        let url = 'http://45.138.27.8:8006/kitcategorydetail/' + categoryId
        getData(url).then(async res => {
            let response = res
            console.log('kitCategory====', response.data.data)
            // setLoding(true)
            setArr([response.data.data])
        }).catch(e => {
            let error = e;
            console.log(error)
        })
     }

    const handleSearchItem = async q => {
        //   console.log('query===',q)
        try {
            const jsonValue = JSON.stringify(arr)
            await AsyncStorage.setItem('dataKey', jsonValue)
            const data = JSON.parse(await AsyncStorage.getItem('dataKey'));
            console.log(data)
            const items = data.filter(item => {
                const i = item.name.toUpperCase(); const text = q.toUpperCase();
                return i.indexOf(text) > -1;
            })
            setArr(items);
            setQuery(q);
        } catch (error) {
            console.log('error===', error)
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Descriptipon', { lessionId: item.id })}
            style={styles.card}>
            <ImageBackground resizeMode='contain'
                source={ImagePathVariable.Tile}
                style={styles.image}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'http://45.138.27.8:8006/' + item.logo_img }} style={styles.cateGory} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <ImageBackground resizeMode='cover'
            source={ImagePathVariable.Header1}
            style={styles.mainContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.box}>
                <Image source={IconPathVariable.Left} style={styles.back} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.subContainer}>
                <View style={{ marginBottom: 10 }}>
                    <LinearGradient colors={['#e5e5e5', '#fcfcfc']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder='Search category'
                            onChangeText={(text) => setQuery(text)}
                            value={query}
                        />
                        <TouchableOpacity
                            onPress={() => handleSearchItem(query)}>
                            <Image source={IconPathVariable.Search} style={styles.icon} />
                        </TouchableOpacity>
                    </LinearGradient >
                    <View style={styles.container}>
                        <FlatList
                            numColumns={2}
                            data={arr}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}