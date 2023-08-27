import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import FactBgImage from '../../assets/images/DailyFact.png'

type FactProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const Fact = ({imageUrl}:FactProps)=>{
  return(
    <View>
      <Image source={imageUrl} style={styles.FactImage} resizeMode={'cover'} />
      
    </View>
  )
}

const DailyFact = () =>{
  return (
    <View style={styles.FactSection}>
      <Fact imageUrl={FactBgImage}/>
      <View style={styles.OverlayedText}>
        <Text style={styles.FactTitle}>Do You Know ?</Text>
        <Text style={styles.FactContent}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsa!</Text>
      </View>
    </View>
  )
}

export default DailyFact

const styles = StyleSheet.create({
  FactSection:{
    marginVertical :10,
  },
  FactImage:{
    width:330,
    height: 220
  },
  OverlayedText : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    width: 300,
    zIndex:100,
    marginHorizontal: 20,
    padding: 10,
  },
  FactTitle:{
    color: '#FFFFFF',
    fontSize: 22
  },
  FactContent:{
    marginVertical: 10,
    color: '#FFFFFF',
    fontSize: 18
  }
})