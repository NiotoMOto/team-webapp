export const requestNotificationPermission = () => {
  if ("Notification" in window) {
    if (
      Notification.permission !== "denied" &&
      Notification.permission !== "granted"
    ) {
      Notification.requestPermission();
    }
  }
};

export const pushNotification = payload => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(payload);
  }
};
