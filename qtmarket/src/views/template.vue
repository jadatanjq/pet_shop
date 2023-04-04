<style>

</style>

<template>
    <navbar></navbar>

</template>

<script>
import navbar from "@/components/navbar.vue"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxgOdDZ6-4WKHltdbnfeF_ys8XIscEYFs",
  authDomain: "qtmarket-5d0a0.firebaseapp.com",
  projectId: "qtmarket-5d0a0",
  storageBucket: "qtmarket-5d0a0.appspot.com",
  messagingSenderId: "836971545840",
  appId: "1:836971545840:web:22a80ab81470bee76f2e35"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default {
    data() {
        return {

        }
    },

    components: {
        navbar,
    },
}
</script>