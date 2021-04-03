/**
 * @Author: brady
 * @Date: 2019-07-31
 * @Last Created time: 20:24:26
 * @Description:
 */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

// Dimensions 用于获取设备宽、高、分辨率
const {width, height} = Dimensions.get('window');

const myApp = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={{width: width, height: height}}
        source={{uri: 'http://192.168.1.62:6868/#/'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default myApp;
