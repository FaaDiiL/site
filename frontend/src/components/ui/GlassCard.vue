<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  tag?: string
}>()
</script>

<template>
  <component :is="tag ?? 'div'" class="glass rounded-2xl p-6" v-bind="$attrs">
    <slot />
  </component>
</template>
