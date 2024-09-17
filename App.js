import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import WebViewScreen from './WebViewScreen';
import MenuScreen from './MenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* WebViewScreen이 첫 화면으로 나옴 */}
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={({ navigation }) => ({
            title: 'Web View',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('MenuScreen')}
                title="Menu"
                color="#000"
              />
            ),
          })}
        />
        {/* MenuScreen으로 이동 가능 */}
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{ title: 'Menu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
