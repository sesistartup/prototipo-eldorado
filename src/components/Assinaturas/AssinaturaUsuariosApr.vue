<template>
    <FormLabel
      title="ASSINATURAS"
      class="mt-14 mb-4 flex justify-between items-center"
    >
      <button id="add-user-signature" class="text-white rounded-xl w-32 h-10 leading-10 bg-[#385c48] drop-shadow-lg text-right px-4" @click="openSignatureModal()" :disabled="isVisualizingApr()">Adicionar</button>
    </FormLabel>
  <div id="signature-box" class="h-[400px] w-5/6 rounded-md bg-white border-white border-2 py-2 px-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400 overflow-auto">
    <div v-if="assinaturaUsuarios.length > 0">
      <AssinaturaView
        v-for="(signature, index) in assinaturaUsuarios"
        :key="index"
        :title="signature.title"
        :first-bottom-info="signature.firstBottomInfo"
        :second-bottom-info="signature.secondBottomInfo"
        :is-signed="false"
      />
    </div>
  </div>
  <ModalIncluirAssinaturaUsuario
    :is-visible="isModalVisible"
    @hidding="isModalVisible = false"
    @include="setNewSignature($event)"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
import FormLabel from '../FormLabel.vue';
import { isVisualizingApr } from '@/utils/isVisualizingApr';
import ModalIncluirAssinaturaUsuario from '@/components/Modal/ModalIncluirAssinaturaUsuario.vue'
import AssinaturaView from './AssinaturaView.vue';

const isModalVisible = ref(false)
function openSignatureModal() {
  isModalVisible.value = true
}

const assinaturaUsuarios = ref([])
function setNewSignature(e) {
  assinaturaUsuarios.value.push({
    title: e.nome,
    firstBottomInfo: e.empresa,
    secondBottomInfo: e.funcao,
    isSigned: false
  })
}
// TODO: make this component implement signature pad
onMounted(() => {
  const aprForm = getSessionData('aprForm')
  if (aprForm.assinaturaUsuarios) assinaturaUsuarios.value = [ ...aprForm.assinaturaUsuarios ]
})
onBeforeUnmount(() => {
  const aprForm = getSessionData('aprForm')
  aprForm.assinaturaUsuarios = assinaturaUsuarios.value
  setSessionData('aprForm', aprForm)
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