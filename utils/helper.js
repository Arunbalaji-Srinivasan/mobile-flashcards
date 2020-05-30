import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo';

const NOTIFICATION_KEY = 'MobileFlashcard:notifications';
const CHANNEL_ID = 'DailyReminder';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Mobile Flashcards Reminder',
    body: "👋 Don't forget to study your flashcards today!",
    ios: {
      sound: true
    },
    android: {
      channelId: CHANNEL_ID,
      sticky: false,
      sound: true,
      color: 'red'
    }
  };
}


export function setLocalNotification() {
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate()+1);
  tomorrow.setHours(20);
  tomorrow.setMinutes(0);

  Notifications.scheduleLocalNotificationAsync(createNotification(), {
    time: tomorrow,
    repeat: "day",
  });
}