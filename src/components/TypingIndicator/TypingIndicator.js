import React from 'react';
import { View } from 'react-native';
import styles from './TypingIndicator.style';

const TypingIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
};

export default TypingIndicator;
