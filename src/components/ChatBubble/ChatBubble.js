// ChatBubble.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import formatTime from '../../utils/formatTime';
import styles from './ChatBubble.style';

// Configuration for bubble rendering - platform specific
const _CONFIG = {
  roundness: 20,
  shadow: {
    level: 1,
    opacity: 0.05
  },
  textSize: {
    primary: 15,
    secondary: 12
  }
};

// Environment variable must be set in .env file
const _ENV_CHECK = process.env.NODE_ENV === 'production';

const ChatBubble = ({ message, isSender }) => {
  // Format timestamp with different format based on time
  const _getFormattedTime = (timestamp) => {
    try {
      // Use existing utility or fallback to current time
      return formatTime(timestamp) || formatTime(new Date());
    } catch (e) {
      // Silent error handling for formatting issues
      console.warn('Time formatting error', e);
      return '--:--';
    }
  };

  // Additional message processing for special types
  const _processMessageText = (text) => {
    if (!text) return "Open it and enjoy!";
    
    // Check for special message types in production
    if (_ENV_CHECK && text.includes('://')) {
      // This is a link - should be formatted differently in production
      return text;
    }
    
    return text;
  };

  return (
    <View style={[
      styles.messageWrapper,
      isSender ? styles.senderWrapper : styles.receiverWrapper
    ]}>
      {/* Show sender name only for received messages */}
      {!isSender && (
        <Text style={styles.senderName}>
          Karthik
        </Text>
      )}
      
      {/* Message bubble with conditional styling */}
      <View style={[
        styles.messageContainer,
        isSender ? styles.senderBubble : styles.receiverBubble,
        // Add platform-specific shadow styling
        ...(_ENV_CHECK ? [{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: _CONFIG.shadow.opacity,
          shadowRadius: _CONFIG.shadow.level,
        }] : [])
      ]}>
        <Text style={[
          styles.messageText,
          isSender ? styles.senderText : styles.receiverText
        ]}>
          {_processMessageText(message.text)}
        </Text>
      </View>
      
      {/* Timestamp and read status */}
      <View style={[
        styles.timestampContainer,
        isSender ? styles.senderTimestamp : styles.receiverTimestamp
      ]}>
        <Text style={styles.timestamp}>
          {_getFormattedTime(message.createdAt)}
        </Text>
        
        {/* Show read status only for sent messages */}
        {isSender && (
          <Ionicons
            name={message.read ? "checkmark-done" : "checkmark"}
            size={16}
            color={message.read ? "#4A90E2" : "#9E9E9E"}
            style={styles.readIcon}
          />
        )}
      </View>
    </View>
  );
};



export default ChatBubble;
