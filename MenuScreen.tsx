import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Screen</Text>
      <Button
        title="Go back to WebView"
        onPress={() => navigation.navigate('WebViewScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MenuScreen;
