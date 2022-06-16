import React, { useRef, useEffect, useId } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconPathVariable } from '../IconPathVariable/IconPathVariable';
import { HomeScreen } from '../../Screens/TabScreens/HomeScreen';
import { CircleScreen } from '../../Screens/TabScreens/CircleScreen';
import { ProfileScreen } from '../../Screens/TabScreens/ProfileScreen';
import { YouTubeScreen } from '../../Screens/TabScreens/YouTubeScreen';
import { FontFamily } from '../FontFamily';
import { Colors } from '../Colors';

const Tab = createBottomTabNavigator();

// colorscode  #ed5aa4, #f7c25b, 

const TabArr = [
    {
        route: 'Home',
        label: 'Home',
        activeIcon: IconPathVariable.Home,
        inactiveIcon: IconPathVariable.Hom,
        // activeIcon: IconPathVariable.House,
        // inactiveIcon: IconPathVariable.House,
        component: HomeScreen,
        borderColor: '#f7c25b'
    },
    {
        route: 'Circle',
        label: 'Circle',
        activeIcon: IconPathVariable.Forum1,
        inactiveIcon: IconPathVariable.Forum,
        // activeIcon: IconPathVariable.Chat,
        // inactiveIcon: IconPathVariable.Chat,
        component: CircleScreen,
        borderColor: '#33cef4'
    },
    {
        route: 'YouTube',
        label: 'YouTube',
        // activeIcon: IconPathVariable.Video,
        // inactiveIcon: IconPathVariable.Video,
        activeIcon: IconPathVariable.Youtube,
        inactiveIcon: IconPathVariable.Youtub,
        component: YouTubeScreen,
        borderColor:'#d00404'
    },
    {
        route: 'Profile',
        label: 'Profile',
        // activeIcon: IconPathVariable.User,
        // inactiveIcon: IconPathVariable.User,
        activeIcon: IconPathVariable.Profile,
        inactiveIcon: IconPathVariable.Profil,
        component: ProfileScreen,
        borderColor:'#ed5aa4'
    },
]

const TabButton = (props) => {

    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;

    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    const animate1 = { 0: { scale: .5, translateY: 8 }, .92: {translateY: -34}, 1: { scale: 1.2, translateY: -18 } }
    const animate2 = { 0: { scale: 1.2, translateY: -18 }, 1: { scale: 1, translateY: 8 } }

    const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
    const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused])

    return (
        <TouchableOpacity onPress={onPress}
            style={styles.container}
            activeOpacity={1}
            >
            <Animatable.View 
            style={styles.container}
                ref={viewRef}
                duration={500}
            >
                <View 
                style={[focused ? styles.btn : styles.btn1, 
                    // {borderColor : focused? '#7fd3d4' : null}
                ]}
                // style={focused ? }
                >
                    <Animatable.View ref={circleRef}
                        style={{ ...StyleSheet.absoluteFillObject, 
                        backgroundColor: '#fff', borderRadius: 25 }} />
                    <Image source={focused ? item.activeIcon : item.inactiveIcon}
                        resizeMode='contain'
                        style={{
                            width: 42,
                            height: 42                            // width: focused ? 150 : 360,
                            // height: focused ? 150 : 360,
                            // tintColor: focused ? 'yellow' : 'red'
                        }}
                    />
                </View>
                <Animatable.Text
                    ref={textRef}
                    style={[styles.text, {marginTop : focused ? 10 : 0}]}
                >
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}

function BottomTab({route}) {

// const userId = route.params.userId;
// console.log('userrrrr', userId)

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 64,
                    borderRadius: 15,
                    position: 'absolute',
                    bottom: 6,
                    left: 16,
                    right: 16,
                    backgroundColor: '#fff'

                    // height: 70,
                    // borderTopRightRadius: 30,
                    // borderTopLeftRadius: 30,
                    // position: 'absolute',
                    // bottom: 0,
                    // backgroundColor: '#fff',
                    // elevation: 10,
                    // shadowColor: '#000',
                    // shadowOffset: { width: 0, height: 10 },
                    // shadowOpacity: 0.12,
                    // shadowRadius: 3,
                }
            }}>
            {
                TabArr.map((item) => {
                    return (

                        <Tab.Screen 
                         name={item.route} component={item.component}
                            options={{
                                tabBarLabel: item.label,
                                tabBarIcon: ({ color, focused }) =>
                                (
                                    <View>
                                        <Image source={focused ? item.activeIcon : item.inactiveIcon}
                                            resizeMode='contain'
                                            style={{
                                                width: 24,
                                                height: 24,
                                                tintColor: focused ? 'red' : 'black'
                                            }} />
                                    </View>
                                ),
                                tabBarButton: (props) => <TabButton {...props} item={item} />
                            }}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}
export default BottomTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -2,
        // backgroundColor:'red'
    },
    btn: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#7fd3d4',
        backgroundColor: '#7fd3d4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn1: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontFamily: FontFamily.bold,
        lineHeight: 13,
        color: Colors.Black,
        // marginTop: 10
    }
})