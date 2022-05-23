<template>
    <FormLabel
      title="CRIAR DOCUMENTO"
      class="mt-14"
    />
  <div class="flex flex-col items-center justify-between h-full py-10">
    <ContainerDeAPRs />
    <button class="std-button button-positive-action mt-4" @click="$router.push({ name: 'apr', query: { isVisualizing: false }})">Emitir APR</button>
  </div>
</template>

<script>
import ContainerDeAPRs from '@/components/ContainerDeAPRs'
import FormLabel from '@/components/FormLabel.vue'
  export default {
    name: "HomeView",
    components: { ContainerDeAPRs, FormLabel },
    mounted() {                                                                                                                                                                                                                                                                                                               
      sessionStorage.removeItem('infosIniciais')
    }
}
</script>