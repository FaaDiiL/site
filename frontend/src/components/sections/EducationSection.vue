<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t, tm } = useI18n()

const items = tm('education.items') as Array<{
  degree: string
  school: string
  year: string
  description: string
}>
</script>

<template>
  <SectionWrapper id="education" style="background: var(--bg-2)">
    <div class="relative z-10">
      <div class="reveal mb-12">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          04
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('education.title') }}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <GlassCard
          v-for="(item, i) in items"
          :key="i"
          tag="article"
          class="reveal"
          :class="`reveal-delay-${Math.min(i + 1, 4)}`"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
              style="background: rgba(0,153,230,0.12)"
              aria-hidden="true"
            >
              🎓
            </div>
            <div>
              <h3 class="font-heading font-semibold m-0" style="font-family: var(--font-heading); color: var(--text)">
                {{ item.degree }}
              </h3>
              <p class="text-sm mt-1 m-0" style="color: var(--accent-mid)">
                {{ item.school }}
              </p>
              <p class="text-xs mt-2 m-0" style="color: var(--text-muted)">
                {{ item.year }} · {{ item.description }}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </SectionWrapper>
</template>
