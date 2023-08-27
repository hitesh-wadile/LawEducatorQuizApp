/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
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

import QuizLogo from '../assets/images/Logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';

type LogoProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>;

const Logo = ({ imageUrl }: LogoProps): JSX.Element => {
  return(
    <View>
      <Image style={styles.LogoImage} source={imageUrl} /> 
    </View>
  )
}

const MyIcon = ()=>{
return(
<Icon name="search" size={30} color="#900" />
)};

function App(): JSX.Element {

  

  return (
    <SafeAreaView style={styles.homeBackgroundColor}>
      <ScrollView>
        <View style={styles.homeContainer}>
          <StatusBar
            backgroundColor={"#FFFFFF"}
            barStyle={'dark-content'} />
          <View style={styles.navBar}>
            <View>
              <Logo imageUrl={QuizLogo}/>
            </View>
            <View>
              <Icon name="ios-person" size={30} color="#900" />
              <Text>Hi there</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeBackgroundColor: {
    backgroundColor: "#FFFFFF"
  },
  homeContainer:{
    marginVertical:15,
    marginHorizontal: 15
  },
  LogoImage:{
    width:40,
    height:40
  },
  navBar : {
    display: 'flex',
    flexDirection: 'row',
    alignItems : 'center'
  }
});

export default App;
