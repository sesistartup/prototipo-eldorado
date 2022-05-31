<template>
  <textarea class="h-[400px] w-5/6 rounded-md border-white border-2 p-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" v-model="medidasPreventivas"></textarea>
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { getSessionData, setSessionData } from '@/utils/sessionStoreUtils';

const medidasPreventivas = ref('')
onMounted(() => {
  disableTextarea()
  const aprForm = getSessionData('aprForm')
  if (aprForm.medidasPreventivas) medidasPreventivas.value = aprForm.medidasPreventivas
})
onBeforeUnmount(() => {
  const aprForm = getSessionData('aprForm')
  aprForm.medidasPreventivas = medidasPreventivas.value
  setSessionData('aprForm', aprForm)
})
</script>