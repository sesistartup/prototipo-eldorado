<template>
  <div class="flex flex-col justify-between h-[400px] w-full bg-transparent drop-shadow-lg rounded-md overflow-auto">
    <div v-for="(epi, index) in episEspecificos" :key="index" id="check-container" class="h-12 std-input-field bg-white border-white drop-shadow-xl relative">
      <CheckItem v-if="epi.isChecked === true" />
      <input type="checkbox" :name="extractIdFromName(epi.name)" :id="extractIdFromName(epi.name)" v-model="epi.isChecked" :value="true">
      <label :for="extractIdFromName(epi.name)">{{ epi.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
import { isVisualizingApr } from '@/utils/isVisualizingApr'
import { extractIdFromName } from '@/utils/extractIdFromName'
import { ref } from 'vue'
import CheckItem from '../GraphicUtils/CheckItem.vue';
styleCheckboxGroup(isVisualizingApr())

const episEspecificos = ref([
  {
    name: 'Botina Segurança Eletricista',
    isChecked: false
  },
  {
    name: 'Luva Isolante Classe 0',
    isChecked: false
  },
  {
    name: 'Luva Isolante Classe 2',
    isChecked: false
  },
  {
    name: 'Luva Isolante Classe 4',
    isChecked: false
  },
  {
    name: 'Capuz Carrasco Categoria 4',
    isChecked: false
  },
  {
    name: 'Camisa e Calça FR Risco 2',
    isChecked: false
  },
  {
    name: 'Balaclava FR Risco 2',
    isChecked: false
  },
  {
    name: 'Capacete C Protetor Facial Risco 2',
    isChecked: false
  },
  {
    name: 'Roupa Anti Chama Risco 2',
    isChecked: false
  }
])

</script>

<style scoped>
  input[checked="true"] {
    background-color: black;
  }
</style>