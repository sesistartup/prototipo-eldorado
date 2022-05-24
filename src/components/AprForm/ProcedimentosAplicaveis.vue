<template>
  <div class="flex flex-col justify-between h-[400px] w-full drop-shadow-lg overflow-auto">
    <div v-for="(procedimento, index) in procedimentosAplicaveis" :key="index" id="check-container" class="h-12 std-input-field bg-white border-white drop-shadow-xl relative">
      <CheckItem v-if="procedimento.isChecked" />
      <input type="checkbox" :name="extractIdFromName(procedimento.name)" :id="extractIdFromName(procedimento.name)" v-model="procedimento.isChecked" :value="true">
      <label :for="extractIdFromName(procedimento.name)">{{ procedimento.name }}</label>
    </div>
    <!-- <div id="check-container">
      <input type="checkbox" name="check-nr10-eletrica" id="check-nr10-eletrica">
      <label for="check-nr10-eletrica">NR 10 - Elétrica</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr11-pta" id="check-nr11-pta">
      <label for="check-nr11-pta">NR 11 - PTA</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr11-empilhadeira" id="check-nr11-empilhadeira">
      <label for="check-nr11-empilhadeira">NR 11 - Empilhadeira</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr33-espaco-confinado" id="check-nr33-espaco-confinado">
      <label for="check-nr33-espaco-confinado">NR 33 - Espaço Confinado</label>
    </div>
    <div id="check-container">
      <input type="checkbox" name="check-nr35-trabalho-altura" id="check-nr35-trabalho-altura">
      <label for="check-nr35-trabalho-altura">NR 35 - Trabalho Altura</label>
    </div> -->
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
import { isVisualizingApr } from '@/utils/isVisualizingApr'
import { extractIdFromName } from '@/utils/extractIdFromName';
import { ref } from 'vue';
import CheckItem from '../GraphicUtils/CheckItem.vue';
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
</script>