<template>
  <div class="bg-[#FAE84E] text-[#183723] h-14 w-72 rounded-xl drop-shadow-xl font-semibold text-left px-4 leading-[3.5rem]">
    {{ title }}
    <slot />
  </div>
</template>

<script setup>

  // eslint-disable-next-line no-undef
  defineProps({
    title: {
      type: String,
      required: true,
      default: ''
    },
    eventToEmit: {
      type: String,
      required: false,
      default: null
    }
  })
</script>