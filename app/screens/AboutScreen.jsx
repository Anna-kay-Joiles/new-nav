import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
 
const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();
 
  return (
<MainLayout>
<View style={styles.container}>
<Text style={styles.title}>My To-Do List App</Text>
<Text style={styles.details}>Created by [Your Name]</Text>
<Text style={styles.details}>Current Date: {currentDate}</Text>
</View>
</MainLayout>
  );
};
 
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginVertical: 10,
  },
});
 
export default AboutScreen;