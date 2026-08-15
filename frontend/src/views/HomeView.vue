<script setup lang="ts">
import { onMounted } from 'vue'
import { useReveal } from '@/composables/useReveal'

import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import CertificationsSection from '@/components/sections/CertificationsSection.vue'
import RecommendationsSection from '@/components/sections/RecommendationsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useReveal()

onMounted(() => {
  // Re-observe after route transitions
})
</script>

<template>
  <main id="main" tabindex="-1">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection />
    <CertificationsSection />
    <RecommendationsSection />
    <ContactSection />
  </main>
</template>
