<template>
  <div class="flex flex-col items-center bg-white w-full h-[500px] rounded-md p-4 drop-shadow-lg">
    <button class="std-button button-neutral-action w-40" @click="$router.push({ name: 'apr', query: { isVisualizing: true, id: 'soon' }})">APR 1</button>
  </div>
</template>