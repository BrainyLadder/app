import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { getData } from '../../Helper/API_Calling';
import { IconPathVariable } from '../../Helper/IconPathVariable/IconPathVariable';
import { styles } from './styles';

export const DescriptionScreen = ({ route, navigation }) => {

    const lessonId = route.params.lessionId
    console.log('lesson===', lessonId)
    const [DATA, setData] = useState([])
    const [text, setText] = useState([])
    console.log('text===', text.short_desc)

    useEffect(() => {
        getDetails()
     }, [])

     const getDetails = async () =>{
        let url = 'http://45.138.27.8:8006/subcategorydetail/' + lessonId
        getData(url).then(async res => {
            let response = res
            console.log('kitCategory====', response.data.data)
            // setLoding(true)
            setData([response.data.data])
            setText(response.data.data)
        }).catch(e => {
            let error = e;
            console.log(error)
        })
     }

    const handleNavigation = (item) => {
        navigation.navigate('Instruction', {dataId: item.id})
    }

    const renderItem = ({ item }) => (
        <View>
            <ImageBackground borderRadius={50}
                source={require('../../assets/images/art.png')}
                style={styles.tile}>
                <View style={[styles.circle, {
                    height: 115,
                    width: 115
                }]}>
                    <View style={[styles.circle, {
                        height: 90,
                        width: 90,
                        elevation: 10
                    }]}>
                        <Image source={{uri: 'http://45.138.27.8:8006/' + item.picture}}
                            style={styles.image} />
                    </View>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity onPress={() => handleNavigation(item)}
                        style={styles.button}>
                        <Text style={[styles.buttonText]}>{item.subcategory_name}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.compo}>
                <Text style={styles.lession}>Lessons</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {text.short_desc}
                </Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: 40 }}
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}