<template>
  <textarea class="h-[400px] w-5/6 p-4 rounded-md border-2 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" placeholder="Descrição da tarefa" v-model="descricaoTarefa" />
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';
import { onBeforeUnmount, onMounted, ref } from 'vue'

const descricaoTarefa = ref('')
onMounted(() => {
  disableTextarea()
  
  const aprForm = getSessionData('aprForm')
  if (aprForm.descricaoTarefa) descricaoTarefa.value = aprForm.descricaoTarefa
})
onBeforeUnmount(() => {
  const aprForm = getSessionData('aprForm')
  aprForm.descricaoTarefa = descricaoTarefa.value
  setSessionData('aprForm', aprForm)
})
</script>