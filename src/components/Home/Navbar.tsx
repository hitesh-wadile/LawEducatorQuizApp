
import React from 'react'

import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import type { PropsWithChildren } from 'react';
import QuizLogo from '../../assets/images/Logo.png'
import Ionicons from 'react-native-vector-icons/Ionicons';

type LogoProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>;

const Logo = ({ imageUrl }: LogoProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.LogoImage} source={imageUrl} />
        </View>
    )
}

export default function Navbar() {
    return (
        <View >
            <StatusBar
                backgroundColor={"#FFFFFF"}
                barStyle={'dark-content'} />
            <View style={styles.navBar}>
                <View style={styles.navBarRight}>
                    <Logo imageUrl={QuizLogo} />
                    <Text style={styles.navTitle}>Quizy</Text>
                </View>
                <View style={styles.navBarLeft}>
                    <Ionicons style={styles.navIcons} name="search" size={25} color="#000000" />
                    <Ionicons style={styles.navIcons} name="notifications-outline" size={25} color="#000000" />
                </View>
            </View>
        </View>
  )
}



const styles = StyleSheet.create({
    
   
    LogoImage: {
        width: 50,
        height: 50
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navTitle: {
        fontSize: 20,
        color: '#000000'
    },
    navBarRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    navBarLeft: {
        margin: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    navIcons: {
        marginHorizontal: 7
    }
});