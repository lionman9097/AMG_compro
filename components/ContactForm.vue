<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <div>
      <label for="name" class="block text-[13px] font-medium text-zinc-700 mb-1.5">Full Name</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-2.5 rounded-lg border text-[15px] transition-colors duration-150 focus:outline-none"
        :class="errors.name ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-zinc-300 bg-white focus:border-cobalt-accent focus:ring-2 focus:ring-cobalt-focus'"
        placeholder="John Doe"
      />
      <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label for="email" class="block text-[13px] font-medium text-zinc-700 mb-1.5">Email Address</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-2.5 rounded-lg border text-[15px] transition-colors duration-150 focus:outline-none"
          :class="errors.email ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-zinc-300 bg-white focus:border-cobalt-accent focus:ring-2 focus:ring-cobalt-focus'"
          placeholder="john@company.com"
        />
        <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
      </div>
      <div>
        <label for="company" class="block text-[13px] font-medium text-zinc-700 mb-1.5">Company</label>
        <input
          id="company"
          v-model="form.company"
          type="text"
          class="w-full px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-[15px] focus:outline-none focus:border-cobalt-accent focus:ring-2 focus:ring-cobalt-focus transition-colors duration-150"
          placeholder="Your Company Ltd."
        />
      </div>
    </div>

    <div>
      <label for="message" class="block text-[13px] font-medium text-zinc-700 mb-1.5">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        required
        class="w-full px-4 py-2.5 rounded-lg border text-[15px] resize-none transition-colors duration-150 focus:outline-none"
        :class="errors.message ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-zinc-300 bg-white focus:border-cobalt-accent focus:ring-2 focus:ring-cobalt-focus'"
        placeholder="Tell us about your project and sealant requirements..."
      />
      <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
    </div>

    <button
      type="submit"
      :disabled="submitted"
      class="pill-cta-primary w-full justify-center disabled:opacity-60"
    >
      <template v-if="!submitted">Send Inquiry</template>
      <template v-else>
        <CheckCircle class="w-4 h-4" />
        Sent Successfully
      </template>
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { CheckCircle } from '@lucide/vue'

const form = reactive({ name: '', email: '', company: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

const validate = (): boolean => {
  let valid = true
  errors.name = ''; errors.email = ''; errors.message = ''
  if (!form.name.trim()) { errors.name = 'Name is required.'; valid = false }
  if (!form.email.trim()) { errors.email = 'Email is required.'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Please enter a valid email.'; valid = false }
  if (!form.message.trim()) { errors.message = 'Message is required.'; valid = false }
  return valid
}

const handleSubmit = () => {
  if (!validate()) return
  console.log('Contact form submitted:', { ...form })
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { name: '', email: '', company: '', message: '' })
  }, 4000)
}
</script>
