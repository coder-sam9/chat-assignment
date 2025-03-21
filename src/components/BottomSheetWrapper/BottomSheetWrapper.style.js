import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
      height: '60%',
    },
    header: {
      paddingTop: 10,
    },
    handleContainer: {
      alignItems: 'center',
      paddingVertical: 10,
    },
    handle: {
      width: 40,
      height: 5,
      borderRadius: 3,
      backgroundColor: '#DDD',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    closeButton: {
      padding: 5,
    },
    content: {
      flex: 1,
    }
  });
  export default styles;