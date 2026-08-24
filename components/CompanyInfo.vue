<template>
  <div class="space-y-6">
    <!-- 4 Location Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="loc in company.locations"
        :key="loc.id"
        class="p-4 rounded-xl border border-zinc-200/80 bg-white/60 hover:bg-white hover:border-zinc-300 transition-all duration-200 flex flex-col justify-between"
      >
        <div>
          <!-- Header: Title & Badge -->
          <div class="flex items-start justify-between gap-2 mb-2.5">
            <h3 class="font-display text-sm font-semibold text-zinc-900 leading-snug">
              {{ loc.title }}
            </h3>
            <span
              v-if="loc.badge"
              class="shrink-0 text-[10px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded-md border"
              :class="loc.isPrimary ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-zinc-100 text-zinc-600 border-zinc-200'"
            >
              {{ loc.badge }}
            </span>
          </div>

          <!-- Address -->
          <div class="flex items-start gap-2 text-zinc-500 mb-4">
            <MapPin class="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
            <p class="text-xs leading-relaxed text-zinc-600">
              {{ loc.address }}
            </p>
          </div>
        </div>

        <!-- Contact Actions: WhatsApp & Phone -->
        <div class="pt-3 border-t border-zinc-100 space-y-2 mt-auto">
          <!-- WhatsApp Link -->
          <a
            :href="loc.whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200/60 text-emerald-800 transition-colors duration-150 gap-2"
            :title="`Chat on WhatsApp with ${loc.title}`"
          >
            <span class="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium shrink-0">
              <MessageSquare class="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </span>
            <span class="text-[11px] sm:text-xs font-mono text-emerald-700 font-medium group-hover:underline truncate">
              {{ loc.whatsapp }}
            </span>
          </a>

          <!-- Phone Link -->
          <a
            :href="loc.phoneUrl"
            class="group flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 text-zinc-700 transition-colors duration-150 gap-2"
            :title="`Call ${loc.title}`"
          >
            <span class="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium shrink-0">
              <Phone class="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>Phone</span>
            </span>
            <span class="text-[11px] sm:text-xs font-mono text-zinc-600 font-medium group-hover:underline truncate">
              {{ loc.phone }}
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- General Inquiries & Business Hours -->
    <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
      <div class="flex items-start gap-2.5">
        <Mail class="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
        <div>
          <p class="font-medium text-zinc-700">General & Technical Email</p>
          <a
            :href="`mailto:${company.contact.email}`"
            class="text-zinc-500 hover:text-zinc-900 transition-colors duration-150 underline decoration-zinc-300 underline-offset-2"
          >
            {{ company.contact.email }}
          </a>
        </div>
      </div>

      <div class="flex items-start gap-2.5">
        <Clock class="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
        <div>
          <p class="font-medium text-zinc-700">Operating Hours</p>
          <p class="text-zinc-500">{{ company.contact.hours }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Phone, MessageSquare, Mail, Clock } from '@lucide/vue'
import { company } from '~/data/company'
</script>

