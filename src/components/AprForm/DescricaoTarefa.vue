<template>
  <textarea class="h-[400px] w-full p-4 rounded-md border-2 drop-shadow-lg disabled:bg-gray-200 disabled:border-gray-400" name="descricao-tarefa" id="descricao-tarefa" cols="30" rows="10" placeholder="Descrição da tarefa"></textarea>
</template>

<script setup>
import { disableTextarea } from '@/utils/disableTextarea'
import { onMounted } from '@vue/runtime-core'
onMounted(() => {
  disableTextarea()
})
</script>