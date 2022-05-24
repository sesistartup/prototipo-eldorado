<template>
    <FormLabel
      title="ASSINATURAS"
      class="mt-14 mb-4 flex justify-between items-center"
    >
      <button id="add-user-signature" class="text-white rounded-xl w-32 h-10 leading-10 bg-[#385c48] drop-shadow-lg text-right px-4" @click="insertNewSignature()">Adicionar</button>
    </FormLabel>
  <div class="h-[400px] w-full rounded-md bg-white border-white border-2 py-2 px-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400 overflow-auto" />
  <ModalIncluirAssinaturaUsuario id="modal-assinatura" class="hidden" @hide-modal="hideModal()" />
</template>

<script setup>
import FormLabel from '../FormLabel.vue';
import ModalIncluirAssinaturaUsuario from '@/components/Modal/ModalIncluirAssinaturaUsuario.vue'

function insertNewSignature() {
  const body = document.querySelector('body')
  const div = document.createElement('div')
  const modal = document.querySelector('#modal-assinatura')
  div.classList.add('fixed')
  div.classList.add('top-0')
  div.classList.add('h-screen')
  div.classList.add('w-screen')
  div.classList.add('bg-stone-600/80')
  div.classList.add('z-0')
  div.addEventListener('click', () => {
    modal.classList.add('hidden')
    body.removeChild(div)
  })
  div.setAttribute('id', 'opaque-blackout')
  body.append(div)
  modal.classList.remove('hidden')
}
function hideModal() {
  const modal = document.querySelector('#modal-assinatura')
  modal.classList.add('hidden')
  const body = document.querySelector('body')
  const blackout = document.querySelector('#opaque-blackout')
  body.removeChild(blackout)
}
</script>

<style scoped>
  #add-user-signature {
    background-image: url('@/assets/icons/plus.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 10px;
    background-size: 20px;
  }
</style>