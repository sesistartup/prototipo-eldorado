<template>
  <div class="flex flex-col justify-between items-center h-[400px] w-full overflow-auto">
    <div v-for="(procedimento, index) in procedimentosAplicaveis" :key="index" id="check-container" class="h-12 std-input-field w-5/6 bg-white border-white drop-shadow-xl relative">
      <CheckItem v-if="procedimento.isChecked" />
      <input type="checkbox" :name="extractIdFromName(procedimento.name)" :id="extractIdFromName(procedimento.name)" v-model="procedimento.isChecked" :value="true">
      <label :for="extractIdFromName(procedimento.name)">{{ procedimento.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { styleCheckboxGroup, markCheckedBox } from '@/utils/checkboxGroupStyle'
import { isVisualizingApr } from '@/utils/isVisualizingApr'
import { extractIdFromName } from '@/utils/extractIdFromName';
import CheckItem from '../GraphicUtils/CheckItem.vue';
import { setSessionData, getSessionData } from '@/utils/sessionStoreUtils';
styleCheckboxGroup(isVisualizingApr())

const procedimentosAplicaveis = ref([
  {
    name: 'SEP - Elétrica',
    isChecked: false
  },
  {
    name: 'NR 10 - Elétrica',
    isChecked: false
  },
  {
    name: 'NR 11 - PTA',
    isChecked: false
  },
  {
    name: 'NR 11 - Empilhadeira',
    isChecked: false
  },
  {
    name: 'NR 33 - Espaço Confinado',
    isChecked: false
  },
  {
    name: 'NR 35 - Trabalho Altura',
    isChecked: false
  }
])
onMounted(() => {

  const aprForm = getSessionData('aprForm')
  if (aprForm.procedimentosAplicaveis) procedimentosAplicaveis.value = [ ...aprForm.procedimentosAplicaveis ]
  
  markCheckedBox(procedimentosAplicaveis.value)
})
onBeforeUnmount(() => {
  const aprForm = getSessionData('aprForm')
  aprForm.procedimentosAplicaveis = procedimentosAplicaveis.value
  setSessionData('aprForm', aprForm)
})
</script>