<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t, tm } = useI18n()

const items = tm('experience.items') as Array<{
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}>
</script>

<template>
  <SectionWrapper id="experience">
    <div class="relative z-10">
      <!-- Heading -->
      <div class="reveal mb-4">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          03
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('experience.title') }}
        </h2>
      </div>
      <p class="reveal reveal-delay-1 mb-12 text-lg" style="color: var(--text-muted)">
        {{ t('experience.subtitle') }}
      </p>

      <!-- Timeline -->
      <div class="relative pl-10">
        <div class="timeline-line" aria-hidden="true" />

        <article
          v-for="(item, i) in items"
          :key="i"
          class="reveal relative mb-8"
          :class="`reveal-delay-${Math.min(i + 1, 4)}`"
        >
          <div class="absolute -left-10 top-5 flex items-center justify-center">
            <div class="timeline-dot" aria-hidden="true" />
          </div>

          <GlassCard>
            <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <h3 class="font-heading font-semibold text-lg m-0" style="font-family: var(--font-heading); color: var(--text)">
                  {{ item.role }}
                </h3>
                <p class="text-sm mt-0.5 m-0" style="color: var(--accent-mid)">
                  {{ item.company }}
                </p>
              </div>
              <span
                class="text-xs font-medium px-3 py-1 rounded-full"
                style="background: var(--surface); color: var(--text-muted); border: 1px solid var(--border)"
              >
                {{ item.period }}
              </span>
            </div>

            <p class="text-sm leading-relaxed mb-4" style="color: var(--text-muted)">
              {{ item.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-lg font-medium"
                style="background: rgba(0,153,230,0.12); color: var(--accent-mid); border: 1px solid rgba(0,212,255,0.15)"
              >
                {{ tag }}
              </span>
            </div>
          </GlassCard>
        </article>
      </div>
    </div>
  </SectionWrapper>
</template>
