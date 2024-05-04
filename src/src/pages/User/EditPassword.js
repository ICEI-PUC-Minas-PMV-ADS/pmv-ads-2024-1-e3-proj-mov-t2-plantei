import { View, StyleSheet } from 'react-native';
import { Button, Text } from "react-native-paper";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NavigationBar from "../../components/NavigationBar";
import CustomTextInput from '../../components/CustomTextInput';

const schema = yup.object({
  // Adicione mais regras de validação.
  current_password: yup.string().required("Informe a senha atual"),
  new_password: yup.string().required("Informe a nova senha"),
  confirm_new_password: yup.string().required("Informe novamente a nova senha"),
})

export default function EditPassword() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  function handleFormSubmit(data) {
    console.log(data)
  }

  return (
    <>
      <NavigationBar title="Configurações" />

      <View style={styles.container}>
        <Text style={styles.title}>Editar senha</Text>
        <View style={styles.containerInputs}>
          <CustomTextInput
            name="current_password"
            placeholder="Senha atual"
            control={control}
            errors={errors}
            secureTextEntry
          />
          <CustomTextInput
            name="new_password"
            placeholder="Nova senha"
            control={control}
            errors={errors}
            secureTextEntry
          />
          <CustomTextInput
            name="confirm_new_password"
            placeholder="Confirme a nova senha"
            control={control}
            errors={errors}
            secureTextEntry
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

  containerInputs: {
    rowGap: 12
  },

  buttonSubmit: {
    marginTop: 30,
  }
})