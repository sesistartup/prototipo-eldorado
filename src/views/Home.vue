<template>
  <div class="flex flex-col items-center justify-between h-full py-10">
    <ContainerDeAPRs />
    <button class="std-button button-positive-action" @click="$router.push({ name: 'apr', query: { isVisualizing: false }})">Emitir APR</button>
  </div>
</template>

<script>
import ContainerDeAPRs from '@/components/ContainerDeAPRs'
  export default {
    name: "HomeView",
    components: { ContainerDeAPRs },
    mounted() {                                                                                                                                                                                                                                                                                                               
      sessionStorage.removeItem('infosIniciais')
    }
}
</script>