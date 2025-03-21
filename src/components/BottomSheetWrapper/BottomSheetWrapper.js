import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';

const BottomSheetWrapper = ({ children, title, showMore, onSnapPointChange }) => {
  // Ref for the bottom sheet
  const bottomSheetRef = useRef(null);
  const [showCross,setShowCross]=useState(false);
  useEffect(()=>{
    if (showMore) {
      bottomSheetRef.current?.snapToIndex(0)
    }
  },[showMore])


  // Snap points for the bottom sheet (percentage of screen)
  const snapPoints = useMemo(() => ['35%','40%', '55%', '85%'], []);

  // Callback when the sheet changes its position
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if (index==0) {
      setShowCross(false)
    }else{

      setShowCross(true);
    }
    onSnapPointChange?.(index);
  }, [onSnapPointChange]);

  // Handle closing/minimizing the bottom sheet
  const handleClose = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1} // Initial snap point index
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={false}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              {showCross && <Ionicons name="close" size={30} color="grey" />}
            </TouchableOpacity>
            <Text style={styles.title}>{!showCross?'Chat(20)' : "Meeting Title"}</Text>
            <View style={styles.spacer} />
          </View>

          
          {children}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  sheetBackground: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleIndicator: {
    backgroundColor: '#CCCCCC',
    width: 50,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  spacer: {
    width: 30,
  },
});

export default BottomSheetWrapper;
