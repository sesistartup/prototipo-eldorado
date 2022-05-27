<template>
  <textarea class="h-[400px] w-full rounded-md border-white border-2 p-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" v-model="consequenciasDescricao"></textarea>
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { onMounted, onBeforeUnmount, ref } from '@vue/runtime-core'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';

const consequenciasDescricao = ref('')
onMounted(() => {
  disableTextarea()
  const storedData = getSessionData('consequenciasDescricao')
  if (storedData) consequenciasDescricao.value = storedData
})
onBeforeUnmount(() => {
  setSessionData('consequenciasDescricao', consequenciasDescricao.value)
})
</script>