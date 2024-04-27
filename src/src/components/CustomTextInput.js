import { StyleSheet, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { Text, TextInput } from 'react-native-paper';

import Theme from '../style/Theme';

export default function CustomTextInput({
  name,
  placeholder,
  control,
  errors,
  multiline,
  secureTextEntry,
  style
}) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            mode="outlined"
            multiline={multiline}
            secureTextEntry={secureTextEntry}
            style={[multiline ? styles.inputMultiline : styles.input, style]}
            outlineStyle={multiline ? styles.inputMultiline : styles.input}
            placeholderTextColor={Theme.colors.outline}
          />
        )}
      />
      {errors[name] && <Text style={styles.error}>{errors[name]?.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 4,
    borderColor: Theme.colors.outlineVariant,
    borderRadius: 4,
  },

  inputMultiline: {
    height: 140,
    borderColor: Theme.colors.outlineVariant,
    borderRadius: 4
  },

  error: {
    marginTop: 4,
    marginLeft: 16,
    color: Theme.colors.error,
  }
});