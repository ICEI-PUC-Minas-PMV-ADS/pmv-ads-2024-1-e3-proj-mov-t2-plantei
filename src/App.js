import * as React from 'react';
import {
  ActivityIndicator,
  Provider,
  MD3LightTheme,
  Text,
  Button,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from './src/pages/Welcome';
import DefinePlantName from './src/pages/DefinePlantName';

import Theme from './src/style/Theme';

const theme = Theme;

const App = () => (
  <Provider theme={theme}>
    <SafeAreaView style={{ flex: 1 }}>
      <DefinePlantName />
    </SafeAreaView>
  </Provider>
);

export default App;