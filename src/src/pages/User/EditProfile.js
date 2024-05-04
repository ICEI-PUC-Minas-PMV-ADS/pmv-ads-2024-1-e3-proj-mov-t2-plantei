import { View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { Button, Text } from "react-native-paper";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker'

import NavigationBar from "../../components/NavigationBar";
import CustomTextInput from '../../components/CustomTextInput';

import Theme from '../../style/Theme';

const schema = yup.object({
  // Adicione mais regras de validação.
  name: yup.string(),
  email: yup.string().email('Informe um e-mail válido.'),
})

export default function EditProfile() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    // Buscar nome e email do usuário no banco e definir como valor inicial
    defaultValues: { name: '', email: '' },
    resolver: yupResolver(schema),
  })

  // Buscar imagem do usuário no banco e definir como valor inicial do estado
  const [profilePicture, setProfilePicture] = useState('')

  async function handleImagePicker() {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
    })

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri)
    }
  }

  function handleFormSubmit(inputData) {
    const data = { ...inputData, image: profilePicture }
    console.log(data)
  }

  return (
    <>
      <NavigationBar title="Configurações" />

      <View style={styles.container}>
        <Text style={styles.title}>Editar Perfil</Text>
        <View style={styles.containerImage}>
          {profilePicture ? (
            <Image
              style={styles.image}
              source={{ uri: profilePicture }}
            />
          ) : (
            <Image
              style={styles.image}
              source={require('../../../assets/user.png')}
            />
          )}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => handleImagePicker()}
          >
            <Text style={styles.textButton}>Alterar foto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerInputs}>
          <CustomTextInput
            name="name"
            placeholder="Isabella"
            control={control}
            errors={errors}
          />
          <CustomTextInput
            name="email"
            placeholder="isabella@gmail.com"
            control={control}
            errors={errors}
          />
        </View>
        <Button
          mode="contained"
          style={styles.buttonSubmit}
          onPress={handleSubmit(handleFormSubmit)}>
          Atualizar
        </Button>
      </View>
    </>
  )
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
    alignItems: 'center'
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 99
  },

  button: {
    paddingTop: 6,
    paddingBottom: 24
  },

  textButton: {
    textDecorationLine: 'underline',
    backgroundColor: 'transparent',
    color: Theme.colors.outline,
  },

  containerInputs: {
    rowGap: 12
  },

  buttonSubmit: {
    marginTop: 30
  }
})