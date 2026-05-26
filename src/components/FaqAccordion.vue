<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
  faq: { type: Object, required: true },
})
</script>

<template>
  <section :id="faq.id" class="section">
    <div class="container faq">
      <SectionHeading :title="faq.title" />
      <div class="faq__list">
        <details v-for="item in faq.items" :key="item.question" class="faq__item">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__list {
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq__item {
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: #fff;
  overflow: hidden;
}

.faq__item summary {
  padding: 1rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-h);
  cursor: pointer;
  list-style: none;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item p {
  margin: 0;
  padding: 0 1.25rem 1rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text);
}
</style>
