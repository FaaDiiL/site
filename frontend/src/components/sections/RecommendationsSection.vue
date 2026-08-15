<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t, tm } = useI18n()

const items = tm('recommendations.items') as Array<{
  quote: string
  name: string
  role: string
}>
</script>

<template>
  <SectionWrapper id="recommendations">
    <div class="relative z-10">
      <div class="reveal mb-12">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          07
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('recommendations.title') }}
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
          <span class="text-3xl gradient-text font-heading font-bold" aria-hidden="true">"</span>
          <blockquote class="mt-2 mb-4 italic" style="color: var(--text-muted)">
            {{ item.quote }}
          </blockquote>
          <footer class="text-sm font-semibold" style="color: var(--text)">
            {{ item.name }}
            <span class="font-normal" style="color: var(--text-muted)"> · {{ item.role }}</span>
          </footer>
        </GlassCard>
      </div>
    </div>
  </SectionWrapper>
</template>
