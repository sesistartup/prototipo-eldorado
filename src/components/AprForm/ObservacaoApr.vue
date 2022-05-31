<template>
  <textarea class="h-[400px] w-5/6 rounded-md border-white border-2 p-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" v-model="observacaoApr"></textarea>
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';

const observacaoApr = ref('')
onMounted(() => {
  disableTextarea()
  const aprForm = getSessionData('aprForm')
  if (aprForm.observacaoApr) observacaoApr.value = aprForm.observacaoApr
})
onBeforeUnmount(() => {
  const aprForm = getSessionData('aprForm')
  aprForm.observacaoApr = observacaoApr.value
  setSessionData('aprForm', aprForm)
})
</script>