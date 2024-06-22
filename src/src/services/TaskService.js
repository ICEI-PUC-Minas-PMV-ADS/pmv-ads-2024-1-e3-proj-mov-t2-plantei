import api from "../../src/services/api";

const updateStatus = async (id, status, plantId, tipo, user) => {
  const response = await api.patch(`/tasks/${id}`, {
    status: status,
  });

  if (response) {
    const { data } = await api.get(`/plants/${plantId}?&_expand=category`);
    const plant = data;
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
      userId: user.id,
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

const isDateOlderThanNow = (date) => {
  const now = new Date();
  return new Date(date) < now;
};

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const createDataString = (date) => {
  return formatDate(date) + (isDateOlderThanNow(date) ? " - Atrasado" : "");
};

export default {
  updateStatus,
  createDataString,
};
