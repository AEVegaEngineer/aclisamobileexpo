import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

export const sendPushNotification = async(expoPushToken) => {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { data: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
      "User-Agent": "Mobile"
    },
    body: JSON.stringify(message),
  });
}
export const registerForPushNotificationsAsync = async() => {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      LoginAlert(
        "Ha ocurrido un error obteniendo el token push para las notificaciones!"
      );
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    //console.log("el token es: " + token);
  } else {
    LoginAlert(
      "Se debe usar un dispositivo físico para recibir Notificaciones Push"
    );
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export const NotificationSetUp = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
}