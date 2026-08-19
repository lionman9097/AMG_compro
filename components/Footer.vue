<template>
  <!-- Ft2 Inline single line footer -->
  <footer class="border-t border-zinc-200 bg-white">
    <div class="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-display text-sm font-semibold text-zinc-900">PT Anugerah Megah Perkasa</span>
        <span class="text-xs text-zinc-400 hidden sm:inline">&mdash; Official Distributor of WACKER & DURABUILD</span>
      </div>
      <p class="text-xs text-zinc-400">
        &copy; {{ new Date().getFullYear() }} PT Anugerah Megah Perkasa. All rights reserved.
      </p>
    </div>
  </footer>
</template>
