<script setup>
import Button from './Button.vue'

defineProps({
  finalCta: { type: Object, required: true },
})
</script>

<template>
  <section class="section final-cta">
    <div class="container final-cta__inner">
      <h2>{{ finalCta.title }}</h2>
      <p>{{ finalCta.subtitle }}</p>
      <Button variant="primary" :href="finalCta.cta.href">
        {{ finalCta.cta.label }}
      </Button>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  background: var(--accent-bg);
  border-top: 1px solid var(--border);
}

.final-cta__inner {
  text-align: center;
  max-width: 36rem;
}

.final-cta__inner h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-h);
}

.final-cta__inner p {
  margin: 0 0 1.5rem;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--text);
}
</style>
