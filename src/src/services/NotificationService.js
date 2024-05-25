import * as Notifications from 'expo-notifications';
import api from "../../src/services/api";

export const scheduleDailyNotification = async (userId) => {
    const tasks = await getTasksForToday(userId);
    const content = createNotificationContent(tasks);
  
    if (content) {
      const trigger = {
        hour: 7,
        minute: 31,
        repeats: true,
      };
  
      await Notifications.scheduleNotificationAsync(trigger, content);
    }
  };

  //Notificações
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
  const createNotificationContent = (tasks) => {
    if (tasks.length === 0) {
      return null;
    };
    const title = 'Hora de cuidar das suas plantas!';
    const body = `Você tem ${tasks.length} tarefas para hoje.`;
    return { title, body };
  };
  
  const getTasksForToday = async (userId) => {
    const response = await api.get(`/tasks?userId=${userId}`);
    const tasks = response.data;
  
    // Filtrar as tarefas cuja data de notificação é hoje
    const tasksForToday = tasks.filter(task => isToday(new Date(task.notificationDate)));
  
    return tasksForToday;
  };