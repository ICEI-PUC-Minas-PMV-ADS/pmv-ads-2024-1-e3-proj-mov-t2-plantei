import { StyleSheet } from 'react-native';
import InputSpinner from 'react-native-input-spinner';

import Theme from "../style/Theme"

export default function InputNumberSpinner({ value, onChangeValue }) {
  return (
    <InputSpinner
      value={value}
      min={1}
      style={styles.container}
      buttonStyle={styles.button}
      inputStyle={styles.input}
      rounded={false}
      buttonTextColor={Theme.colors.outlineVariant}
      onChange={(number) => {
        onChangeValue(number);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 124,
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
  },

  button: {
    width: 33,
    backgroundColor: Theme.colors.background,
    borderColor: Theme.colors.outlineVariant,
    color: Theme.colors.outlineVariant,
    borderRadius: 4
  },

  input: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Theme.colors.outlineVariant,
  }
});