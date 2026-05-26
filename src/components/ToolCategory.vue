<script setup>
defineProps({
  category: { type: Object, required: true },
})
</script>

<template>
  <article class="tool-category" :class="{ 'tool-category--wide': category.layout === 'wide' }">
    <header class="tool-category__header">
      <span class="tool-category__icon" aria-hidden="true">{{ category.icon }}</span>
      <div>
        <h3>{{ category.title }}</h3>
        <p>{{ category.subtitle }}</p>
      </div>
    </header>

    <ul class="tool-category__grid">
      <li v-for="item in category.useCases" :key="item.title" class="card tool-category__item">
        <strong>{{ item.title }}</strong>
        <span>{{ item.description }}</span>
      </li>
    </ul>

    <p v-if="category.featuredModels?.length" class="tool-category__models">
      <span>Models:</span>
      {{ category.featuredModels.join(' · ') }}
    </p>
  </article>
</template>

<style scoped>
.tool-category {
  margin-bottom: 2.5rem;
}

.tool-category:last-child {
  margin-bottom: 0;
}

.tool-category__header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.tool-category__icon {
  font-size: 1.75rem;
  line-height: 1;
}

.tool-category__header h3 {
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-h);
}

.tool-category__header p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--text);
}

.tool-category__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tool-category--wide .tool-category__grid {
  grid-template-columns: 1fr;
}

.tool-category__item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.tool-category__item strong {
  font-size: 0.9375rem;
  color: var(--text-h);
}

.tool-category__item span {
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--text);
}

.tool-category__models {
  margin: 1rem 0 0;
  font-size: 0.8125rem;
  color: var(--text);
}

.tool-category__models span {
  font-weight: 600;
  color: var(--text-h);
}

@media (min-width: 768px) {
  .tool-category__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
