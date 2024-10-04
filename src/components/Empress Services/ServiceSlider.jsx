import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'

const images = [
    'https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg',
    'https://static.toiimg.com/photo/80387978.cms',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGN76LWidljvte9EbJPLgp4IfbIg0TXkYqg&s',
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function ServiceSlider() {
  const [imgActive, setImgActive] = useState(0);
  const scrollViewRef = useRef(null);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  const handleDotPress = (index) => {
    setImgActive(index);
    scrollViewRef.current.scrollTo({ x: WIDTH * index, animated: true });
  };

  return (
    <View>
     
      <View style={styles.imageContainer}>
      <Text style={styles.textHead}>Top Services</Text>
        <ScrollView
          ref={scrollViewRef}
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={index}
              resizeMode='stretch'
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>

        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
              <Text style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25
  },
  imageContainer:{
padding:17,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'white',
    fontSize: 16,
  },
  dot: {
    margin: 3,
    color: 'gray',
    fontSize: 16,
  },
  textHead: {
    color: '#ffffff',
    fontSize: 20,            
    fontFamily: 'Source Sans Pro',
    fontWeight: '700',       
    lineHeight: 26,   
    padding:2       
}

})
