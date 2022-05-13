<template>
  <h3>EPI's Aplicáveis</h3>
  <div class="flex flex-col justify-around h-[500px] w-5/6 bg-white drop-shadow-lg rounded-md px-4">
    <div v-for="(epi, index) in props.episAplicaveis" :key="index" id="check-container">
      <input type="checkbox" :name="epi.id" :id="epi.id">
      <label :for="epi.id">{{ epi.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup } from '@/utils/checkboxGroupStyle'
styleCheckboxGroup()

// eslint-disable-next-line no-undef
const props = defineProps({
  episAplicaveis: Array
})
</script>