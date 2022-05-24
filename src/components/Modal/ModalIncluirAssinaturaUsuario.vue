<template>
  <section class="bg-white rounded-xl text-[#385c48] font-semibold z-10 p-4 flex flex-col items-start absolute m-auto w-11/12 max-w-[560px]">
    <button id="close-modal-btn" class="w-8 h-6 ml-auto" @click="hideModal()" />
    <label for="nome" class="px-2">Nome:</label>
    <input type="text" name="nome" id="nome" placeholder="José da Silva" class="border-2 rounded-xl border-gray px-2 w-full mb-4 font-normal text-[#385c48]">
    <label for="empresa" class="px-2">Empresa:</label>
    <input type="text" name="empresa" id="empresa" placeholder="Eldorado Brasil" class="border-2 rounded-xl border-gray px-2 w-full mb-4 font-normal text-[#385c48]">
    <label for="funcao" class="px-2">Função:</label>
    <input type="text" name="funcao" id="funcao" placeholder="Operador" class="border-2 rounded-xl border-gray px-2 w-full font-normal text-[#385c48]">
    <footer class="w-full flex justify-between mt-4">
      <button class="std-button bg-[#9db3a4] text-white border-0 w-3/6 mr-2" @click="hideModal()">Cancelar</button>
      <button class="std-button bg-[#385c48] text-white border-0 w-3/6 ml-2">Adicionar</button>
    </footer>
  </section>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emit = defineEmits('hide-modal')
function hideModal() {
  emit('hide-modal')
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