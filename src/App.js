import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Provider,
  MD3LightTheme,
  Text,
  Button,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import { scheduleDailyNotification } from './src/services/NotificationService';
import Routes from './src/routes';
import { RegisterPlantProvider } from './src/contexts/RegisterPlantContext';

import Theme from './src/style/Theme';

const theme = Theme;

const App = () => {
  useEffect(() => {
    const userId = '1'; // Substitua pelo ID do usuário logado
    scheduleDailyNotification(userId);
    // Solicitar permissão para notificações
    Notifications.requestPermissionsAsync();
  }, []);

  return (
    <Provider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <RegisterPlantProvider>
          <Routes />
        </RegisterPlantProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
