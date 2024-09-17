import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://live-healthy-die-healthy.github.io/FrontEnd/' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default WebViewScreen;
