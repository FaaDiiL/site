<script setup lang="ts">
defineProps<{
  tag?: string
  class?: string
}>()
</script>

<template>
  <component :is="tag ?? 'div'" class="glass rounded-2xl p-6" v-bind="$attrs">
    <slot />
  </component>
</template>
