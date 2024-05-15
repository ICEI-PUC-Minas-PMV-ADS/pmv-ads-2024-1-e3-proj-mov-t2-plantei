import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { Text } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import NavigationBar from '../../components/NavigationBar';
import ThreeSteps from '../../components/ThreeSteps';
import ButtonsToAdvanceAndReturnForm from '../../components/ButtonsToAdvanceAndReturnForm';
import CustomTextInput from '../../components/CustomTextInput';
import { RegisterPlantContext } from '../../contexts/RegisterPlantContext';

const schema = yup.object({
  description: yup.string().trim().required("Escolha uma descrição para sua planta"),
})

export default function DefinePlantDescription() {
  const { navigate } = useNavigation()
  const { plantDataAdded, changePlantDataAdded } = useContext(RegisterPlantContext)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { description: plantDataAdded.description },
    resolver: yupResolver(schema),
  })

  function handleDescriptionSubmit(formData) {
    changePlantDataAdded({ ...plantDataAdded, description: formData.description })
    navigate("DefineFrequencyOfTasks")
  }

  return (
    <>
      <NavigationBar title="Cadastrar planta personalizada" />

      <View style={styles.container}>
        <View style={styles.content}>
          <ThreeSteps currentStep={2} />
          <Text style={styles.title}>Defina uma boa descrição para sua planta</Text>
          <CustomTextInput
            control={control}
            errors={errors}
            multiline
            name="description"
            placeholder="Descrição"
          />
          <Text style={styles.exampleText}>Exemplo: Adora uma temperatura amena e iluminação indireta.</Text>
        </View>
        <ButtonsToAdvanceAndReturnForm onSubmit={handleSubmit(handleDescriptionSubmit)} />
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
    maxWidth: 256,
    paddingVertical: 26,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  exampleText: {
    paddingTop: 4,
    paddingHorizontal: 16
  }
});
