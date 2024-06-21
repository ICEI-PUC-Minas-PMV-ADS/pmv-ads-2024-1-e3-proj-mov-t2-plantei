import { createContext, useState } from "react"

export const RegisterPlantContext = createContext({})

export function RegisterPlantProvider({ children }) {
  const [plantDataAdded, setPlantDataAdded] = useState({
    httpMethod: '',
    id: '',
    // userId: '',
    categoryId: '',
    name: '',
    description: '',
    category: {
      id: "",
      name: "",
      image: "",
      watering_frequency_days: 1,
      fertilization_frequency_days: 1,
      vase_change_frequency_days: 1
    }
  })

  return (
    <RegisterPlantContext.Provider
      value={{
        plantDataAdded,
        changePlantDataAdded: setPlantDataAdded,
      }}
    >
      {children}
    </RegisterPlantContext.Provider>
  )
}