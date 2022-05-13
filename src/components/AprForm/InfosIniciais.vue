<template>
  <div class="flex flex-col items-start justify-between bg-white h-[500px] w-5/6 rounded-md p-4 drop-shadow-lg">
    <label for="contratada">Contratada</label>
    <input type="text" id="contratada">
    <label for="subcontratada">Subcontratada</label>
    <input type="text" id="subcontratada">
    <label for="data-elaboracao">Data de Elaboração</label>
    <input type="date" id="data-elaboracao">
    <label for="data-inicio">Data de Início</label>
    <input type="date" id="data-inicio">
    <label for="data-termino">Data de Término</label>
    <input type="text" id="data-termino">
    <label for="area">Área</label>
    <input type="text" id="area">
    <label for="revalidacao">Revalidação</label>
    <input type="text" id="revalidacao">
  </div>
</template>

<script setup>
import { getAprState } from '@/utils/getAprState';
import { onMounted } from 'vue';

  onMounted(() => {
    const visualizando = getAprState()
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
      input.classList.add('std-input-field')
      input.classList.add('w-full')
      input.classList.add('mt-0')
      input.classList.add('disabled:bg-gray-200')
      if (visualizando) input.setAttribute('disabled', true)
    })
    const labels = document.querySelectorAll('label')
    labels.forEach((label) => {
      label.classList.add('px-4')
    })
  })
</script>