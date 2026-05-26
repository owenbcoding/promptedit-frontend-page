<script setup>
defineProps({
  category: { type: Object, required: true },
})
</script>

<template>
  <article class="tool-category" :class="{ 'tool-category--wide': category.layout === 'wide' }">
    <header class="tool-category__header">
      <span class="tool-category__icon" aria-hidden="true">
        <svg
          v-if="category.icon === 'image'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none" />
          <path d="m21 15-5.5-5.5a1.5 1.5 0 0 0-2.12 0L3 19" />
        </svg>
        <svg
          v-else-if="category.icon === 'video'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="m16 10 5-3v10l-5-3z" />
        </svg>
        <svg
          v-else-if="category.icon === 'audio'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 6.5a8.5 8.5 0 0 1 0 11" />
        </svg>
        <svg
          v-else-if="category.icon === 'plugins'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12 2a3 3 0 0 0-3 3v1H8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1a3 3 0 0 0 6 0v-1h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3z"
          />
        </svg>
      </span>
      <h3>{{ category.title }}</h3>
      <p>{{ category.subtitle }}</p>
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
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
}

.tool-category__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: var(--accent-bg);
  color: var(--accent);
}

.tool-category__icon svg {
  width: 1.375rem;
  height: 1.375rem;
}

.tool-category__header h3 {
  margin: 0;
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
  justify-items: center;
}

.tool-category--wide .tool-category__item {
  width: fit-content;
  max-width: 100%;
  align-items: center;
  text-align: center;
}

.tool-category--wide .tool-category__item strong,
.tool-category--wide .tool-category__item span {
  display: block;
  max-width: 42ch;
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
