<template>
  <section id="modal-nova-assinatura" class="bg-white rounded-xl text-[#385c48] font-semibold z-50 p-4 flex flex-col items-start absolute m-auto w-11/12 max-w-[560px]" :class="{'hidden' : !props.isVisible}">
    <button id="close-modal-btn" class="w-8 h-6 ml-auto mb-2" @click="hideSelf()" />
    <h3 class="text-[#385c48] font-light">Assinatura:</h3>
    <canvas class="rounded-xl border-2 border-gray drop-shadow-lg w-full mx-auto min-h-[10rem] max-h-[12rem]" id="signature-field" />
    <div class="w-11/12 max-w-[560px] relative bottom-6 mx-auto">
      <div class="w-3/6 h-1 bg-gradient-to-tl from-slate-400 absolute left-0" />
      <div class="w-3/6 h-1 bg-gradient-to-tr from-slate-400 absolute right-0" />
    </div>
    <footer class="w-full flex justify-between mt-4 z-10">
      <button class="std-button bg-[#9db3a4] text-white border-0 w-3/6 mr-2" @click="clearSignaturePad()">Limpar</button>
      <button class="std-button bg-[#385c48] text-white border-0 w-3/6 ml-2" @click="assinarApr()">Assinar</button>
    </footer>
  </section>
  <BlackoutBg v-if="props.isVisible" @hide="hideSelf()" />
</template>

<script setup>
import BlackoutBg from '../GraphicUtils/BlackoutBg.vue';
import { getSessionData } from '@/utils/sessionStoreUtils';
import SignaturePad from 'signature_pad';
import { onMounted, onBeforeUnmount } from 'vue';

// eslint-disable-next-line no-undef
const emit = defineEmits('hidding', 'assinar-apr')

// eslint-disable-next-line no-undef
const props = defineProps({
  isVisible: Boolean
})

function hideSelf() {
  emit('hidding')
  signaturePad.clear()
  const modal = document.querySelector('#modal-nova-assinatura')
  modal.classList.add('hidden')
}
let signaturePad
const injectSignaturePad = () => {
  const canvas = document.querySelector('#signature-field')
  const signaturePad = new SignaturePad(canvas)
  signaturePad.addEventListener('beginStroke', { once: true })
  return signaturePad
}
const clearSignaturePad = () => {
  sessionStorage.removeItem('assinaturaResponsavel')
  signaturePad.clear()
}

const assinarApr = () => {
  if (!signaturePad.isEmpty()) {
    const signature = signaturePad.toData()
    const isEmitente = getSessionData('isEmitente')
    if (!isEmitente) {
      // build request to sign existing apr
    }
    // setSessionData('assinaturaResponsavel', signature)
    emit('assinar-apr', signature)
  } else {
    alert('Você precisa assinar a apr')
  }
}

function resizeCanvas() {
  const ratio =  Math.max(window.devicePixelRatio);
  const canvas = document.querySelector('canvas');
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
  signaturePad.clear();
}

onMounted(() => {
  signaturePad = injectSignaturePad()
  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()
  const storedData = getSessionData('assinaturaResponsavel')
  if (storedData) signaturePad.fromData(storedData)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
  #close-modal-btn {
    background-image: url('@/assets/icons/close-btn.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
  }
</style>