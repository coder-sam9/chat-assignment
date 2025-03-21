import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './LoginScreen.style';

const LoginScreen = ({ route, navigation }) => {
  const { setIsLoggedIn } = route.params;

  const handleLogin = () => {
    navigation.navigate('Chat');
  };

  return (
    <LinearGradient colors={['#f7f9fc', '#e6f0fb']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.icon}
            onError={(e) => console.log('Image not found, please add a chat-icon.png to assets folder')}
          />
        </View>
        <Text style={styles.title}>Welcome to ClassChat</Text>
        <Text style={styles.subtitle}>Join anonymously and chat in real-time.</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;