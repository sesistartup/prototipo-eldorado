<template>
<HeaderTemplate v-if="$route.name !== 'home'" />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="$router.push({ name: 'assinatura-apr'})">Emitir Apr</button>
    <input type="text" name="email" id="email" placeholder="email" v-model="login.email">
    <input type="password" name="password" id="password" placeholder="password" v-model="login.pass">
    <button @click="logUserIn(login.email, login.pass)">Loga mobile por favor</button>
  </nav> -->
  <router-view />
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router'
import HeaderTemplate from './components/HeaderTemplate.vue';
onMounted(() => {
  const router = useRouter()
  router.beforeEach((to) => {
    const body = document.querySelector('body')
    if (to.name === 'home') {
      body.setAttribute('id', 'is-home')
    } else {
      body.setAttribute('id', 'is-not-home')
    }
  })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  height: 100vh;
}

body {
  background-repeat: no-repeat;
  background-size: cover;
}
body[id='is-home'] {
  background-image: url('@/assets/background/full-dark.png');
}
body[id='is-not-home'] {
  background-image: url('@/assets/background/mostly-white.png');
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
