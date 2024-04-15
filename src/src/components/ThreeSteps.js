import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import Theme from "../style/Theme"

export default function ThreeSteps({ currentStep }) {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={currentStep > 0 ? StepsCompleted : PendingSteps}>1</Text>
      <Text style={currentStep > 1 ? StepsCompleted : PendingSteps}>2</Text>
      <Text style={currentStep > 2 ? StepsCompleted : PendingSteps}>3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: 162.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  line: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: 1,
    backgroundColor: Theme.colors.secondaryContainer,
  },

  steps: {
    width: 27.4,
    height: 27.4,
    textAlign: 'center',
    fontSize: 12,
    borderRadius: 999,
    lineHeight: 27.4,
  },
});


const StepsCompleted = StyleSheet.compose(
  styles.steps,
  {
    color: '#fff',
    backgroundColor: Theme.colors.primary,
  }
)

const PendingSteps = StyleSheet.compose(
  styles.steps,
  {
    color: Theme.colors.outline,
    backgroundColor: Theme.colors.secondaryContainer,
  }
)

