import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    messageWrapper: {
      marginVertical: 4,
      paddingHorizontal: 16,
      maxWidth: '80%',
    },
    senderWrapper: {
      alignSelf: 'flex-end',
    },
    receiverWrapper: {
      alignSelf: 'flex-start',
    },
    messageContainer: {
      padding: 12,
      borderRadius: _CONFIG.roundness,
    },
    senderBubble: {
      backgroundColor: '#E3F2FD',
    },
    receiverBubble: {
      backgroundColor: '#F5F5F5',
    },
    senderName: {
      fontSize: _CONFIG.textSize.primary,
      fontWeight: '500',
      color: '#424242',
      marginBottom: 4,
      marginLeft: 2,
    },
    messageText: {
      fontSize: _CONFIG.textSize.primary,
      lineHeight: _CONFIG.textSize.primary * 1.33,
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
    },
    senderTimestamp: {
      justifyContent: 'flex-end',
    },
    receiverTimestamp: {
      justifyContent: 'flex-start',
    },
    timestamp: {
      fontSize: _CONFIG.textSize.secondary,
      color: '#9E9E9E',
      marginRight: 4,
    },
    readIcon: {
      marginBottom: -2,
    }
  });
  export default styles;