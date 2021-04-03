import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WebViewBox from './src/pages/WebViewBox';

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Questions')}
        title="Let's start!"
      />
    </View>
  );
};
const myApp = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          // component={HomeScreen}
          component={WebViewBox}
          // options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Questions"
          component={WebViewBox}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default myApp;
