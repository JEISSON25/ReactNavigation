import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    await logOut(); // Al cerrar sesión, 'user' se vuelve null y AppNavigator mostrará AuthNavigator (Login).
    
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>¡Bienvenido(a) al Home!</Text>
      <Button mode="contained" onPress={handleLogout}>
        Cerrar Sesión
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
