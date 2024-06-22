import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import NavigationBar from '../../components/NavigationBar';
import CustomTextInput from '../../components/CustomTextInput';
import { UserContext } from '../../contexts/UserContext';
import Theme from '../../style/Theme';

const schema = yup.object({
  nome: yup.string(),
  email: yup.string().email('Informe um e-mail válido.'),
});

export default function EditProfile({ navigation }) {
  const { user, updateUserProfile } = useContext(UserContext);
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: { nome: '', email: '' },
    resolver: yupResolver(schema),
  });


  useEffect(() => {
    if (user) {
      setValue('nome', user.nome);
      setValue('email', user.email);
    }
  }, [user, setValue]);


  async function handleFormSubmit(inputData) {
    try {
      const data = { ...inputData};
      await updateUserProfile(data);
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso.');
      navigation.navigate("Settings");
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
    }
  }

  return (
    <>
      <NavigationBar title="Configurações" />
      <View style={styles.container}>
        <Text style={styles.title}>Editar Perfil</Text>
        <View style={styles.containerInputs}>
          <CustomTextInput
            name="nome"
            placeholder="Nome"
            control={control}
            errors={errors}
          />
          <CustomTextInput
            name="email"
            placeholder="E-mail"
            control={control}
            errors={errors}
          />
        </View>
        <Button
          mode="contained"
          style={styles.buttonSubmit}
          onPress={handleSubmit(handleFormSubmit)}
        >
          Atualizar
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
  containerImage: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 99,
  },
  button: {
    paddingTop: 6,
    paddingBottom: 24,
  },
  textButton: {
    textDecorationLine: 'underline',
    backgroundColor: 'transparent',
    color: Theme.colors.outline,
  },
  containerInputs: {
    rowGap: 12,
  },
  buttonSubmit: {
    marginTop: 30,
  },
});
