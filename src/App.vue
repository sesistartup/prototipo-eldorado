<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <button @click="$router.push({ name: 'assinatura-apr'})">Emitir Apr</button>
    <input type="text" name="email" id="email" placeholder="email" v-model="login.email">
    <input type="password" name="password" id="password" placeholder="password" v-model="login.pass">
    <button @click="logUserIn(login.email, login.pass)">Loga mobile por favor</button> -->
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* background-color: #34b64f; */
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
