<template>
  <div class="w-full my-4 flex h-14 rounded-xl border-2 border-gray-200 text-[#385c48] hover:border-orange-300" :class="{'bg-[#faf7c1]' : isSigned}">
    <div class="w-9/12 pl-2 text-left">
      <h3 class="whitespace-nowrap font-medium pt-1 text-[0.875rem]">{{ title }}</h3>
      <div class="text-[0.5625rem] mt-auto leading-6 font-light">{{ bottomInfo }}</div>
    </div>
    <div class="w-3/12 h-full border-l-2 leading-[50px] border-gray-200 text-[0.6875rem] text-center font-light hover:cursor-pointer" @click="openModalForUserToSign()">
      {{ textIfSignedOrNot }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
  // eslint-disable-next-line no-undef
  const props = defineProps({
    title: String,
    firstBottomInfo: String,
    secondBottomInfo: String,
    isSigned: Boolean
  })
  const bottomInfo = computed(() => {
    return `${props.firstBottomInfo} - ${props.secondBottomInfo}`
  })
  const textIfSignedOrNot = computed(() => {
    return props.isSigned ? 'Assinado' : 'Assinar'
  })

  // eslint-disable-next-line no-undef
  const emit = defineEmits('openmodal')
  const openModalForUserToSign = () => {
    if (!props.isSigned) emit('openmodal')
  }
</script>