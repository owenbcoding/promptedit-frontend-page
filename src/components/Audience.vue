<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
  audience: { type: Object, required: true },
})
</script>

<template>
  <section :id="audience.id" class="section section-muted">
    <div class="container audience">
      <SectionHeading :title="audience.title" />
      <ul class="audience__list">
        <li v-for="item in audience.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.audience__list {
  max-width: 42rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.audience__list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-h);
}

.audience__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--accent);
}
</style>
