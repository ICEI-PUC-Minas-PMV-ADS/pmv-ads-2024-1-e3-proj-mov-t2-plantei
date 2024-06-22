import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import NavigationBar from '../../components/NavigationBar';
import CustomTextInput from '../../components/CustomTextInput';
import { UserContext } from '../../contexts/UserContext';
import Theme from '../../style/Theme';

const schema = yup.object({
  oldPassword: yup.string().required('Senha antiga é obrigatória.'),
  newPassword: yup.string().min(3, 'A nova senha deve ter no mínimo 3 caracteres.').required('Nova senha é obrigatória.'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('newPassword')], 'As senhas não correspondem.')
    .required('Confirmação de senha é obrigatória.')
});

export default function EditPassword({ navigation }) {
  const { user, updatePassword } = useContext(UserContext);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleFormSubmit(inputData) {
    try {
      await updatePassword(inputData);
      Alert.alert('Sucesso', 'Senha atualizada com sucesso.');
      navigation.navigate("Settings");
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a senha.');
    }
  }

  return (
    <>
      <NavigationBar title="Alterar Senha" />
      <View style={styles.container}>
        <Text style={styles.title}>Alterar Senha</Text>
        <View style={styles.containerInputs}>
          <CustomTextInput
            name="oldPassword"
            placeholder="Senha Antiga"
            control={control}
            secureTextEntry={true}
            errors={errors}
          />
          <CustomTextInput
            name="newPassword"
            placeholder="Nova Senha"
            control={control}
            secureTextEntry={true}
            errors={errors}
          />
          <CustomTextInput
            name="confirmPassword"
            placeholder="Confirmar Nova Senha"
            control={control}
            secureTextEntry={true}
            errors={errors}
          />
        </View>
        <Button
          mode="contained"
          style={styles.buttonSubmit}
          onPress={handleSubmit(handleFormSubmit)}
        >
          Atualizar Senha
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 37.5,
    paddingTop: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 26,
  },
  containerInputs: {
    rowGap: 12,
  },
  buttonSubmit: {
    marginTop: 30,
  },
});
