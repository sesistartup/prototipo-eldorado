<template>
  <div class="w-full my-4 flex h-14 rounded-xl border-2 border-gray-200 px-2 pt-1 text-[#385c48]" :class="{'bg-[#faf7c1]' : isSigned}">
    <div class="w-9/12 text-left">
      <h3 class="whitespace-nowrap">{{ signatureName }}</h3>
      <div class="text-xs mt-auto leading-6">{{ signatureDateAndTime }}</div>
    </div>
    <div class="w-3/12 h-full border-l-2 leading-[40px] border-gray-200 text-xs" @click="$emit('openmodal')">
      {{ textIfSignedOrNot }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
  // eslint-disable-next-line no-undef
  const props = defineProps({
    signatureName: String,
    signatureDate: String,
    signatureTime: String,
    isSigned: Boolean
  })
  const signatureDateAndTime = computed(() => {
    return `${props.signatureDate} - ${props.signatureTime}`
  })
  const textIfSignedOrNot = computed(() => {
    return props.isSigned ? 'Assinado' : 'Assinar'
  })
</script>