<template>
  <section class="flex flex-col items-center bg-white w-5/6 sm:w-[500px] m-auto rounded-md border-green-600 border-2 p-4 drop-shadow-2xl">
    <header>
      <img alt="Eldorado logo" src="../assets/eldorado-logo.png" class="w-24">
    </header>
    <main class="flex flex-col sm:w-4/6 w-5/6 relative">
      <!-- <button @click="$router.push({ name: 'assinatura-apr' })">Emitir Apr</button> -->
      <input class="std-input-field focus:outline-none focus:border-transparent focus:ring focus:ring-lime-200 hover:border-green-400" type="text" name="email" id="email" placeholder="email" v-model="login.email">
      <input class="std-input-field focus:outline-none focus:border-transparent focus:ring focus:ring-lime-200 hover:border-green-400" type="password" name="password"
      id="password" placeholder="password" v-model="login.pass">
    </main>
    <footer class="h-8 mt-3 flex flex-col justify-center">
      <button v-if="!templateControllers.isAwaitingLoginResponse" class="std-button button-positive-action" @click="logUserIn(login.email, login.pass)">Entrar</button>
      <div v-else class="w-[30px] h-[4px] bg-green-600 animate-spin"/>
    </footer>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      login: {
        email: "",
        pass: ""
      },
      templateControllers: {
        isAwaitingLoginResponse: false
      },
      publicVapidKey: "BKRryA-vwbeL94bRKnqB6to7G0yMecNePXYLq0IsOoun1jdI8SW2MqXJ7IQcCJDnn3B1RQaxqzdkNftxU-WFIZY"
    };
  },
  methods: {
    async registerServiceWorker() {
      if ("serviceWorker" in navigator) {
        try {
          const registrations = await navigator.serviceWorker.getRegistrations(); //TODO: remove unregister when ready to deplyo
          if (registrations[0])
            return registrations[0];
          const registration = await navigator.serviceWorker.register("service-worker.js");
          return registration;
        }
        catch (error) {
          alert(error);
        }
      }
    },
    async subscribeNotification() {
      const register = await this.registerServiceWorker();
      await navigator.serviceWorker.ready;
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
      });
      return subscription;
    },
    async postSubscribe() {
      const registration = await navigator.serviceWorker.getRegistration("service-worker.js");
      if (registration) {
        const subscription = await registration.pushManager.getSubscription();
        await fetch("https://demo-eldorado.loca.lt/apr", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "Content-Type": "application/json",
            "Bypass-Tunnel-Reminder": "Hi tunnel"
          },
        });
      }
      else {
        await fetch("https://demo-eldorado.loca.lt/apr", {
          method: "POST",
          body: JSON.stringify(await this.subscribeNotification()),
          headers: {
            "Content-Type": "application/json",
            "Bypass-Tunnel-Reminder": "Hi tunnel"
          },
        });
      }
    },
    async handleLoginRequest(body) {
      try {
        const response = await fetch("https://demo-eldorado.loca.lt/user/login", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            "Bypass-Tunnel-Reminder": "Hi tunnel"
          },
        });
        if (response.status > 199 && response.status < 300) {
          const data = await response.json();
          sessionStorage.setItem("email", data.email);
          this.$router.push({ name: 'home-view'})
        }
        else if (response.status === 404) {
          this.notifyFailedLogin();
        }
      }
      catch (error) {
        alert(error);
      }
    },
    async logUserIn(email, pass) {
      this.templateControllers.isAwaitingLoginResponse = true
      const registration = await navigator.serviceWorker.getRegistration("service-worker.js");
      if (registration) {
        const subscription = await registration.pushManager.getSubscription();
        const login = {
          email: email,
          pass: pass,
          subscription: subscription
        };
        await this.handleLoginRequest(login);
      }
      else {
        const login = {
          email: email,
          pass: pass,
          subscription: await this.subscribeNotification()
        };
        await this.handleLoginRequest(login);
      }
      this.templateControllers.isAwaitingLoginResponse = false
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
    notifyFailedLogin() {
      const failedCredentials = document.createElement("span");
      failedCredentials.textContent = "E-mail ou senha inválidos";
      failedCredentials.classList.add('text-red-600')
      failedCredentials.classList.add('absolute')
      failedCredentials.classList.add('bottom-[-15px]')
      failedCredentials.classList.add('left-1/4')
      const nav = document.querySelector("main");
      nav.appendChild(failedCredentials);
      // setTimeout(() => {
      //   nav.removeChild(failedCredentials);
      // }, 4000);
    }
  },
  mounted() {
    if ("Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission();
      }
      else if (Notification.permission === "denied") {
        alert("Por favor, permita o envio de notificações");
      }
    }
  }
}
</script>