<template>
    <FormLabel
      title="ASSINATURAS"
      class="mt-14 mb-4 flex justify-between items-center"
    >
      <button id="add-user-signature" class="text-white rounded-xl w-32 h-10 leading-10 bg-[#385c48] drop-shadow-lg text-right px-4" @click="openSignatureModal()">Adicionar</button>
    </FormLabel>
  <div class="h-[400px] w-full rounded-md bg-white border-white border-2 py-2 px-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400 overflow-auto" />
  <ModalIncluirAssinaturaUsuario
    :is-visible="isModalVisible"
    @hidding="isModalVisible = false"
  />
</template>

<script setup>
import FormLabel from '../FormLabel.vue';
import ModalIncluirAssinaturaUsuario from '@/components/Modal/ModalIncluirAssinaturaUsuario.vue'
import { ref } from 'vue'

const isModalVisible = ref(false)
function openSignatureModal() {
  isModalVisible.value = true
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