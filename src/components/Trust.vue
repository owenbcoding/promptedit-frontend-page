<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
  trust: { type: Object, required: true },
})
</script>

<template>
  <section :id="trust.id" class="section">
    <div class="container">
      <SectionHeading :title="trust.title" />

      <div class="stat-grid">
        <div v-for="stat in trust.stats" :key="stat.label" class="stat-card">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>

      <div class="trust__quotes">
        <blockquote
          v-for="item in trust.testimonials"
          :key="item.name"
          class="card trust__quote"
        >
          <p>"{{ item.quote }}"</p>
          <footer>
            <strong>{{ item.name }}</strong>
            <span>{{ item.role }}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust__quotes {
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
}

.trust__quote p {
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-h);
}

.trust__quote footer {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.trust__quote footer strong {
  font-size: 0.9375rem;
  color: var(--text-h);
}

.trust__quote footer span {
  font-size: 0.8125rem;
  color: var(--text);
}

@media (min-width: 768px) {
  .trust__quotes {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
