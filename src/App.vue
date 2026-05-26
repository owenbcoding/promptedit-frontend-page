<script setup>
import SiteNav from './components/SiteNav.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import Trust from './components/Trust.vue'
import SectionHeading from './components/SectionHeading.vue'
import ToolCategory from './components/ToolCategory.vue'
import Pricing from './components/Pricing.vue'
import LibraryPreview from './components/LibraryPreview.vue'
import Audience from './components/Audience.vue'
import FaqAccordion from './components/FaqAccordion.vue'
import FinalCtaSection from './components/FinalCtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'

import {
  site,
  nav,
  hero,
  intro,
  trust,
  toolCategories,
  pricing,
  libraryPreview,
  audience,
  faq,
  finalCta,
  footer,
} from './data/content.js'
</script>

<template>
  <SiteNav :site="site" :nav="nav" />
  <main class="page-main">
    <Hero :hero="hero" :site="site" />
    <Intro :intro="intro" />
    <Trust :trust="trust" />
    <section :id="toolCategories.id" class="section">
      <div class="container">
        <SectionHeading
          :title="toolCategories.sectionTitle"
          :subtitle="toolCategories.sectionSubtitle"
        />
        <ToolCategory
          v-for="cat in toolCategories.categories"
          :key="cat.id"
          :category="cat"
        />
      </div>
    </section>
    <Pricing :pricing="pricing" />
    <LibraryPreview :library="libraryPreview" />
    <Audience :audience="audience" />
    <FaqAccordion :faq="faq" />
    <FinalCtaSection :final-cta="finalCta" />
  </main>
  <SiteFooter :site="site" :footer="footer" />
</template>
