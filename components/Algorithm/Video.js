import * as React from 'react';
import { View, Text, Button, StyleSheet,StatusBar,FlatList } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

function Video({link}){
  return(
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={false}
        videoId={link}
      />
    </View>
  );
}
export default Video;
const styles = StyleSheet.create({
container: {
  flex:1,
  justifyContent: 'center',
},
})
