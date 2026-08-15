<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const menuOpen = ref(false)

function toggleLang() {
  locale.value = locale.value === 'sv' ? 'en' : 'sv'
  document.documentElement.lang = locale.value
}

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const navLinks = [
  { href: '#about', key: 'nav.about' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#contact', key: 'nav.contact' },
]
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 glass border-b"
    style="border-color: var(--border)"
    role="banner"
  >
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="/"
        class="font-heading font-bold text-lg gradient-text no-underline"
        style="font-family: var(--font-heading)"
        aria-label="Fadil Al Farhan — tillbaka till toppen"
      >
        F.
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Huvudnavigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium no-underline transition-colors duration-200 hover:opacity-80"
          style="color: var(--text-muted)"
        >
          {{ t(link.key) }}
        </a>
      </nav>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Theme toggle -->
        <button
          class="w-9 h-9 rounded-xl glass flex items-center justify-center text-base transition-transform duration-200 hover:scale-110"
          :aria-label="t('accessibility.theme_toggle')"
          :aria-pressed="isDark"
          @click="toggleTheme()"
        >
          <span aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>

        <!-- Lang toggle -->
        <button
          class="w-9 h-9 rounded-xl glass flex items-center justify-center text-xs font-bold transition-transform duration-200 hover:scale-110"
          :aria-label="t('accessibility.lang_toggle')"
          style="color: var(--text)"
          @click="toggleLang"
        >
          {{ locale === 'sv' ? 'EN' : 'SV' }}
        </button>

        <!-- Mobile menu toggle -->
        <button
          class="md:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-base transition-transform duration-200 hover:scale-110"
          :aria-label="menuOpen ? t('accessibility.menu_close') : t('accessibility.menu_open')"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span aria-hidden="true">{{ menuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <nav
        v-if="menuOpen"
        class="md:hidden px-6 pb-4 flex flex-col gap-2"
        aria-label="Mobilnavigation"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="py-3 text-sm font-medium no-underline border-b transition-colors duration-200"
          style="color: var(--text); border-color: var(--border)"
          @click="closeMenu"
        >
          {{ t(link.key) }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
