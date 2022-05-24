<template>
  <div class="flex flex-col justify-between h-[400px] w-full drop-shadow-lg overflow-auto">
    <div v-for="(ferramenta, index) in ferramentasDedicadas" :key="index" id="check-container" class="h-12 std-input-field bg-white border-white drop-shadow-xl relative">
      <CheckItem v-if="ferramenta.isChecked" />
      <input type="checkbox" :name="extractIdFromName(ferramenta.name)" :id="extractIdFromName(ferramenta.name)" v-model="ferramenta.isChecked" :value="true">
      <label :for="extractIdFromName(ferramenta.name)">{{ ferramenta.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
import { isVisualizingApr } from '@/utils/isVisualizingApr'
import { extractIdFromName } from '@/utils/extractIdFromName';
import { ref } from 'vue';
import CheckItem from '../GraphicUtils/CheckItem.vue';
styleCheckboxGroup(isVisualizingApr())

const ferramentasDedicadas = ref([
  {
    name: 'Chaves Isoladas VDE',
    isChecked: false
  },
  {
    name: 'Multímetro CAT 3',
    isChecked: false
  },
  {
    name: 'Detector de Tensão',
    isChecked: false
  },
  {
    name: 'Megohmetro',
    isChecked: false
  },
  {
    name: 'Microhmimetro',
    isChecked: false
  },
  {
    name: 'Osciloscópio',
    isChecked: false
  },
  {
    name: 'Analisador de Energia',
    isChecked: false
  },
  {
    name: 'Fasímetro',
    isChecked: false
  },
  {
    name: 'HI POT',
    isChecked: false
  },
  {
    name: 'Alicate Amperímetro',
    isChecked: false
  },
  {
    name: 'TTR',
    isChecked: false
  }
])
</script>