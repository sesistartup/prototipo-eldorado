<template>
  <textarea class="h-[400px] w-full rounded-md border-white border-2 p-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" v-model="etapasAtividade"></textarea>
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
import { onBeforeUnmount, onMounted, ref } from 'vue'

const etapasAtividade = ref('')
onMounted(() => {
  disableTextarea()
  const storedData = getSessionData('etapasAtividade')
  if (storedData) etapasAtividade.value = storedData
})
onBeforeUnmount(() => {
  setSessionData('etapasAtividade', etapasAtividade.value)
})
</script>