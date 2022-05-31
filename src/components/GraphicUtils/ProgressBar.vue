<template>
  <div class="w-5/6 flex max-w-xl">
    <div v-for="(number, index) in 4" :key="index" class="flex w-full relative">
      <div class="bg-transparent h-4 w-full rounded-md" :class="{'bg-[#C5D529]' : madeProgress(number)}" />
      <div class="bg-white rounded-full border-2 border-white h-4 w-4 absolute -right-1 z-10" :class="{'bg-[#3E6C4D]' : madeProgress(number)}" />
    </div>
  </div>
</template>

<script setup>
  // eslint-disable-next-line no-undef
  const props = defineProps({
    page: {
      type: Number,
      required: true,
      default: 0
    },
    totalPages: {
      type: Number,
      required: true,
      default: 4
    }
  })
  const madeProgress = (n) => {
    return props.page / props.totalPages >= n / 4
  }
</script>