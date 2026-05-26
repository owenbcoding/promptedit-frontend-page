<script setup>
import { ref } from 'vue'
import logo from '../assets/images/Promptedit-logo.png'

defineProps({
  site: { type: Object, required: true },
  nav: { type: Object, required: true },
})

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-nav">
    <div class="container site-nav__inner">
      <a href="#" class="site-nav__brand" @click="closeMenu">
        <img :src="logo" :alt="site.name" class="site-nav__logo" width="160" height="30" />
      </a>

      <nav class="site-nav__links" aria-label="Main">
        <a
          v-for="link in nav.links"
          :key="link.href"
          :href="link.href"
          class="site-nav__link"
        >
          {{ link.label }}
        </a>
      </nav>

      <a :href="site.primaryCta.href" class="btn btn-primary site-nav__cta">
        {{ site.primaryCta.label }}
      </a>

      <button
        type="button"
        class="site-nav__toggle"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="site-nav__toggle-bar" />
        <span class="site-nav__toggle-bar" />
        <span class="site-nav__toggle-bar" />
      </button>
    </div>

    <div
      id="mobile-menu"
      class="site-nav__mobile"
      :class="{ 'site-nav__mobile--open': menuOpen }"
    >
      <div class="container site-nav__mobile-inner">
        <a
          v-for="link in nav.links"
          :key="link.href"
          :href="link.href"
          class="site-nav__mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          :href="site.primaryCta.href"
          class="btn btn-primary site-nav__mobile-cta"
          @click="closeMenu"
        >
          {{ site.primaryCta.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
}

.site-nav__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  min-height: var(--nav-height);
}

.site-nav__brand {
  display: flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
}

.site-nav__logo {
  display: block;
  height: 1.75rem;
  width: auto;
}

.site-nav__links {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  justify-self: center;
}

.site-nav__link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--nav-text);
  text-decoration: none;
}

.site-nav__link:hover {
  color: var(--accent);
}

.site-nav__cta {
  display: none;
  justify-self: end;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.site-nav__toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid var(--nav-border);
  border-radius: 0.5rem;
  background: transparent;
  cursor: pointer;
  justify-self: end;
}

.site-nav__toggle-bar {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--nav-text);
  border-radius: 1px;
}

.site-nav__mobile {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
  overflow: hidden;
  border-bottom: 1px solid transparent;
  background: var(--nav-bg);
}

.site-nav__mobile--open {
  grid-template-rows: 1fr;
  border-bottom-color: var(--nav-border);
}

.site-nav__mobile-inner {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding-bottom: 0;
  transition: padding 0.25s ease;
}

.site-nav__mobile--open .site-nav__mobile-inner {
  padding-block: 0.75rem 1rem;
}

.site-nav__mobile-link {
  display: block;
  width: 100%;
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--nav-text);
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid var(--nav-border);
}

.site-nav__mobile-link:last-of-type {
  border-bottom: none;
}

.site-nav__mobile-cta {
  margin-top: 0.75rem;
  width: 100%;
  max-width: 16rem;
}

@media (min-width: 768px) {
  .site-nav__inner {
    grid-template-columns: 1fr auto 1fr;
  }

  .site-nav__links {
    display: flex;
  }

  .site-nav__cta {
    display: inline-flex;
  }

  .site-nav__toggle,
  .site-nav__mobile {
    display: none;
  }
}

@media (max-width: 767px) {
  .site-nav__inner {
    grid-template-columns: 1fr auto;
  }

  .site-nav__cta {
    display: none;
  }
}
</style>
