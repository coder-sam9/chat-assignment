import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({ route, navigation })=> {
  const { setIsLoggedIn } = route.params;

  const handleLogin = () => {
    // Simulate a successful login
    // setIsLoggedIn(true);
    navigation.navigate('Chat')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})