// app/screens/SettingsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch } from 'react-native-paper';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
      <View style={styles.settingItem}>
        <Text>Modo Oscuro</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
