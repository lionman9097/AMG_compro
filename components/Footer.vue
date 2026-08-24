<template>
  <!-- Ft2 Inline single line footer -->
  <footer class="border-t border-zinc-200 bg-white">
    <div class="container-site py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
      <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
        <span class="font-display text-xs sm:text-sm font-semibold text-zinc-900">PT Anugerah Megah Perkasa</span>
        <span class="text-[11px] sm:text-xs text-zinc-400 hidden sm:inline">&mdash; Official Distributor of WACKER, DURABUILD &amp; SUPER SHIELD</span>
      </div>
      <p class="text-[11px] sm:text-xs text-zinc-400">
        &copy; {{ new Date().getFullYear() }} PT Anugerah Megah Perkasa. All rights reserved.
      </p>
    </div>
  </footer>
</template>
