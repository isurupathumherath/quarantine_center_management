import firebase from 'firebase';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBQRTVO24XU2qBJEK3ZAeCqANjlj7PKB74",
    authDomain: "fir-react-image-6be19.firebaseapp.com",
    projectId: "fir-react-image-6be19",
    storageBucket: "fir-react-image-6be19.appspot.com",
    messagingSenderId: "660112855967",
    appId: "1:660112855967:web:19a55da35066be58b863aa"
}

firebase.initializeApp(config);
const storage = firebase.storage();

export default firebase;
