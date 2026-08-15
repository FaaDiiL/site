<script setup lang="ts">
defineProps<{
  id: string
  tag?: string
}>()
</script>

<template>
  <component :is="tag ?? 'section'" :id="id" class="section-wrapper">
    <div class="max-w-5xl mx-auto px-6">
      <slot />
    </div>
  </component>
</template>
