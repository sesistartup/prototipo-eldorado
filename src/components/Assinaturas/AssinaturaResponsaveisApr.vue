<template>
  <FormLabel
    title="ASSINATURAS RESPONSÁVEIS"
    class="mt-14 mb-4 flex justify-between items-center"
  />
  <div class="h-[400px] w-full drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400 overflow-auto">
    <div class="h-[320px] w-5/6 rounded-md bg-white border-white border-2 py-2 px-4 mx-auto">
      <AssinaturaView v-for="(assinatura, role) in assinaturas" :key="role"
        :id="'assinatura-' + role"
        :title="assinatura.name"
        :first-bottom-info="assinatura.date"
        :second-bottom-info="assinatura.time"
        :is-signed="assinatura.isSigned"
        @openmodal="checkRole(role)"
      />
    </div>
  </div>
  <ModalAssinaturaResposavel
    v-if="isModalVisible"
    :is-visible="isModalVisible"
    @hidding="isModalVisible = false"
    @assinar-apr="markSignature($event)"
  />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import FormLabel from '../FormLabel.vue';
import ModalAssinaturaResposavel from '@/components/Modal/ModalAssinaturaResposavel.vue'
import AssinaturaView from './AssinaturaView.vue';
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
import { isVisualizingApr } from '@/utils/isVisualizingApr';

const isModalVisible = ref(false)

const assinaturas = reactive([
  {
    name: 'Emitente',
    date: '01/01/2022',
    time: '00h00',
    isSigned: false
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
    isSigned: false
  },
  {
    name: 'Auditoria HST Eldorado',
    date: '01/01/2022',
    time: '00h00',
    isSigned: false
  }
])

const markSignature = (e) => {
  const isEmitente = getSessionData('isEmitente')
  const dateTime = new Date()
  const date = dateTime.toLocaleDateString('pt-br')
  const time = dateTime.toLocaleTimeString('pt-br')

  const payload = {
    signature: e,
    signatureInfo: {
      date: date,
      time: time,
      isSigned: true
    }
  }
  setSessionData('assinaturaResponsavel', payload)

  if (isEmitente) {
    assinaturas[0].isSigned = true
    assinaturas[0].date = date
    assinaturas[0].time = time
  } else {
    const userData = getSessionData('user')
    assinaturas[userData.userRole].isSigned = true
    assinaturas[userData.userRole].date = date
    assinaturas[userData.userRole].time = time
  }
  isModalVisible.value = false
}

const checkRole = (role) => {
  const isEmitente = sessionStorage.getItem('isEmitente')
  const userData = getSessionData('user')
  if (role === 0 && isEmitente) isModalVisible.value = true
  else if (role === userData.userRole) isModalVisible.value = true
  else {
    glowRole(userData.userRole)
  }
}
const glowRole = (role) => {
  const correctRole = document.querySelector(`#assinatura-${role}`)
  console.log(correctRole)
  correctRole.classList.add('!border-green-400')
  setTimeout(() => {
    correctRole.classList.remove('!border-green-400')
  }, 2000);
}
onMounted(() => {
  if (isVisualizingApr()) {
    const fetchedSignatures = getSessionData('assinaturaResponsavel')
    for (const signature of fetchedSignatures) {
      if (signature.signatureData) {
    assinaturas[signature.userRole].isSigned = true
    assinaturas[signature.userRole].date = signature.signatureData.signatureInfo.date
    assinaturas[signature.userRole].time = signature.signatureData.signatureInfo.time
      }
    }
  }
})
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