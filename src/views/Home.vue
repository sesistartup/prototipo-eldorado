<template>
    <FormLabel
      title="CRIAR DOCUMENTO"
      class="mt-14"
    />
  <div class="flex flex-col items-center justify-between h-full py-10">
    <div class="w-full h-full flex px-4">
      <button class="w-full h-full open-apr-form open-forms" @click="$router.push({ name: 'apr', query: { isVisualizing: false }})" />
      <button class="w-full h-full open-pt-form open-forms opacity-60" />
    </div>
    <ContainerDeAPRs />
    <!-- <button class="std-button button-positive-action mt-4" @click="$router.push({ name: 'apr', query: { isVisualizing: false }})">Emitir APR</button> -->
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