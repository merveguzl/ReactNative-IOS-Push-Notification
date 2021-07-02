import React from 'react'
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export default function notification() {

    PushNotificationIOS.requestPermissions().then(() => {
        PushNotificationIOS.presentLocalNotification({
            alertAction: 'view',
            alertTitle: 'Hi',
            alertBody: 'Hi, Desciption',
            applicationIconBadgeNumber: 1,
            isSilent: false,
            soundName: 'customSound',
            userInfo: {username: 'zafer', phoneNumber: '531xxxxxxx'},
        });
      });
      return <></>;
}
