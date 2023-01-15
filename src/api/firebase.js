import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuid } from "uuid";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export const login = async () => {
  signInWithPopup(auth, provider);
};

export const logout = async () => {
  signOut(auth);
};

//어플리케이션의 로그인 상태가 변경될때 마다 세션이 남아있다면 콜백함수를 실행시켜 줄게
// 로그인상태가 변경된다 -> user라는 상태가 바뀔때마다 //
export const userUpdateChange = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await checkAdmin(user) : user;
    callback(updateUser);
  });
};

const checkAdmin = async (user) => {
  return get(ref(database, "admins"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const isAdmin = snapshot.val().includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addProduct = async (product, url) => {
  const id = uuid();
  set(ref(database, `products2/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    url,
    options: product.options.split(","),
  });
};

export const getProduct = async (uid) => {
  const url = uid ? `products2${uid}` : `products2`;
  return get(ref(database, url))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    })
    .catch((error) => {
      console.error(error);
    });
};
