<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t, tm } = useI18n()

const stats = [
  { key: 'about.years', labelKey: 'about.years_label' },
  { key: 'about.repos', labelKey: 'about.repos_label' },
  { key: 'about.role', labelKey: 'about.role_label' },
]
</script>

<template>
  <SectionWrapper id="about">
    <!-- Background blob -->
    <div
      class="bg-blob w-96 h-96 top-0 left-0 -translate-x-1/2"
      style="background: radial-gradient(circle, #0066ff18, transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10">
      <!-- Heading -->
      <div class="reveal mb-12">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          01
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('about.title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Bio -->
        <div class="reveal reveal-delay-1">
          <GlassCard>
            <p class="text-lg leading-relaxed m-0" style="color: var(--text-muted)">
              {{ t('about.bio') }}
            </p>
          </GlassCard>

          <!-- Current focus -->
          <GlassCard class="mt-6">
            <h3 class="font-heading font-semibold mb-4" style="font-family: var(--font-heading); color: var(--text)">
              {{ t('about.focus_title') }}
            </h3>
            <ul class="m-0 p-0 list-none space-y-2">
              <li
                v-for="(item, i) in (tm('about.focus') as string[])"
                :key="i"
                class="flex items-center gap-3 text-sm"
                style="color: var(--text-muted)"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style="background: linear-gradient(135deg, var(--accent-start), var(--accent-end))"
                  aria-hidden="true"
                />
                {{ item }}
              </li>
            </ul>
          </GlassCard>
</div>

        <!-- Stats -->
        <div class="reveal reveal-delay-2 flex flex-col gap-4">
          <GlassCard
            v-for="stat in stats"
            :key="stat.key"
            class="text-center"
          >
            <p
              class="font-heading font-bold text-5xl mb-1 gradient-text"
              style="font-family: var(--font-heading)"
            >
              {{ t(stat.key) }}
            </p>
            <p class="text-sm m-0" style="color: var(--text-muted)">
              {{ t(stat.labelKey) }}
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
