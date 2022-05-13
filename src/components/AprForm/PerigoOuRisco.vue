<template>
  <label for="perigo-ou-risco">Perigo ou Risco</label>
  <textarea class="h-[500px] w-5/6 rounded-md border-green-400 border-2 p-4 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10"></textarea>
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { onMounted } from '@vue/runtime-core'
onMounted(() => {
  disableTextarea()
})
</script>