<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const year = new Date().getFullYear()

function toggleLang() {
  locale.value = locale.value === 'sv' ? 'en' : 'sv'
  document.documentElement.lang = locale.value
}
</script>

<template>
  <footer
    class="border-t py-8"
    style="border-color: var(--border); color: var(--text-muted)"
    role="contentinfo"
  >
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
      <p class="m-0">
        © {{ year }} Fadil Al Farhan · {{ t('footer.rights') }}
      </p>
      <div class="flex items-center gap-4">
        <span>{{ t('footer.built') }} Vue 3 + Vite</span>
        <button
          class="underline hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer text-sm"
          style="color: var(--text-muted)"
          @click="toggleLang"
        >
          {{ locale === 'sv' ? 'English' : 'Svenska' }}
        </button>
      </div>
    </div>
  </footer>
</template>
