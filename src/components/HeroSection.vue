<script setup>
import { ref } from "vue";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import vueLogo from "../assets/vue.svg";
</script>

<template>
  <!-- Section wrapper -->
  <section class="px-4 py-16 md:px-8 lg:py-24">
    <!-- Container -->
    <div class="mx-auto max-w-6xl"></div>
  </section>
  <!-- Tool card grid -->
  <div
    class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
  >
    <!-- Primary button -->
    <a class="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-white font-medium hover:bg-violet-700">
      Get Started
    </a>
    <!-- Secondary button -->
    <a class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-violet-600 font-medium hover:bg-violet-50 border border-violet-600">
      Learn More
    </a>
  </div>
</template>
