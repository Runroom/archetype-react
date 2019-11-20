importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '142898157653'
});

const messaging = firebase.messaging();

self.addEventListener('install', () => {
  console.log('Service worker installed');
});

self.addEventListener(
  'notificationclick',
  event => {
    const { confirm, decline, open } = event.notification.data;
    event.notification.close();
    if (event.action === 'confirmAttendance') {
      clients.openWindow(confirm);
    } else if (event.action === 'cancel') {
      clients.openWindow(decline);
    } else {
      clients.openWindow(open);
    }
  },
  false
);

messaging.setBackgroundMessageHandler(payload => {
  console.log('Received background message ', payload);
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    title: 'Title Background.',
    body: 'Background Message body.',
    icon: '/public/icon-192.png',
    actions: [
      { action: 'confirmAttendance', title: '👍 Confirm attendance' },
      { action: 'cancel', title: '👎 Not coming' }
    ]
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
