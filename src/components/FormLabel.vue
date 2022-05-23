<template>
  <button class="bg-[#FAE84E] text-[#183723] h-14 w-72 rounded-lg drop-shadow-xl font-semibold text-left px-4" >{{ title }}</button>
</template>

<script setup>
  // eslint-disable-next-line no-undef
  defineProps({
    title: {
      type: String,
      required: true,
      default: ''
    },
    emittedEvent: {
      type: String,
      required: false,
      default: null
    }
  })
</script>

<style scoped>

</style>