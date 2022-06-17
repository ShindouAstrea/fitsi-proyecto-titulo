import * as React from 'react';
import { View, Text, Button, StyleSheet,StatusBar,FlatList } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Data from './Data' ;


export default function Videos() {
  const link = JSON.stringify(Data[1]["Video"]) ;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState();
    return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: JSON.stringify({link}),
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </View>
    );
  }