<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const roles = ['CTO', 'Full-Stack Developer', 'System Architect', 'AI-Driven Builder']
const currentRole = ref(roles[0])
const roleIndex = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  interval = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length
    currentRole.value = roles[roleIndex.value]
  }, 2800)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    aria-label="Hero"
  >
    <!-- Background blobs -->
    <div
      class="bg-blob w-[600px] h-[600px] -top-40 -right-40"
      style="background: radial-gradient(circle, #00d4ff33, transparent 70%)"
      aria-hidden="true"
    />
    <div
      class="bg-blob w-[500px] h-[500px] bottom-0 -left-32"
      style="background: radial-gradient(circle, #0066ff22, transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-3xl w-full text-center">
      <!-- Greeting -->
      <p
        class="reveal text-sm font-semibold tracking-widest uppercase mb-4"
        style="color: var(--accent-mid)"
      >
        {{ t('hero.greeting') }}
      </p>

      <!-- Name -->
      <h1
        class="reveal reveal-delay-1 font-heading font-bold mb-4"
        style="font-size: clamp(3rem, 8vw, 5.5rem); font-family: var(--font-heading); color: var(--text)"
      >
        Fadil <span class="gradient-text">Al Farhan</span>
      </h1>

      <!-- Animated role -->
      <div class="reveal reveal-delay-2 h-10 flex items-center justify-center mb-6" aria-live="polite" aria-atomic="true">
        <Transition name="role" mode="out-in">
          <span
            :key="currentRole"
            class="text-xl font-medium"
            style="color: var(--text-muted)"
          >
            {{ currentRole }}
          </span>
        </Transition>
      </div>

      <!-- Location -->
      <p class="reveal reveal-delay-3 flex items-center justify-center gap-2 mb-10" style="color: var(--text-muted)">
        <span aria-hidden="true">📍</span>
        {{ t('hero.location') }}
      </p>

      <!-- CTAs -->
      <div class="reveal reveal-delay-4 flex flex-wrap items-center justify-center gap-4">
        <a href="#contact" class="btn-gradient">
          {{ t('hero.cta_contact') }}
        </a>
        <a
          href="https://github.com/FaaDiiL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline"
        >
          {{ t('hero.cta_github') }}
          <span class="sr-only">{{ t('accessibility.external_link') }}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
      <span class="text-xs" style="color: var(--text-muted)">{{ t('hero.scroll') }}</span>
      <span class="scroll-arrow">↓</span>
    </div>
  </section>
</template>

<style scoped>
.role-enter-active,
.role-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.role-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.role-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.scroll-arrow {
  color: var(--text-muted);
  font-size: 1.25rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
</style>
