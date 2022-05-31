<template>
  <div class="flex flex-col justify-between items-center h-[400px] w-full bg-transparent rounded-md overflow-y-auto">
    <div v-for="(epi, index) in episEspecificos" :key="index" id="check-container" class="h-12 std-input-field bg-white border-white drop-shadow-xl relative w-5/6">
      <CheckItem v-if="epi.isChecked === true" />
      <input type="checkbox" :name="extractIdFromName(epi.name)" :id="extractIdFromName(epi.name)" v-model="epi.isChecked" :value="true">
      <label :for="extractIdFromName(epi.name)">{{ epi.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup, markCheckedBox } from '@/utils/checkboxGroupStyle'
import { isVisualizingApr } from '@/utils/isVisualizingApr'
import { extractIdFromName } from '@/utils/extractIdFromName'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CheckItem from '../GraphicUtils/CheckItem.vue';
styleCheckboxGroup(isVisualizingApr())

let episEspecificos = ref([
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
onMounted(() => {

  const aprForm = getSessionData('aprForm')
  if (aprForm.episEspecificos) episEspecificos.value = [ ...aprForm.episEspecificos ]

  markCheckedBox(episEspecificos.value)
})
onBeforeUnmount(() => {
  
  const aprForm = getSessionData('aprForm')
  aprForm.episEspecificos = episEspecificos.value
  setSessionData('aprForm', aprForm)
})

</script>

<style scoped>
  input[checked="true"] {
    background-color: black;
  }
</style>