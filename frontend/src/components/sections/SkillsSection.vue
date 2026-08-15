<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t } = useI18n()

const skillGroups = [
  {
    categoryKey: 'skills.categories.frontend',
    icon: 'logos:vitejs',
    skills: [
      { label: 'TypeScript', icon: 'logos:typescript-icon' },
      { label: 'Vue 3', icon: 'logos:vue' },
      { label: 'React', icon: 'logos:react' },
      { label: 'Quasar', icon: '/quasar-dark.png' },
      { label: 'Vite', icon: 'logos:vitejs' },
      { label: 'HTML5', icon: 'logos:html-5' },
      { label: 'CSS3', icon: 'logos:css-3' },
    ],
  },
  {
    categoryKey: 'skills.categories.backend',
    icon: 'logos:nodejs-icon',
    skills: [
      { label: 'Node.js', icon: 'logos:nodejs-icon' },
      { label: 'NestJS', icon: 'logos:nestjs' },
      { label: 'MongoDB', icon: 'logos:mongodb-icon' },
      { label: 'MySQL', icon: 'logos:mysql' },
    ],
  },
  {
    categoryKey: 'skills.categories.cloud',
    icon: 'logos:aws',
    skills: [
      { label: 'AWS', icon: 'logos:aws' },
      { label: 'Docker', icon: 'logos:docker-icon' },
      { label: 'GitHub Actions', icon: 'logos:github-actions' },
      { label: 'CloudFormation', icon: 'logos:aws-cloudformation' },
      { label: 'Linux', icon: 'logos:linux-tux' },
    ],
  },
  {
    categoryKey: 'skills.categories.tools',
    icon: 'logos:git-icon',
    skills: [
      { label: 'Git', icon: 'logos:git-icon' },
      { label: 'Figma', icon: 'logos:figma' },
      { label: 'Cursor', icon: 'simple-icons:cursor' },
      { label: 'Ollama', icon: 'simple-icons:ollama' },
    ],
  },
]
</script>

<template>
  <SectionWrapper id="skills" style="background: var(--bg-2)">
    <div class="relative z-10">
      <!-- Heading -->
      <div class="reveal mb-4">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          02
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('skills.title') }}
        </h2>
      </div>
      <p class="reveal reveal-delay-1 mb-12 text-lg" style="color: var(--text-muted)">
        {{ t('skills.subtitle') }}
      </p>

      <div class="grid sm:grid-cols-2 gap-6">
        <GlassCard
          v-for="(group, gi) in skillGroups"
          :key="group.categoryKey"
          class="reveal"
          :class="`reveal-delay-${gi + 1}`"
        >
          <h3
            class="font-heading font-semibold mb-5 flex items-center gap-2"
            style="font-family: var(--font-heading); color: var(--text)"
          >
            <Icon :icon="group.icon" class="text-xl" aria-hidden="true" />
            {{ t(group.categoryKey) }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <SkillBadge
              v-for="skill in group.skills"
              :key="skill.label"
              :label="skill.label"
              :icon="skill.icon"
            />
          </div>
        </GlassCard>
      </div>
    </div>
  </SectionWrapper>
</template>
