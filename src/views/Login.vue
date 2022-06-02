<template>
  <section class="flex flex-col items-center justify-center w-full h-full m-auto">
    <header>
      <img alt="Eldorado logo" src="@/assets/logo/white-logo-with-text.png" class="w-48 mb-14">
    </header>
    <main class="flex flex-col w-5/6 max-w-lg relative">
      <!-- <button @click="$router.push({ name: 'assinatura-apr' })">Emitir Apr</button> -->
      <div id="email-container" class="std-input-field labeled-input-container">
        <label for="email" class="border-r-2 border-[#93a298] w-[3rem] h-full flex items-center justify-center">
          <img class="w-[22px]" src="@/assets/account-icon.svg" alt="account icon">
        </label>
        <input class="login-input-field" type="text" name="email" id="email" placeholder="email" v-model="login.email" @click="focusInputContainer('email-container', 'border-yellow-300')">
      </div>
      <div id="password-container" class="std-input-field labeled-input-container">
        <label for="password" class="border-r-2 border-[#93a298] w-[3rem] h-full flex items-center justify-center">
          <img src="@/assets/icons/padlock.png" alt="Cadeado" class="w-[14px]">
        </label>
        <input class="login-input-field" type="password" name="password"
        id="password" placeholder="password" v-model="login.pass" @click="focusInputContainer('password-container', 'border-yellow-300')">
        <button @click="togglePasswordVisibility()" class="w-[2rem] h-auto eye" />
      </div>
    </main>
      <h3 class="text-white my-4">Esqueceu sua senha?</h3>
    <footer class="h-8 mt-3 flex flex-col justify-center max-w-xs w-5/6 items-center">
      <button v-if="!templateControllers.isAwaitingLoginResponse" class="std-button button-login button-hover" @click="logUserIn(login.email, login.pass)">Entrar</button>
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
          sessionStorage.setItem("user", JSON.stringify(data.user));
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
      try {
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
      } catch (error) {
        alert(error)
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
    },
    focusInputContainer(containerId, borderColor) {
      const container = document.querySelector(`#${containerId}`)
      container.classList.add(borderColor)
      container.addEventListener('focusout', () => {
        if (container.classList.contains(borderColor)) container.classList.remove(borderColor)
      })
    },
    togglePasswordVisibility() {
      const passField = document.querySelector('#password')
      if (passField.getAttribute('type') === 'password') {
        passField.setAttribute('type', 'text')
      } else {
        passField.setAttribute('type', 'password')
      }
    }
  },
  mounted() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
      input.classList.add('bg-transparent')
    })
    
    sessionStorage.clear()

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

<style scoper>
  .eye {
    background-image: url('@/assets/icons/eye-password-visibility.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: center;
  }
</style>