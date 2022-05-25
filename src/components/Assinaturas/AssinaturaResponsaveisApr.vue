<template>
    <FormLabel
      title="ASSINATURAS RESPONSÁVEIS"
      class="mt-14 mb-4 flex justify-between items-center"
    />
  <div class="h-[400px] w-full drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400 overflow-auto">
    <div class="h-[320px] rounded-md bg-white border-white border-2 py-2 px-4 ">
      <AssinaturaView v-for="(assinatura, index) in assinaturas" :key="index"
        :signatureName="assinatura.name"
        :signatureDate="assinatura.date"
        :signatureTime="assinatura.time"
        :isSigned="assinatura.isSigned"
        @openmodal="isModalVisible = true"
      />
    </div>
  </div>
  <ModalAssinaturaResposavel
    :is-visible="isModalVisible"
    @hidding="isModalVisible = false"
  />
</template>

<script setup>
import FormLabel from '../FormLabel.vue';
import ModalAssinaturaResposavel from '@/components/Modal/ModalAssinaturaResposavel.vue'
import { reactive, ref } from 'vue'
import AssinaturaView from './AssinaturaView.vue';

const isModalVisible = ref(false)
const assinaturas = reactive([
  {
    name: 'Emitente',
    date: '01/01/2022',
    time: '00h00',
    isSigned: true
  },
  {
    name: 'Responsável atividade',
    date: '01/01/2022',
    time: '00h00',
    isSigned: false
  },
  {
    name: 'Responsável Área',
    date: '01/01/2022',
    time: '00h00',
    isSigned: true
  },
  {
    name: 'Auditoria HST Eldorado',
    date: '01/01/2022',
    time: '00h00',
    isSigned: false
  }
])
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