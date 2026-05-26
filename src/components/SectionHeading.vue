<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <header class="section-heading">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>
