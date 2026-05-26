<script setup>
import logo from '../assets/images/Promptedit-logo.png'

defineProps({
  site: { type: Object, required: true },
  footer: { type: Object, required: true },
})
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <img :src="logo" :alt="site.name" class="site-footer__logo" width="140" height="26" />
      <p class="site-footer__tagline">{{ site.tagline }}</p>
      <nav class="site-footer__links" aria-label="Footer">
        <a v-for="link in footer.links" :key="link.label" :href="link.href">
          {{ link.label }}
        </a>
      </nav>
      <p class="site-footer__copy">{{ footer.copyright }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--nav-border);
  background: var(--nav-bg);
  padding-block: 2.5rem;
}

.site-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.site-footer__logo {
  height: 1.625rem;
  width: auto;
}

.site-footer__tagline {
  margin: 0;
  font-size: 0.875rem;
  color: var(--nav-text);
  opacity: 0.85;
}

.site-footer__links {
  display: flex;
  gap: 1.25rem;
}

.site-footer__links a {
  font-size: 0.875rem;
  color: var(--nav-text);
  text-decoration: none;
}

.site-footer__links a:hover {
  color: var(--accent);
}

.site-footer__copy {
  margin: 0.5rem 0 0;
  font-size: 0.8125rem;
  color: var(--nav-text);
  opacity: 0.7;
}
</style>
