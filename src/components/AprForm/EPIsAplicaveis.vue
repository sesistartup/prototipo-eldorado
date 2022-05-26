<template>
  <div class="flex flex-col justify-between h-[400px] w-full overflow-auto drop-shadow-lg">
    <div v-for="(epi, index) in episAplicaveis" :key="index" id="check-container" class="h-12 std-input-field bg-white border-white drop-shadow-xl relative">
      <CheckItem v-if="epi.isChecked === true" />
      <input type="checkbox" :name="epi.id" :id="epi.id" v-model="epi.isChecked" :value="true">
      <label :for="epi.id">{{ epi.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { styleCheckboxGroup, markCheckedBox } from '@/utils/checkboxGroupStyle'
import { isVisualizingApr } from '@/utils/isVisualizingApr'
import { setSessionData, getSessionData } from '@/utils/sessionStoreUtils';
import CheckItem from '@/components/GraphicUtils/CheckItem.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue';
styleCheckboxGroup(isVisualizingApr())

// eslint-disable-next-line no-undef
const props = defineProps({
  episAplicaveis: Array,
  formId: Number
})
let episAplicaveis = ref(props.episAplicaveis)

onMounted(() => {
  const sessionData = getSessionData(`epis-aplicaveis${props.formId}`)
  if (sessionData) episAplicaveis.value = [ ...sessionData ]
  markCheckedBox(episAplicaveis.value)
})
onBeforeUnmount(() => {
  sessionStorage.removeItem(`epis-aplicaveis${props.formId}`)
  setSessionData(`epis-aplicaveis${props.formId}`, episAplicaveis.value)
})
</script>