// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import ChatScreen from './src/screens/ChatScreen/ChatScreen';
import { AuthProvider } from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate checking login state on app startup
  useEffect(() => {
    setTimeout(() => {
      // Simulate async check (e.g., fetching auth token from storage)
      setIsLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{ setIsLoggedIn }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            initialParams={{ setIsLoggedIn }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});