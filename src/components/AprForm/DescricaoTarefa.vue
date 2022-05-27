<template>
  <textarea class="h-[400px] w-full p-4 rounded-md border-2 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" placeholder="Descrição da tarefa" v-model="descricaoTarefa" />
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
import { onBeforeUnmount, onMounted, ref } from 'vue'

const descricaoTarefa = ref('')
onMounted(() => {
  disableTextarea()
  const storedData = getSessionData('descricaoTarefa')
  if (storedData) descricaoTarefa.value = storedData
})
onBeforeUnmount(() => {
  setSessionData('descricaoTarefa', descricaoTarefa.value)
})
</script>