import api from "../../src/services/api";

const updateStatus = async (id, status, plantId, tipo) => {
  const response = await api.patch(`/tasks/${id}`, {
    status: status,
  });

  if (response) {
    const { data } = await api.get(`/plants/${plantId}?&_embed=category`);
    plant = data;
    let newDate = 0;
    let frequency;

    if (plant.category.name === "Personalizada") {
      const { data } = await api.get(`/plants_frequency?plantId=${plant.id}`);
      frequency = data[0];
    } else {
      frequency = plant.category;
    }

    switch (tipo) {
      case "Rega":
        newDate = frequency.watering_frequency_days;
        break;
      case "Fertilizar":
        newDate = frequency.fertilization_frequency_days;
        break;
      case "Vaso":
        newDate = frequency.vase_change_frequency_days;
        break;
    }

    const newTask = {
      userId: "1",
      plantId: plantId,
      tipo: tipo,
      status: 1,
      notificationDate: setNotificationDate(newDate, 1),
    };

    await api.post("/tasks/", newTask);
  } else {
    console.log("erro");
  }
};

function setNotificationDate(extraDays) {
  const currentDate = new Date();
  totalDays = extraDays;
  return new Date(currentDate.setDate(currentDate.getDate() + totalDays));
}


export default {
  updateStatus
};