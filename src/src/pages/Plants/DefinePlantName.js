import { View, StyleSheet, Image } from 'react-native';
import { useContext } from 'react';
import { Text } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { RegisterPlantContext } from '../../contexts/RegisterPlantContext';
import NavigationBar from '../../components/NavigationBar';
import ThreeSteps from '../../components/ThreeSteps';
import ButtonsToAdvanceAndReturnForm from '../../components/ButtonsToAdvanceAndReturnForm';
import CustomTextInput from '../../components/CustomTextInput';

const schema = yup.object({
  name: yup.string().trim().required("Escolha um nome para sua planta"),
})

export default function DefinePlantName() {
  const { navigate } = useNavigation()
  const { plantDataAdded, changePlantDataAdded } = useContext(RegisterPlantContext)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: plantDataAdded.name },
    resolver: yupResolver(schema),
  })

  function handleNameSubmit(formData) {
    changePlantDataAdded({ ...plantDataAdded, name: formData.name })
    navigate("DefinePlantDescription")
  }

  return (
    <>
      <NavigationBar title="Cadastrar planta personalizada" />

      <View style={styles.container}>
        <View style={styles.content}>
          <ThreeSteps currentStep={1} />
          <Text style={styles.title}>Como sua planta irá se chamar?</Text>

          <CustomTextInput
            control={control}
            errors={errors}
            name="name"
            placeholder="Nome da planta"
          />

          <View style={styles.containerImage}>
            <Image
              style={{ width: 140, height: 140 }}
              source={{ uri: plantDataAdded.category.image }}
              resizeMode="contain"
            />
          </View>
        </View>
        <ButtonsToAdvanceAndReturnForm onSubmit={handleSubmit(handleNameSubmit)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 37.5,
    paddingTop: 0,
    justifyContent: 'space-between',
  },

  content: {
    flexGrow: 1,
  },

  title: {
    maxWidth: 170,
    paddingVertical: 26,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  containerImage: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 37.5,
    borderRadius: 15,
    backgroundColor: '#F2FBF2'
  },
});
