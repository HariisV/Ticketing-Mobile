import PushNotification from 'react-native-push-notification';
class Notifications {
  constructor() {
    // 1. Configure
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },
      popInitialNotification: true,
      requestPermissions: false,
    });
    // 2. Created Channel
    PushNotification.createChannel(
      {
        channelId: 'reminders',
        channelName: 'Reminder Notify',
        channelDescription: 'Forr Your utang',
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  }
  reminderNotification() {
    PushNotification.localNotification({
      channelId: 'reminders',
      title: 'Pesanan Berhasil Dibuat !',
      message: 'Bayar Pesanan Anda Sekarang !',
    });
  }
}

export default new Notifications();
