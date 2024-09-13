import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Mock data
const mockData = {
  loadPerTyreEmpty: 9000,  // in kg
  loadPerTyreLoaded: 15000, // in kg
  rotationHoursPerDay: 8,  // in hours
  cyclesPerDay: 15,        // number of cycles
  distancePerCycle: 14,    // distance per cycle in km
};

// Function to calculate TKPH
const calculateTKPH = (data: typeof mockData) => {
  const meanTyreLoad = (data.loadPerTyreEmpty + data.loadPerTyreLoaded) / 2;
  const averageWorkShiftSpeed = (data.distancePerCycle * data.cyclesPerDay) / data.rotationHoursPerDay;
  const tkph = averageWorkShiftSpeed * (meanTyreLoad / 1000); // Convert kg to tons for TKPH calculation
  return tkph.toFixed(2); // Return the TKPH rounded to 2 decimal places
};

const TkphScreen: React.FC = () => {
  const tkph = calculateTKPH(mockData);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TKPH Calculation</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Load per Tyre (Empty Vehicle):</Text>
        <Text style={styles.value}>{mockData.loadPerTyreEmpty} kg</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Load per Tyre (Loaded Vehicle):</Text>
        <Text style={styles.value}>{mockData.loadPerTyreLoaded} kg</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Rotation Hours per Day:</Text>
        <Text style={styles.value}>{mockData.rotationHoursPerDay} hours</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Number of Cycles per Day:</Text>
        <Text style={styles.value}>{mockData.cyclesPerDay}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Distance per Cycle:</Text>
        <Text style={styles.value}>{mockData.distancePerCycle} km</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>TKPH: {tkph}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  label: {
    fontSize: 18,
    color: '#cccccc',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default TkphScreen;
