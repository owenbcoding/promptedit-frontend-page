<script setup>
import SectionHeading from './SectionHeading.vue'
import Button from './Button.vue'

defineProps({
  pricing: { type: Object, required: true },
})
</script>

<template>
  <section :id="pricing.id" class="section section-muted">
    <div class="container">
      <SectionHeading :title="pricing.title" :subtitle="pricing.subtitle" />

      <div class="pricing__grid">
        <article
          v-for="plan in pricing.plans"
          :key="plan.id"
          class="card pricing__plan"
          :class="{ 'card-highlight': plan.highlighted }"
        >
          <span v-if="plan.badge" class="badge">{{ plan.badge }}</span>
          <h3>{{ plan.name }}</h3>
          <p class="pricing__price">
            <strong>{{ plan.price }}</strong>
            <span>{{ plan.priceDetail }}</span>
          </p>
          <p class="pricing__credits">{{ plan.creditValue }}</p>
          <p class="pricing__savings">{{ plan.savings }}</p>
          <ul>
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <Button
            :variant="plan.highlighted ? 'primary' : 'secondary'"
            :href="plan.cta.href"
          >
            {{ plan.cta.label }}
          </Button>
        </article>
      </div>

      <aside v-if="pricing.guaranteeBlock" class="card pricing__guarantee">
        <p class="pricing__guarantee-eyebrow">{{ pricing.guaranteeBlock.subheadline }}</p>
        <h3 class="pricing__guarantee-title">{{ pricing.guaranteeBlock.headline }}</h3>
        <p class="pricing__guarantee-details">{{ pricing.guaranteeBlock.details }}</p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.pricing__grid {
  display: grid;
  gap: 1rem;
}

.pricing__plan {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pricing__plan h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-h);
}

.pricing__price {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.pricing__price strong {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-h);
}

.pricing__price span {
  font-size: 0.875rem;
  color: var(--text);
}

.pricing__credits,
.pricing__savings {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--text);
}

.pricing__savings {
  color: var(--accent);
  font-weight: 600;
}

.pricing__plan ul {
  margin: 0.5rem 0 1rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.pricing__plan li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-h);
}

.pricing__plan li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.pricing__guarantee {
  margin: 2rem auto 0;
  max-width: 36rem;
  text-align: center;
  border-color: var(--accent-border);
  background: var(--accent-bg);
}

.pricing__guarantee-eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.pricing__guarantee-title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-h);
}

.pricing__guarantee-details {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text);
}

@media (min-width: 768px) {
  .pricing__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
}
</style>
