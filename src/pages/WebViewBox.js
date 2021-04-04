import React from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

// 配置h5页面的地址
const H5_URL = 'http://localhost:6868/#/';

// Dimensions 用于获取设备宽、高、分辨率
const {width, height} = Dimensions.get('window');

const myApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={{width: width, height: height}}
        scrollEnabled="false"
        source={{uri: H5_URL}}
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
