import { AppRegistry } from 'react-native';
// import PushNotification from 'react-native-push-notification';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import App from './App';
import { name as appName } from '../app.json';

import schema from './model/schema';
import Post from './model/Post'; // ⬅️ You'll import your Models here

// PushNotification.localNotificationSchedule({
//   //... You can use all the options from localNotifications
//   message: 'My Notification Message', // (required)
//   date: new Date(Date.now() + 1000 * 5), // in 6 hours
// });

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    Post, // ⬅️ You'll add Models to Watermelon here
  ],
  actionsEnabled: true,
});

AppRegistry.registerComponent(appName, () => App);
