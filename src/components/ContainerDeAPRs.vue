<template>
  <FormLabel
    title="APRs Emitidas"
    class="mr-auto mt-5"
  />
  <div class="flex flex-wrap items-start justify-around bg-transparent w-full max-h-[400px] overflow-auto rounded-md p-4 drop-shadow-lg">
    <button v-for="(apr, index) in aprsArray" :key="index" class="button-neutral-action bg-white mx-2 w-32 h-40 border-2 border-gray-300" @click="visualizeApr(apr)">APR Nº{{ aprName(apr) }}</button>
  </div>
</template>

<script setup>
import FormLabel from '@/components/FormLabel.vue'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

  const router = useRouter()
  const aprsArray = ref([])
  const getAllAprsIds = async () => {
    const response = await fetch("https://demo-eldorado.loca.lt/apr/getIds", {
      headers: {
        "Content-Type": "application/json",
        "Bypass-Tunnel-Reminder": "Hi tunnel"
      },
    });
    if (response.status === 200) {
      aprsArray.value = await response.json()
    }
  }
  const aprName = (aprId) => {
    let size = 0
    if (!isNaN(aprId)) {
      size = aprId.toString().length
    } else {
      size = aprId.length
    }
    
    if (3 - size === 0) {
      return aprId
    } else {
      const rest = 3 - size
      let response = aprId
      for (let zero = 0; zero < rest; zero++) {
        response = '0' + response
      }
      return response
    }
  }
  const visualizeApr = (aprId) => {
    router.push({ name: 'apr', query: { isVisualizing: true, id: aprId }})
  }
  onMounted( async () => {
    await getAllAprsIds()
  })
</script>