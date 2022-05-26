<template>
  <div class="flex flex-wrap items-start justify-around bg-transparent h-[400px] w-full overflow-auto rounded-md">
    <input type="text" id="contratada" v-model="infosIniciais.contratada" placeholder="Contratada">
    <input type="text" id="subcontratada" v-model="infosIniciais.subContratada" placeholder="Sub contratada">
    <div id="data-elaboracao-container" class="mt-0 std-input-field labeled-input-container w-full border-white bg-white drop-shadow-xl h-12">
      <label for="data-elaboracao" class="border-r-2 border-gray w-[4rem] h-full flex items-center justify-center text-gray-400">
        <img v-if="infosIniciais.dataElaboracao.length < 1" class="w-[1.5rem]" src="@/assets/apr/white-calendar.png" alt="account icon">
        <img v-else class="w-[1.5rem]" src="@/assets/apr/dark-green-calendar.png" alt="account icon">
      </label>
      <input class="bg-transparent border-none h-full text-black focus:ring-0 focus:outline-0" type="date" name="data-elaboracao" id="data-elaboracao" placeholder="Data elaboração" v-model="infosIniciais.dataElaboracao" @click="focusInputContainer('data-elaboracao-container', '!border-orange-300')">
    </div>
    <div id="data-inicio-container" class="mt-0 std-input-field labeled-input-container w-full border-white bg-white drop-shadow-xl h-12">
      <label for="data-inicio" class="border-r-2 border-gray w-[4rem] h-full flex items-center justify-center text-gray-400">
        <img v-if="infosIniciais.dataInicio.length < 1" class="w-[1.5rem]" src="@/assets/apr/white-calendar.png" alt="account icon">
        <img v-else class="w-[1.5rem]" src="@/assets/apr/dark-green-calendar.png" alt="account icon">
      </label>
      <input class="bg-transparent border-none h-full text-black focus:ring-0 focus:outline-0" type="date" name="data-inicio" id="data-inicio" placeholder="Data início" v-model="infosIniciais.dataInicio" @click="focusInputContainer('data-inicio-container', '!border-orange-300')">
    </div>
    <div id="data-termino-container" class="mt-0 std-input-field labeled-input-container w-full border-white bg-white drop-shadow-xl h-12">
      <label for="data-termino" class="border-r-2 border-gray w-[4rem] h-full flex items-center justify-center text-gray-400">
        <img v-if="infosIniciais.dataTermino.length < 1" class="w-[1.5rem]" src="@/assets/apr/white-calendar.png" alt="account icon">
        <img v-else class="w-[1.5rem]" src="@/assets/apr/dark-green-calendar.png" alt="account icon">
      </label>
      <input class="bg-transparent border-none h-full text-black focus:ring-0 focus:outline-0" type="date" name="data-termino" id="data-termino" placeholder="Data término" v-model="infosIniciais.dataTermino" @click="focusInputContainer('data-termino-container', '!border-orange-300')">
    </div>
    <input type="text" id="area" v-model="infosIniciais.area" placeholder="Área">
    <input type="text" id="revalidacao" v-model="infosIniciais.revalidacao" placeholder="Revalidação">
  </div>
</template>

<script setup>
import { isVisualizingApr } from '@/utils/isVisualizingApr';
import { focusInputContainer } from '@/utils/focusInputContainer';
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
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
    input.classList.add('!mt-0')
    input.classList.add('h-12')
    input.classList.add('px-4')
    input.classList.add('border-white')
    input.classList.add('disabled:bg-gray-200')
    if (isVisualizingApr()) input.setAttribute('disabled', true)
  })
  const labels = document.querySelectorAll('label')
  labels.forEach((label) => {
    label.classList.add('px-4')
    label.classList.add('mr-auto')
  })
  
  const storedData = getSessionData('infosIniciais')
  if (storedData) infosIniciais.value = { ...storedData}
})
onBeforeUnmount(() => {
  setSessionData('infosIniciais', infosIniciais.value)
})
</script>