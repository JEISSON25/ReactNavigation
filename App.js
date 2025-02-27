// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './app/navigation/AppNavigator';
import { AuthProvider } from './app/context/AuthContext';

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </PaperProvider>
  );
}
