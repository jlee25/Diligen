import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCGERD2CCK1S_PUG9mQFuuNT5Y_RgPE3Xo",
    authDomain: "diligen-66b1c.firebaseapp.com",
    databaseURL: "https://diligen-66b1c.firebaseio.com",
    projectId: "diligen-66b1c",
    storageBucket: "diligen-66b1c.appspot.com",
    messagingSenderId: "23157842680"
};
firebase.initializeApp(config);

export default firebase;