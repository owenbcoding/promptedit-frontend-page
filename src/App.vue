<script setup>
import HelloWorld from './components/HeroSection.vue'
</script>

<template>
  <SiteNav :site="site" :nav="nav" />
  <main>
    <HeroSection :hero="hero" :site="site" />
    <IntroSection :intro="intro" />
    <TrustSection :trust="trust" />
    <section :id="toolCategories.id">
      <SectionHeading :title="toolCategories.sectionTitle" :subtitle="toolCategories.sectionSubtitle" />
      <ToolCategorySection
        v-for="cat in toolCategories.categories"
        :key="cat.id"
        :category="cat"
      />
    </section>
    <PricingSection :pricing="pricing" />
    <LibraryPreviewSection :library="libraryPreview" />
    <AudienceSection :audience="audience" />
    <FaqAccordion :faq="faq" />
    <FinalCtaSection :final-cta="finalCta" />
  </main>
  <SiteFooter :site="site" :footer="footer" />
</template>
