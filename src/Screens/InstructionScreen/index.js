import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, SectionList } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { getData } from '../../Helper/API_Calling';
import { SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { IconPathVariable } from '../../Helper/IconPathVariable/IconPathVariable';
import { ImagePathVariable } from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';

export const InstructionScreen = ({ route, navigation }) => {

    const dataId = route.params.dataId
    console.log('instruct===', dataId)
    // const instData = data.instruction[0]

    const [vData, setvData] = useState([])
    const [text, setText] = useState([])
    console.log('text===', text.picture1)

    useEffect(() => {
        getDetails()
     }, [])

     const getDetails = async () =>{
        let url = 'http://45.138.27.8:8006/instructions/' + dataId
        getData(url).then(async res => {
            let response = res
            console.log('kitCategory====', response.data.data)
            // setLoding(true)
            setvData([response.data.data])
            setText(response.data.data)
        }).catch(e => {
            let error = e;
            console.log(error)
        })
     }

    return (
        <ImageBackground source={ImagePathVariable.BG}
            style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.compo}>
                    <Text style={styles.instruct}>Instructions</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.container}>
                <View style={styles.card}>
                    <Text style={[styles.text, { fontSize: 18, }]}>{text.title}</Text>
                    <View style={styles.picContainer}>
                        <Image source={{ uri: 'http://45.138.27.8:8006/' + text.picture1 }} 
                        style={{height: 400,
                        width: 400}}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={[styles.text, { fontSize: 15, }]}>{text.short_desc}</Text>
                </View>
                <View style={[styles.card]}>
                    <View style={styles.textContainer}>
                        {/* <Image source={IconPathVariable.Index} style={styles.index} /> */}
                        <Text style={styles.textStyle}>{text.instruction}</Text>
                    </View>
                </View>

                <View style={[styles.card, { marginBottom: 20 }]}>
                    <FlatList
                        data={vData}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginVertical: 10 }}>
                                    <VideoPlayer
                                        video={item.videofile}
                                        autoplay={false}
                                        defaultMuted={true}
                                        videoWidth={1300}
                                        videoHeight={1000}
                                        thumbnail={require('../../assets/images/masks.png')}
                                    />
                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}