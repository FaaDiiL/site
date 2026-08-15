<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  label: string
  icon?: string
}>()

function isUrl(icon: string) {
  return icon.startsWith('http') || icon.startsWith('/')
}
</script>

<template>
  <span
    class="glass inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 cursor-default select-none"
    style="color: var(--text)"
  >
    <img
      v-if="icon && isUrl(icon)"
      :src="icon"
      :alt="label"
      class="w-4 h-4 object-contain shrink-0"
      aria-hidden="true"
    />
    <Icon
      v-else-if="icon"
      :icon="icon"
      class="text-lg shrink-0"
      aria-hidden="true"
    />
    {{ label }}
  </span>
</template>
