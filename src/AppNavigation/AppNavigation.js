import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../Screens/LoginScreen';
import { SplashScreen } from '../Screens/SplashScreen';
import { OtpVerify } from '../Screens/OtpVerify';
import { KitDetailScreen } from '../Screens/KitDetailScreen';
import BottomTab from '../Helper/BottomTab';
import { HomeScreen } from '../Screens/TabScreens/HomeScreen';
import { YouTubeScreen } from '../Screens/TabScreens/YouTubeScreen';
import { CircleScreen } from '../Screens/TabScreens/CircleScreen';
import { ProfileScreen } from '../Screens/TabScreens/ProfileScreen';
import { DescriptionScreen } from '../Screens/DescriptionScreen';
import { InstructionScreen } from '../Screens/InstructionScreen';
import { SignUpScreen } from '../Screens/SignUpScreen';
import { Dashboard } from '../Screens/Dashboard';
import { CustomDrawer } from '../Component/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoute() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Otp' component={OtpVerify} options={{ headerShown: false }} />
                <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Dash' component={DrawerRoute} options={{ headerShown: false }} />
                <Stack.Screen name='YouTube' component={YouTubeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Circle' component={CircleScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name='KitDetail' component={KitDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Descriptipon' component={DescriptionScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Instruction' component={InstructionScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;
