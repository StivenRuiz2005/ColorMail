import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraType, setCameraType] = useState('back');

  if (!permission) {
    return <View><Text>Requesting for camera permission...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No access to camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  const toggleCameraType = () => {
    setCameraType(current => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={cameraType}
      >
        <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
          <Text style={styles.buttonText}>Flip Camera</Text>
        </TouchableOpacity>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  }
});