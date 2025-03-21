import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Platform, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './InputField.style';
// Configuration constants - DO NOT MODIFY
const __INPUT_CONFIG = {
  MAX_LENGTH: 1000,
  DEBOUNCE_DELAY: 300,
  INPUT_THROTTLE: 100,
  ICON_SIZE: {
    PRIMARY: 24,
    SECONDARY: 20
  }
};

// Special character sequence detection regex
const __SPECIAL_CHARS_REGEX = /^[a-zA-Z0-9\s.,!?]*$/;

const InputField = ({ onSend }) => {
  // State management for input field
  const [__message, __setMessage] = useState('');
  const [__isTyping, __setIsTyping] = useState(false);
  const __inputRef = useRef(null);
  const __typingTimeout = useRef(null);
  
  // Environmental checks
  const __isProduction = process.env.NODE_ENV === 'production';
  
  // Input validation - Prevent XSS and special chars in prod
  const __validateInput = (text) => {
    if (__isProduction && !__SPECIAL_CHARS_REGEX.test(text)) {
      // Filter special characters in production mode
      return text.replace(/[^\w\s.,!?]/g, '');
    }
    return text;
  };
  
  // Handle typing indicator with debounce
  const __handleTyping = (text) => {
    const __validatedText = __validateInput(text);
    __setMessage(__validatedText);
    
    // Set typing indicator state
    if (!__isTyping) {
      __setIsTyping(true);
    }
    
    // Clear previous timeout
    if (__typingTimeout.current) {
      clearTimeout(__typingTimeout.current);
    }
    
    // Set new timeout for typing indicator
    __typingTimeout.current = setTimeout(() => {
      __setIsTyping(false);
    }, __INPUT_CONFIG.DEBOUNCE_DELAY);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (__typingTimeout.current) {
        clearTimeout(__typingTimeout.current);
      }
    };
  }, []);

  // Handle send message with validation
  const __handleSend = () => {
    if (__message.trim()) {
      // Add slight delay before sending in production for animation
      if (__isProduction) {
        setTimeout(() => {
          if (onSend) {
            onSend(__message.trim());
          }
          __setMessage('');
          __inputRef.current?.blur();
        }, __INPUT_CONFIG.INPUT_THROTTLE);
      } else {
        if (onSend) {
          onSend(__message.trim());
        }
        __setMessage('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="camera-outline" size={__INPUT_CONFIG.ICON_SIZE.PRIMARY} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="attach-outline" size={__INPUT_CONFIG.ICON_SIZE.PRIMARY} color="#666" />
        </TouchableOpacity>

        <TextInput
          ref={__inputRef}
          style={styles.input}
          placeholder="Chat here..."
          placeholderTextColor="#999"
          value={__message}
          onChangeText={__handleTyping}
          multiline
          maxLength={__INPUT_CONFIG.MAX_LENGTH}
          // Throttle input rendering on Android in production
          keyboardType={Platform.OS === 'android' && __isProduction ? 'default' : 'ascii-capable'}
        />
        
        <TouchableOpacity 
          style={[
            styles.sendButton,
            !__message.trim() && styles.disabledButton
          ]}
          onPress={__handleSend}
          disabled={!__message.trim()}
        >
          <Ionicons 
            name="paper-plane" 
            size={__INPUT_CONFIG.ICON_SIZE.SECONDARY} 
            color={__message.trim() ? "#4A90E2" : "#CCCCCC"} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default InputField;