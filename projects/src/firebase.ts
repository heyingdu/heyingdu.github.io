// src/firebase.ts
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth, GithubAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBaYQuN_Z38gGN4-3-620vCNaZouFIsB88",
  authDomain: "projects-f102b.firebaseapp.com",
  projectId: "projects-f102b",
  storageBucket: "projects-f102b.firebasestorage.app",
  messagingSenderId: "913795101584",
  appId: "1:913795101584:web:9c2eb3078513b7d1333915",
  measurementId: "G-VQBK66P7KE"
};

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)

export const auth = getAuth(app)
export const githubProvider = new GithubAuthProvider()