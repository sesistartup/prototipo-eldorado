<template>
  <FormLabel
    title="CRIAR DOCUMENTO"
    class="mt-14"
  />
  <div class="flex w-5/6 flex-col items-center h-full py-10">
    <!-- <FormLabel
      title="CRIAR DOCUMENTO"
      class="mt-4"
    /> -->
    <div class="min-h-40 h-2/6 max-h-64 w-full flex justify-center">
      <button class="w-full h-full max-w-[200px] open-apr-form open-forms hover:drop-shadow-2xl hover:shadow-yellow-300" @click="beginNewApr" />
      <button class="w-full h-full max-w-[200px] open-pt-form open-forms opacity-60" />
    </div>
    <ContainerDeAPRs />
    <!-- <button class="std-button button-positive-action mt-4" @click="$router.push({ name: 'apr', query: { isVisualizing: false }})">Emitir APR</button> -->
  </div>
</template>

<script>
import ContainerDeAPRs from '@/components/ContainerDeAPRs'
import FormLabel from '@/components/FormLabel.vue'
import { setSessionData } from '@/utils/sessionStoreUtils'
  export default {
    name: "HomeView",
    components: { ContainerDeAPRs, FormLabel },
    methods: {
      beginNewApr() {
        setSessionData('aprForm', {})
        setSessionData('isEmitente', true)
        this.$router.push({ name: 'apr', query: { isVisualizing: false }})
      }
    },
    mounted() {
      sessionStorage.removeItem('aprForm')
      sessionStorage.removeItem('assinaturaResponsavel')
    }
  }
</script>

<style scoped>
  .open-forms {
    background-size: contain;
    background-repeat: no-repeat;
  }
  .open-apr-form {
    background-image: url('@/assets/home/open-apr-form.png');
  }
  .open-pt-form {
    background-image: url('@/assets/home/open-pt-form.png');
  }
</style>