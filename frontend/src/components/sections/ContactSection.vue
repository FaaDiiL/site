<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import GlassCard from '@/components/ui/GlassCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t } = useI18n()

const API_URL = import.meta.env.VITE_API_URL ?? ''

const form = ref({ name: '', email: '', message: '' })
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMsg = ref('')

async function submit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  status.value = 'loading'
  errorMsg.value = ''

  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value),
    })

    if (!res.ok) throw new Error()

    status.value = 'success'
    form.value = { name: '', email: '', message: '' }
  } catch {
    status.value = 'error'
    errorMsg.value = t('contact.error')
  }
}

const links = [
  {
    labelKey: 'contact.email_label',
    value: 'fadil.alfarhan@gmail.com',
    href: 'mailto:fadil.alfarhan@gmail.com',
    icon: '✉️',
    external: false,
  },
  {
    labelKey: 'contact.github_label',
    value: 'github.com/FaaDiiL',
    href: 'https://github.com/FaaDiiL',
    icon: '🐙',
    external: true,
  },
  {
    labelKey: 'contact.linkedin_label',
    value: 'linkedin.com/in/fadil-al-farhan',
    href: 'https://www.linkedin.com/in/fadil-al-farhan/',
    icon: '💼',
    external: true,
  },
]
</script>

<template>
  <SectionWrapper id="contact" style="background: var(--bg-2)">
    <div
      class="bg-blob w-96 h-96 bottom-0 left-1/2 -translate-x-1/2"
      style="background: radial-gradient(circle, #00d4ff18, transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10">
      <!-- Heading -->
      <div class="reveal mb-4">
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color: var(--accent-mid)">
          08
        </p>
        <h2 class="font-heading text-4xl font-bold" style="font-family: var(--font-heading); color: var(--text)">
          {{ t('contact.title') }}
        </h2>
      </div>
      <p class="reveal reveal-delay-1 mb-12 text-lg" style="color: var(--text-muted)">
        {{ t('contact.subtitle') }}
      </p>

      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <!-- Contact form -->
        <GlassCard tag="div" class="reveal reveal-delay-1">
          <Transition name="fade" mode="out-in">
            <!-- Success state -->
            <div v-if="status === 'success'" class="py-8 text-center">
              <div class="text-5xl mb-4">✅</div>
              <h3 class="font-heading font-semibold text-xl mb-2" style="font-family: var(--font-heading); color: var(--text)">
                {{ t('contact.success_title') }}
              </h3>
              <p style="color: var(--text-muted)">{{ t('contact.success_msg') }}</p>
              <button
                class="mt-6 btn-outline text-sm"
                @click="status = 'idle'"
              >
                {{ t('contact.send_another') }}
              </button>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="submit" novalidate>
              <div class="flex flex-col gap-5">
                <!-- Name -->
                <div>
                  <label
                    for="contact-name"
                    class="block text-sm font-medium mb-1.5"
                    style="color: var(--text)"
                  >
                    {{ t('contact.field_name') }} *
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    required
                    :placeholder="t('contact.placeholder_name')"
                    class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style="
                      background: var(--surface);
                      border: 1px solid var(--border);
                      color: var(--text);
                    "
                    :style="{ '--tw-ring-color': 'var(--accent-start)' }"
                    @focus="($event.target as HTMLElement).style.borderColor = 'var(--accent-mid)'"
                    @blur="($event.target as HTMLElement).style.borderColor = 'var(--border)'"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label
                    for="contact-email"
                    class="block text-sm font-medium mb-1.5"
                    style="color: var(--text)"
                  >
                    {{ t('contact.field_email') }} *
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    required
                    :placeholder="t('contact.placeholder_email')"
                    class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style="background: var(--surface); border: 1px solid var(--border); color: var(--text)"
                    @focus="($event.target as HTMLElement).style.borderColor = 'var(--accent-mid)'"
                    @blur="($event.target as HTMLElement).style.borderColor = 'var(--border)'"
                  />
                </div>

                <!-- Message -->
                <div>
                  <label
                    for="contact-message"
                    class="block text-sm font-medium mb-1.5"
                    style="color: var(--text)"
                  >
                    {{ t('contact.field_message') }} *
                  </label>
                  <textarea
                    id="contact-message"
                    v-model="form.message"
                    rows="5"
                    required
                    :placeholder="t('contact.placeholder_message')"
                    class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style="background: var(--surface); border: 1px solid var(--border); color: var(--text)"
                    @focus="($event.target as HTMLElement).style.borderColor = 'var(--accent-mid)'"
                    @blur="($event.target as HTMLElement).style.borderColor = 'var(--border)'"
                  />
                </div>

                <!-- Error -->
                <p
                  v-if="status === 'error'"
                  class="text-sm"
                  style="color: #ef4444"
                  role="alert"
                >
                  {{ errorMsg }}
                </p>

                <!-- Submit -->
                <button
                  type="submit"
                  class="btn-gradient justify-center"
                  :disabled="status === 'loading'"
                  :aria-busy="status === 'loading'"
                >
                  <span v-if="status === 'loading'">{{ t('contact.sending') }}…</span>
                  <span v-else>{{ t('contact.cta') }} ✉️</span>
                </button>
              </div>
            </form>
          </Transition>
        </GlassCard>

        <!-- Links -->
        <div class="reveal reveal-delay-2 flex flex-col gap-4">
          <a
            v-for="link in links"
            :key="link.labelKey"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="no-underline group"
            :aria-label="`${t(link.labelKey)}: ${link.value}${link.external ? ` — ${t('accessibility.external_link')}` : ''}`"
          >
            <GlassCard class="flex items-center gap-4 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span class="text-2xl shrink-0" aria-hidden="true">{{ link.icon }}</span>
              <div>
                <p class="text-xs font-semibold tracking-widest uppercase mb-0.5 m-0" style="color: var(--accent-mid)">
                  {{ t(link.labelKey) }}
                </p>
                <p class="text-sm m-0" style="color: var(--text-muted)">{{ link.value }}</p>
              </div>
              <span class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--accent-mid)" aria-hidden="true">↗</span>
            </GlassCard>
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}
</style>
