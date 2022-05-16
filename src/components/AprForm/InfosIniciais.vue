<template>
  <div class="flex flex-col items-start justify-between bg-white h-[500px] w-5/6 rounded-md p-4 drop-shadow-lg">
    <label for="contratada">Contratada</label>
    <input type="text" id="contratada" v-model="infosIniciais.contratada">
    <label for="subcontratada">Subcontratada</label>
    <input type="text" id="subcontratada" v-model="infosIniciais.subContratada">
    <label for="data-elaboracao">Data de Elaboração</label>
    <input type="date" id="data-elaboracao" v-model="infosIniciais.dataElaboracao">
    <label for="data-inicio">Data de Início</label>
    <input type="date" id="data-inicio" v-model="infosIniciais.dataInicio">
    <label for="data-termino">Data de Término</label>
    <input type="date" id="data-termino" v-model="infosIniciais.dataTermino">
    <label for="area">Área</label>
    <input type="text" id="area" v-model="infosIniciais.area">
    <label for="revalidacao">Revalidação</label>
    <input type="text" id="revalidacao" v-model="infosIniciais.revalidacao">
  </div>
</template>

<script setup>
import { isVisualizingApr } from '@/utils/isVisualizingApr';
import { onMounted, onBeforeUnmount, ref } from 'vue';

// TODO: handle data throught rendering (consider pinia)
let infosIniciais = ref({
  contratada: '',
  subContratada: '',
  dataElaboracao: '',
  dataInicio: '',
  dataTermino: '',
  area: '',
  revalidacao: ''
})

onMounted(() => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.classList.add('std-input-field')
    input.classList.add('w-full')
    input.classList.add('mt-0')
    input.classList.add('disabled:bg-gray-200')
    if (isVisualizingApr()) input.setAttribute('disabled', true)
  })
  const labels = document.querySelectorAll('label')
  labels.forEach((label) => {
    label.classList.add('px-4')
  })
  if (!isVisualizingApr()) {
    const sessionData = JSON.parse(sessionStorage.getItem('infosIniciais'))
    if (sessionData) infosIniciais.value = { ...sessionData }
  }
})
onBeforeUnmount(() => {
  sessionStorage.removeItem('infosIniciais')
  sessionStorage.setItem('infosIniciais', JSON.stringify(infosIniciais.value))
})
</script>