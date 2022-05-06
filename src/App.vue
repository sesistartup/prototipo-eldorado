<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="postToPushNotification()">Post</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      publicVapidKey: 'BKRryA-vwbeL94bRKnqB6to7G0yMecNePXYLq0IsOoun1jdI8SW2MqXJ7IQcCJDnn3B1RQaxqzdkNftxU-WFIZY'
    }
  },
  methods: {
    async postToPushNotification() {
      if ('serviceWorker' in navigator) {
        await this.send().catch(err => console.error(err));
      }
      // fetch('http://localhost:3000/emitir-apr', {
      //   method: 'post',
      //   data: {}
      // })
    },
    urlBase64ToUint8Array(base64String) {
      const padding = "=".repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    async send() {
      if ('serviceWorker' in navigator) {
        const register = await navigator.serviceWorker.register('/registerServiceWorker.js', {
          scope: '/'
        })
        await navigator.serviceWorker.ready
        console.log('Registering push...')
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey)
        });

        //Send push notification
        await fetch("http://localhost:3000/emitir-apr", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "content-type": "application/json"
          }
        });
      }
    }
  },
  mounted() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((reg) => reg.unregister()))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
