// app/screens/ProfileScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Text>Info de perfil bla bla bla</Text>
      <Button
        mode="outlined"
        onPress={() => {
        }}
        style={styles.button}
      >
        Editar Perfil
      </Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  },
});
