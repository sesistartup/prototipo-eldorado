<template>
  <div class="w-full flex flex-col items-center justify-center">
    <InfosIniciais v-if="page === 0" />
    <DescricaoTarefa v-if="page === 1" />
    <EPIsEspecificos v-if="page === 2"/>
    <EPIsAplicaveis v-if="page ===3" />
    <div class="w-5/6 mt-5 flex justify-between">
      <button @click="returnPage()">anterior</button>
      <button @click="nextPage()">próximo</button>
    </div>
  </div>
</template>

<script setup>
import InfosIniciais from '@/components/AprForm/InfosIniciais.vue'
import DescricaoTarefa from '@/components/AprForm/DescricaoTarefa.vue'
import EPIsEspecificos from '@/components/AprForm/EPIsEspecificos.vue'
import { ref } from 'vue';
import EPIsAplicaveis from '@/components/AprForm/EPIsAplicaveis.vue';

const page = ref(0)
const nextPage = () => {
  page.value++
}
const returnPage = () => {
  page.value--
}
</script>