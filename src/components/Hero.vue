<script setup>
import Button from './Button.vue'

defineProps({
  hero: { type: Object, required: true },
  site: { type: Object, required: true },
})
</script>

<template>
  <section class="section hero">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="hero__eyebrow">{{ hero.eyebrow }}</p>
        <h1 class="hero__title">{{ hero.headline }}</h1>
        <p class="hero__sub">{{ hero.subheadline }}</p>
        <div class="hero__actions">
          <Button variant="primary" :href="site.primaryCta.href">
            {{ site.primaryCta.label }}
          </Button>
          <Button variant="secondary" :href="site.secondaryCta.href">
            {{ site.secondaryCta.label }}
          </Button>
        </div>
      </div>

      <ul class="hero__stats">
        <li v-for="stat in hero.stats" :key="stat.label" class="hero__stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 3rem;
}

.hero__grid {
  display: grid;
  gap: 2.5rem;
}

.hero__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent);
}

.hero__title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-h);
}

.hero__sub {
  margin: 0;
  max-width: 36rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text);
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero__stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.hero__stat {
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  text-align: center;
  background: #fafafa;
}

.hero__stat strong {
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-h);
}

.hero__stat span {
  font-size: 0.75rem;
  color: var(--text);
}

@media (min-width: 768px) {
  .hero {
    padding-top: 4rem;
  }

  .hero__grid {
    grid-template-columns: 1.4fr 1fr;
    align-items: center;
  }

  .hero__actions {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .hero__stats {
    grid-template-columns: 1fr;
  }
}
</style>
