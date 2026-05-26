<script setup>
import { ref } from 'vue'
import SectionHeading from './SectionHeading.vue'

const props = defineProps({
  library: { type: Object, required: true },
})

const activeTab = ref(props.library.tabs[0]?.id ?? '')
</script>

<template>
  <section :id="library.id" class="section">
    <div class="container">
      <SectionHeading :title="library.title" :subtitle="library.subtitle" />

      <div class="library__tabs" role="tablist">
        <button
          v-for="tab in library.tabs"
          :key="tab.id"
          type="button"
          role="tab"
          class="library__tab"
          :class="{ 'library__tab--active': activeTab === tab.id }"
          :aria-selected="activeTab === tab.id"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
          <span>{{ tab.count }}</span>
        </button>
      </div>

      <article
        v-for="tab in library.tabs"
        v-show="activeTab === tab.id"
        :key="tab.id"
        class="card library__panel"
      >
        <h3>{{ tab.headline }}</h3>
        <p>{{ tab.body }}</p>
        <ul class="library__previews">
          <li v-for="label in tab.previewLabels" :key="label">{{ label }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.library__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.library__tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1px solid var(--border);
  border-radius: 9999px;
  background: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-h);
  cursor: pointer;
}

.library__tab span {
  font-size: 0.75rem;
  color: var(--text);
}

.library__tab--active {
  border-color: var(--accent);
  background: var(--accent-bg);
  color: var(--accent);
}

.library__panel h3 {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-h);
}

.library__panel p {
  margin: 0 0 1.25rem;
  line-height: 1.6;
  color: var(--text);
}

.library__previews {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.library__previews li {
  padding: 2rem 1rem;
  border: 1px dashed var(--border);
  border-radius: 0.5rem;
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text);
  background: #fafafa;
}
</style>
