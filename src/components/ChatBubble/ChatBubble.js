// ChatBubble.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import formatTime from '../../utils/formatTime';

const ChatBubble = ({ message, isSender }) => {
  return (
    <View style={[
      styles.messageWrapper,
      isSender ? styles.senderWrapper : styles.receiverWrapper,
      isSender ? styles.senderBubble : styles.receiverBubble
    ]}>
      {!isSender && (
        <Text style={styles.senderName}>
          {message.senderName}
        </Text>
      )}
      <View style={[
        // styles.messageContainer,
        // isSender ? styles.senderBubble : styles.receiverBubble
      ]}>
        <Text style={[
          styles.messageText,
          isSender ? styles.senderText : styles.receiverText
        ]}>
          {message.text || "Open it and enjoy!"}
        </Text>
      </View>
      <View style={[
        styles.timestampContainer,
        // isSender ? styles.senderTimestamp : styles.receiverTimestamp
      ]}>
        <Text style={styles.timestamp}>
          {formatTime(message.createdAt)}
        </Text>{isSender && (
  message.read ? (
    <Ionicons
      name="checkmark-done"
      size={16}
      color="#4A90E2"
      style={styles.readIcon}
    />
  ) : (
    <Ionicons
      name="checkmark-done"
      size={16}
      color="grey"
      style={styles.readIcon}
    />
  )
)}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageWrapper: {
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal:8,
    maxWidth: '80%',
    borderRadius:12
  },
  senderWrapper: {
    alignSelf: 'flex-end',
  },
  receiverWrapper: {
    alignSelf: 'flex-start',
  },
  messageContainer: {
    padding: 12,
    borderRadius: 20,
  },
  senderBubble: {
    backgroundColor: '#E3F2FD',
  },
  receiverBubble: {
    backgroundColor: '#F5F5F5',
  },
  senderName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#424242',
    marginBottom: 4,
    marginLeft: 2,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  senderText: {
    color: '#424242',
  },
  receiverText: {
    color: '#424242',
  },
  timestampContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    justifyContent: 'flex-end',
  },
  // senderTimestamp: {
  //   justifyContent: 'flex-end',
  // },
  // receiverTimestamp: {
  //   justifyContent: 'flex-end',
  // },
  timestamp: {
    fontSize: 12,
    color: '#9E9E9E',
    marginRight: 4,
  },
  readIcon: {
    marginBottom: -2,
  }
});

export default ChatBubble;
