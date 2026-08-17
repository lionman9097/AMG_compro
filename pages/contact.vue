<template>
  <div>
    <!-- Page header -->
    <section class="container-site pt-40 pb-16 md:pt-48 md:pb-20">
      <div class="stat-figure text-zinc-900 tnum">
        24<span class="text-cobalt-accent">h</span>
      </div>
      <h1 class="font-display text-2xl md:text-3xl text-zinc-900 mt-4 mb-4 tracking-tight">
        Get in Touch
      </h1>
      <p class="text-zinc-500 text-lg max-w-2xl leading-relaxed">
        Response within 24 hours. Our technical team is ready to help you find the perfect sealant for your application.
      </p>
    </section>

    <!-- Two-column contact -->
    <section class="container-site border-t border-zinc-200 section-spacing">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Form -->
        <div>
          <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">Send a Message</span>
          <ContactForm />
        </div>

        <!-- Info -->
        <div>
          <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">Contact Information</span>
          <CompanyInfo />

          <hr class="hairline-rule mt-10 mb-8" />

          <p class="text-[13px] text-zinc-400 leading-relaxed">
            We typically respond within one business day. For urgent technical inquiries, please call us directly.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'
import CompanyInfo from '~/components/CompanyInfo.vue'

useHead({ title: 'Contact' })
</script>
