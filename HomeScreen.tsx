import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icon from vector icons

// Define the types for navigation props if using TypeScript
interface HomeScreenProps {
  navigation: any; // Adjust according to your navigation type
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      {/* TPMS Option */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TKPH')} // Navigate to LiveData screen
      >
      <Icon name="car-tire-alert" size={80} color="#00E676" />
      <Text style={styles.buttonText}>TKPH</Text>
      </TouchableOpacity>

      {/* Pressure Option */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LiveData')} // Navigate to LiveData screen
      >
        <Icon name="gauge" size={80} color="#FFEB3B" />
        <Text style={styles.buttonText}>Pressure</Text>
      </TouchableOpacity>

      {/* Analysis Option */}
      <TouchableOpacity style={styles.button}>
        <Icon name="chart-line" size={80} color="#F44336" />
        <Text style={styles.buttonText}>Analysis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#121212', // Dark background color
  },
  button: {
    width: 250, // Increased width for symmetry
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: '#1E1E1E', // Dark button background
    borderRadius: 10, // Rounded corners
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 5 }, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 10, // iOS shadow blur radius
  },
  buttonText: {
    marginTop: 10, // Space between icon and text
    fontSize: 24, // Larger font size for better visibility
    color: '#FFFFFF', // White text color for dark theme
    fontWeight: 'bold',
  },
});

export default HomeScreen;
