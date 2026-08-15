<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t } = useI18n()

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#42b883',
  'C#': '#178600',
  Java: '#b07219',
  Lua: '#000080',
}

const projects = [
  {
    name: 'Note App — Vue 3',
    description: 'Full-stack note app with authentication, GraphQL and NHost. Create, edit and delete notes in real time.',
    language: 'Vue',
    stars: 0,
    url: 'https://github.com/FaaDiiL/Note_App-Vue3',
  },
  {
    name: 'Large Scale Apps — Vue 3',
    description: 'Coding along with the book "Large Scale Apps with Vue 3 & TypeScript" — enterprise architecture patterns.',
    language: 'Vue',
    stars: 0,
    url: 'https://github.com/FaaDiiL/large-scale-apps-my-vue3-project',
  },
  {
    name: 'site',
    description: 'Personal website built with Next.js and TypeScript — this very site you are visiting.',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/FaaDiiL/site',
  },
  {
    name: 'PokeDex',
    description: 'Work test — a PokéDex built with TypeScript fetching data from the PokéAPI.',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/FaaDiiL/PokeDex',
  },
  {
    name: 'aspNetCore101',
    description: 'Learning ASP.NET Core — backend fundamentals with C# and .NET.',
    language: 'C#',
    stars: 1,
    url: 'https://github.com/FaaDiiL/aspNetCore101',
  },
  {
    name: 'JavaScript30',
    description: '30 JavaScript projects in 30 days — vanilla JS challenges covering DOM, APIs, Canvas and more.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/FaaDiiL/JavaScript30',
  },
]
</script>

<template>
  <SectionWrapper id="projects">
    <div
      class="bg-blob w-96 h-96 bottom-0 right-0 translate-x-1/2"
      style="background: radial-gradient(circle, #00d4ff15, transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10">
      <div class="reveal mb-4">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          05
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('projects.title') }}
        </h2>
      </div>
      <p class="reveal reveal-delay-1 mb-12 text-lg" style="color: var(--text-muted)">
        {{ t('projects.subtitle') }}
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="(project, i) in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="reveal no-underline group"
          :class="`reveal-delay-${Math.min(i + 1, 4)}`"
          :aria-label="`${project.name} — ${t('accessibility.external_link')}`"
        >
          <GlassCard tag="article" class="h-full flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
            <div>
              <div class="flex items-start justify-between mb-3">
                <span aria-hidden="true" class="text-2xl">📁</span>
                <span
                  class="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style="color: var(--accent-mid)"
                  aria-hidden="true"
                >↗</span>
              </div>
              <h3
                class="font-heading font-semibold mb-2 text-base"
                style="font-family: var(--font-heading); color: var(--text)"
              >
                {{ project.name }}
              </h3>
              <p class="text-sm leading-relaxed m-0" style="color: var(--text-muted)">
                {{ project.description }}
              </p>
            </div>

            <div class="flex items-center gap-3 mt-4 pt-4" style="border-top: 1px solid var(--border)">
              <span class="flex items-center gap-1.5 text-xs" style="color: var(--text-muted)">
                <span
                  class="w-3 h-3 rounded-full"
                  :style="{ background: languageColors[project.language] ?? '#888' }"
                  aria-hidden="true"
                />
                {{ project.language }}
              </span>
              <span v-if="project.stars > 0" class="flex items-center gap-1 text-xs" style="color: var(--text-muted)">
                ⭐ {{ project.stars }}
              </span>
            </div>
          </GlassCard>
        </a>
      </div>

      <!-- View all -->
      <div class="reveal mt-10 text-center">
        <a
          href="https://github.com/FaaDiiL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline"
        >
          {{ t('projects.view_all') }}
          <span class="sr-only">{{ t('accessibility.external_link') }}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </SectionWrapper>
</template>
