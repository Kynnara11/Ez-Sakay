import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#FF7F00', '#FF8800']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.logoContainer}>
        {/* Replace with your actual logo */}
        <Image
          source={require('./assets/Buslogo.png')} 
          style={styles.logo}
        />
        <Text style={styles.appName}>EZ - SAKAY</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome, Byahero!</Text>
        <Text style={styles.subText}>Your travels made easy</Text>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>JOIN OUR COMMUNITY NOW!</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  content: {
    marginTop: 60,
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 40,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF7F00',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
  },
  createButton: {
    backgroundColor: '#FF7F00',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#FF7F00',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 25,
  },
  loginButtonText: {
    color: '#FF7F00',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#888',
  },
});
