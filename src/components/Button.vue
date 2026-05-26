<script setup>
defineProps({
  href: { type: String, required: true },
  variant: { type: String, default: 'primary' },
})
</script>

<template>
  <a
    :href="href"
    class="btn"
    :class="variant === 'secondary' ? 'btn-secondary' : 'btn-primary'"
  >
    <slot />
  </a>
</template>
