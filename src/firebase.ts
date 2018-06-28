import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './config';
require('firebase/firestore');

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
const firebaseAuth = firebaseApp.auth();
const firebaseDb = firebaseApp.database();
const firebaseStorage = firebaseApp.storage();
const fireStore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
fireStore.settings(settings);

export {
  firebaseAuth, firebaseDb, firebaseStorage, fireStore
};
