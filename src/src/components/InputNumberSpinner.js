import { StyleSheet } from 'react-native';
import InputSpinner from 'react-native-input-spinner';

import theme from "../style/Theme"

export default function InputNumberSpinner() {
  return (
    <InputSpinner
      initialValue={1}
      min={1}
      style={styles.container}
      buttonStyle={styles.button}
      inputStyle={styles.input}
      rounded={false}
      buttonTextColor={theme.colors.outlineVariant}
      onChange={(num) => {
        console.log(num);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 124,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },

  button: {
    width: 33,
    backgroundColor: '#fff',
    borderColor: theme.colors.outlineVariant,
    color: theme.colors.outlineVariant,
    borderRadius: 4
  },

  input: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.outlineVariant,
  }
});