import firebase from 'firebase/app';
import 'firebase/messaging';
import localforage from 'localforage';

import config from '../config/firebase.json';

if (
  // process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  const PUSH_MANAGER = 'PushManager' in window;
  let swRegistration;
  let isSubscribed = false;

  function initialiseUI() {
    swRegistration.pushManager.getSubscription().then(subscription => {
      isSubscribed = !(subscription === null);
      console.log(
        isSubscribed ? 'User IS subscribed.' : 'User is NOT subscribed.'
      );
    });
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { scope: '/' })
      .then(registration => {
        swRegistration = registration;
        console.log('Service worker: Start registration...');

        if (PUSH_MANAGER) {
          console.info('Pending user subscription manage');
          initialiseUI();
        }

        console.log('Using service worker...');
        return messaging.useServiceWorker(swRegistration);
      })
      .then(() => {
        console.log('Rquesting permission...');
        return messaging.requestPermission();
      })
      .then(() => {
        console.log('Getting token...');
        return messaging.getToken();
      })
      .then(token => {
        console.log('Token received!');
        localStorage.setItem('FCM_TOKEN', token);
        localforage.setItem('FCM_TOKEN', token);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
  });

  if (PUSH_MANAGER) {
    console.log('Push Manager... Yay!');
    self.addEventListener('push', event => {
      console.log('[Service Worker] Push Received.');
      console.log(
        `[Service Worker] Push had this data: "${event.data.text()}"`
      );

      const title = 'Push Codelab';
      const options = {
        body: 'Yay it works.',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
      };

      event.waitUntil(self.registration.showNotification(title, options));
    });
  }

  messaging.onMessage(({ notification: { title, ...options } }) => {
    console.log(options);
    swRegistration.showNotification(title, options);
  });
}
