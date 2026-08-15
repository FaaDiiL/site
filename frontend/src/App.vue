<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const { locale } = useI18n()

watch(locale, (lang) => {
  document.documentElement.lang = lang
}, { immediate: true })
</script>

<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column">
    <AppHeader />
    <RouterView style="flex: 1" />
    <AppFooter />
  </div>
</template>
