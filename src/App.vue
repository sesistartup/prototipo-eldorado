<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="postSubscribe()">opa</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      publicVapidKey: 'BKRryA-vwbeL94bRKnqB6to7G0yMecNePXYLq0IsOoun1jdI8SW2MqXJ7IQcCJDnn3B1RQaxqzdkNftxU-WFIZY'
    }
  },
  methods: {
    async registerServiceWorker() {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations() //TODO: remove unregister when ready to deplyo
        registrations.forEach((registration) => {
          registration.unregister()
        })
        const registration = await navigator.serviceWorker.register('service-worker.js')
        return registration
      }
    },
    async subscribeNotification() {
      const register = await this.registerServiceWorker()
      await navigator.serviceWorker.ready
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
      })
      return subscription
    },
    async postSubscribe() {
      const registration = await navigator.serviceWorker.getRegistration('service-worker.js')
      if (registration) {
        const subscription = await registration.pushManager.getSubscription()
        await fetch('http://localhost:3000/subscribe', {
          method: 'POST',
          body: JSON.stringify(subscription),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        await fetch('http://localhost:3000/subscribe', {
          method: 'POST',
          body: JSON.stringify(await this.subscribeNotification()),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
  },
  async mounted() {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        await this.postSubscribe()
      } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          await this.postSubscribe()
        }
      }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
