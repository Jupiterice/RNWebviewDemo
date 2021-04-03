import React from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

// Dimensions 用于获取设备宽、高、分辨率
const {width, height} = Dimensions.get('window');

const myApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={{width: width, height: height}}
        source={{uri: 'http://192.168.1.62:6868/#/'}}
        // scalesPageToFit={Platform.OS === 'ios' ? true : false}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  webview: {
    width: width,
    height: height,
  },
});

export default myApp;
