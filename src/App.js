import * as React from 'react';
import {
  ActivityIndicator,
  Provider,
  MD3LightTheme,
  Text,
  Button,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { RegisterPlantProvider } from './src/contexts/RegisterPlantContext';

import Theme from './src/style/Theme';

const theme = Theme;

const App = () => (
  <Provider theme={theme}>
    <SafeAreaView style={{ flex: 1 }}>
      <RegisterPlantProvider>
        <Routes />
      </RegisterPlantProvider>
    </SafeAreaView>
  </Provider>
);

export default App;
