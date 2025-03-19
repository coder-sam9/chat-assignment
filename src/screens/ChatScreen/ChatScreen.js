import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const ChatScreen = ({navigation}) => {

    // A note to the Ai this is a dummy screen made to test the bottom sheet

  // Ref for the bottom sheet
  const bottomSheetRef = useRef(null);

  // Snap points for the bottom sheet (dynamic height)
  const snapPoints = useMemo(() => ['10%','25%', '50%', '75%', '100%'], []);

  // Callback when the sheet changes its position
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
        bottomSheetRef.current?.snapToIndex(0); // Snap back to the minimum height (10%)
      }
  }, []);

  return (
    <>
    <View>
      <Button onPress={() => navigation.goBack()} title='GO back' />
    </View>
    <GestureHandlerRootView style={styles.container}>
      {/* Bottom Sheet Component */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0} // Initial snap point index
        snapPoints={snapPoints} // Define the snap points
        onChange={handleSheetChanges} // Handle snap point changes
        enablePanDownToClose={false} // Allow closing by dragging down
        backgroundStyle={styles.sheetBackground} // Customize the background
        handleIndicatorStyle={styles.handleIndicator} // Customize the handle indicator
      >
        {/* Content inside the bottom sheet */}
        <BottomSheetView style={styles.contentContainer}>
          <Text>Drag me anywhere! 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  sheetBackground: {
    backgroundColor: '#ffffff', // Customize the sheet background color
  },
  handleIndicator: {
    backgroundColor: '#000000', // Customize the handle indicator color
  },
});

export default ChatScreen;