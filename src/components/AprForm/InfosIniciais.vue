<template>
  <div class="flex flex-wrap items-start justify-around bg-transparent h-[400px] w-5/6 overflow-auto rounded-md">
    <input type="text" id="contratada" v-model="infosIniciais.contratada" placeholder="Contratada">
    <input type="text" id="subcontratada" v-model="infosIniciais.subContratada" placeholder="Sub contratada">
    <div id="data-elaboracao-container" class="relative mt-0 std-input-field labeled-input-container w-full border-white bg-white drop-shadow-xl h-12">
      <label for="data-elaboracao" class="border-r-2 border-gray w-[4rem] h-full flex items-center justify-center text-gray-400">
        <img v-if="infosIniciais.dataElaboracao.length < 1" class="w-[1.5rem]" src="@/assets/apr/white-calendar.png" alt="account icon">
        <img v-else class="w-[1.5rem]" src="@/assets/apr/dark-green-calendar.png" alt="account icon">
      </label>
      <div name="fake-date-placeholder" id="fake-data-elab" class="absolute left-[4.5rem] h-8 leading-7 text-gray-400 bg-white top-2 z-10" @click="setFocus('data-elaboracao')">Data Elaboração</div>
      <input class="bg-transparent border-none h-full text-black focus:ring-0 focus:outline-0" type="date" name="data-elaboracao" id="data-elaboracao" placeholder="Data elaboração" v-model="infosIniciais.dataElaboracao" @click="focusInputContainer('data-elaboracao-container', '!border-orange-300')" @focus="changeDisplayFakeLabel('fake-data-elab')" @focusout="changeDisplayFakeLabel('fake-data-elab')">
    </div>
    <div id="data-inicio-container" class="relative mt-0 std-input-field labeled-input-container w-full border-white bg-white drop-shadow-xl h-12">
      <label for="data-inicio" class="border-r-2 border-gray w-[4rem] h-full flex items-center justify-center text-gray-400">
        <img v-if="infosIniciais.dataInicio.length < 1" class="w-[1.5rem]" src="@/assets/apr/white-calendar.png" alt="account icon">
        <img v-else class="w-[1.5rem]" src="@/assets/apr/dark-green-calendar.png" alt="account icon">
      </label>
      <div name="fake-date-placeholder" id="fake-data-inicio" class="absolute left-[4.5rem] h-8 leading-7 text-gray-400 bg-white top-2 z-10 w-32 text-left" @click="setFocus('data-inicio')">Data Início</div>
      <input class="bg-transparent border-none h-full text-black focus:ring-0 focus:outline-0" type="date" name="data-inicio" id="data-inicio" placeholder="Data início" v-model="infosIniciais.dataInicio" @click="focusInputContainer('data-inicio-container', '!border-orange-300')" @focus="changeDisplayFakeLabel('fake-data-inicio')" @focusout="changeDisplayFakeLabel('fake-data-inicio')">
    </div>
    <div id="data-termino-container" class="mt-0 std-input-field labeled-input-container w-full border-white bg-white drop-shadow-xl h-12">
      <label for="data-termino" class="border-r-2 border-gray w-[4rem] h-full flex items-center justify-center text-gray-400">
        <img v-if="infosIniciais.dataTermino.length < 1" class="w-[1.5rem]" src="@/assets/apr/white-calendar.png" alt="account icon">
        <img v-else class="w-[1.5rem]" src="@/assets/apr/dark-green-calendar.png" alt="account icon">
      </label>
      <div name="fake-date-placeholder" id="fake-data-termino" class="absolute left-[4.5rem] h-8 leading-7 text-gray-400 bg-white top-2 z-10 w-32 text-left" @click="setFocus('data-termino')">Data Término</div>
      <input class="bg-transparent border-none h-full text-black focus:ring-0 focus:outline-0" type="date" name="data-termino" id="data-termino" placeholder="Data término" v-model="infosIniciais.dataTermino" @click="focusInputContainer('data-termino-container', '!border-orange-300')" @focus="changeDisplayFakeLabel('fake-data-termino')" @focusout="changeDisplayFakeLabel('fake-data-termino')">
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


const changeDisplayFakeLabel = (e) => {
  const fake = document.querySelector(`#${e}`)
  if (fake.classList.contains('hidden')) fake.classList.remove('hidden')
  else fake.classList.add('hidden')
}
const setFocus = (e) => {
  const fake = document.querySelector(`#${e}`)
  fake.focus()
}
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
    input.classList.add('drop-shadow-xl')
    if (input.type === 'text') input.classList.add('disabled:bg-gray-200')
    if (isVisualizingApr()) {
      if (input.type === 'date') {
        const parent = input.parentElement
        parent.classList.add('bg-gray-200')
        const fakes = document.querySelectorAll('div[name="fake-date-placeholder"]')
        fakes.forEach((fake) => {
          fake.classList.add('hidden')
        })
      }
      input.setAttribute('disabled', true)
    }
  })
  const labels = document.querySelectorAll('label')
  labels.forEach((label) => {
    label.classList.add('px-4')
    label.classList.add('mr-auto')
  })

  const aprForm = getSessionData('aprForm')
  if (aprForm.infosIniciais) infosIniciais.value = { ...aprForm.infosIniciais }
})
onBeforeUnmount(() => {
  const aprForm = getSessionData('aprForm')
  aprForm.infosIniciais = infosIniciais.value
  setSessionData('aprForm', aprForm)
})
</script>