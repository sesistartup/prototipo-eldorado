<template>
  <section id="modal-nova-assinatura" class="bg-white rounded-xl text-[#385c48] font-semibold z-50 p-4 flex flex-col items-start absolute m-auto w-11/12 max-w-[560px]" :class="{'hidden' : !props.isVisible}">
    <button id="close-modal-btn" class="w-8 h-6 ml-auto" @click="hideSelf()" />
    <label for="nome" class="px-2">Nome:</label>
    <input type="text" name="nome" id="nome" placeholder="José da Silva" class="border-2 rounded-xl border-gray px-2 w-full mb-4 font-normal text-[#385c48]" v-model="newSignature.nome">
    <label for="empresa" class="px-2">Empresa:</label>
    <select name="empresa" id="empresa" class="border-2 rounded-xl border-gray px-2 w-full mb-4 font-normal text-[#385c48]" v-model="newSignature.empresa">
      <option value="Eldorado" checked>Eldorado</option>
      <option value="Subcontratada">Subcontratada</option>
    </select>
    <!-- <input type="text" name="empresa" id="empresa" placeholder="Eldorado Brasil" class="border-2 rounded-xl border-gray px-2 w-full mb-4 font-normal text-[#385c48]" v-model="newSignature.empresa"> -->
    <label for="funcao" class="px-2">Função:</label>
    <input type="text" name="funcao" id="funcao" placeholder="Operador" class="border-2 rounded-xl border-gray px-2 w-full font-normal text-[#385c48]" v-model="newSignature.funcao">
    <footer class="w-full flex justify-between mt-4">
      <button class="std-button bg-[#9db3a4] text-white border-0 w-3/6 mr-2" @click="hideSelf()">Cancelar</button>
      <button class="std-button bg-[#385c48] text-white border-0 w-3/6 ml-2" @click="includeSignature()">Adicionar</button>
    </footer>
  </section>
  <BlackoutBg v-if="props.isVisible" @hide="hideSelf()" />
</template>

<script setup>
import BlackoutBg from '../GraphicUtils/BlackoutBg.vue';
import { ref } from 'vue'
// eslint-disable-next-line no-undef
const emit = defineEmits('hidding', 'include')

// eslint-disable-next-line no-undef
const props = defineProps({
  isVisible: Boolean
})

function hideSelf() {
  newSignature.value.nome = ''
  newSignature.value.empresa = ''
  newSignature.value.funcao = ''
  emit('hidding')
  const modal = document.querySelector('#modal-nova-assinatura')
  modal.classList.add('hidden')
}

const newSignature =  ref({
  nome: '',
  empresa: '',
  funcao: ''
})
function includeSignature() {
  emit('include', newSignature.value)
  hideSelf()
}
</script>

<style scoped>
  #close-modal-btn {
    background-image: url('@/assets/icons/close-btn.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
  }
</style>