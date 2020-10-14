importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyAartMi3w1aeecLKdBoaSuN1UqN3NSscZg",
    authDomain: "clodmess-409a2.firebaseapp.com",
    databaseURL: "https://clodmess-409a2.firebaseio.com",
    projectId: "clodmess-409a2",
    storageBucket: "clodmess-409a2.appspot.com",
    messagingSenderId: "319460987193",
    appId: "1:319460987193:web:47de94604096e0a54a98e8",
    measurementId: "G-NL7FW9VZ36"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});