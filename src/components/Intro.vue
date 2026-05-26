<script setup>
defineProps({
  intro: { type: Object, required: true },
})
</script>

<template>
  <section :id="intro.id" class="section section-muted">
    <div class="container intro">
      <h2 class="intro__title">{{ intro.title }}</h2>
      <div class="intro__grid">
        <div class="intro__copy">
          <p v-for="(paragraph, i) in intro.paragraphs" :key="i">{{ paragraph }}</p>
        </div>
        <ul class="intro__benefits">
          <li v-for="benefit in intro.benefits" :key="benefit">{{ benefit }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro__title {
  margin: 0 0 1.5rem;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-h);
}

.intro__grid {
  display: grid;
  gap: 2rem;
}

.intro__copy p {
  margin: 0 0 1rem;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--text);
}

.intro__copy p:last-child {
  margin-bottom: 0;
}

.intro__benefits {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.intro__benefits li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--text-h);
}

.intro__benefits li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--accent);
}

@media (min-width: 768px) {
  .intro__grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
</style>
