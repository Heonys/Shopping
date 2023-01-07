// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const login = () => {
  signInWithPopup(auth, provider);
};

export const logout = () => {
  signOut(auth);
};

export const onUserStateChange = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
};

const adminUser = async (user) => {
  return await get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admin = snapshot.val();
        const isAdmin = admin.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
};

export const addNewProduct = async (product, url) => {
  const id = uuid();
  return await set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: url,
    options: product.options.split(","),
  });
};

export const getAllProduct = async () => {
  return await get(ref(database, `products`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getProductById = async (uuid) => {
  return await get(ref(database, `products/${uuid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addCart = async (product, user) => {
  return await set(ref(database, `cart/${user.uid}/${uuid()}`), { ...product });
};

export const getCart = async (user) => {
  if (user) {
    return await get(ref(database, `cart/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};