<template>
  <div class="flex flex-col items-center justify-between h-full py-10">
    <ContainerDeAPRs />
    <button class="std-button button-positive-action" @click="$router.push({ name: 'apr'})">Emitir APR</button>
  </div>
</template>

<script>
import ContainerDeAPRs from '@/components/ContainerDeAPRs'
  export default {
    name: "HomeView",
    components: { ContainerDeAPRs }
}
</script>

<style scoped>

</style>