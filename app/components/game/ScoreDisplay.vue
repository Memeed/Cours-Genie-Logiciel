<script setup lang="ts">
defineProps<{
  label: string;
  value: number;
}>()
</script>

<template>
  <div class="flex flex-col items-center bg-gray-400 dark:bg-gray-600 rounded-lg px-4 py-2 min-w-20">
    <span class="text-xs text-gray-200 uppercase font-medium">{{ label }}</span>
    <span class="text-xl sm:text-2xl font-bold text-white">{{ value }}</span>
  </div>
</template>
