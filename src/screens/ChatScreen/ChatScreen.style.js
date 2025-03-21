import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  meetingSummaryContainer: {
    marginTop: '10%',
  },
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  chatContainer: {
    backgroundColor: 'white',
  },
  chatMessagesContainer: {
    padding: 8,
    paddingBottom: 16,
  },
  sheetcontainer: {
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

export default styles;
