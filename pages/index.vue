<template>
  <main class="container">
    <TheHeaderSlider />

    <LazyHydrate ssr-only>
      <TheAboutSection />
    </LazyHydrate>
    
    <LazyHydrate :when-visible="{ rootMargin: '150px' }">
      <TheReferencesSection />
    </LazyHydrate>

    <LazyHydrate :when-visible="{ rootMargin: '500px' }">
      <TheFeedSection />
    </LazyHydrate>

    <LazyHydrate :when-visible="{ rootMargin: '500px' }">
      <TheCareersSection />
    </LazyHydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import TheHeaderSlider from '~/components/main-sections/TheHeaderSlider';

export default {
  components: {
    LazyHydrate,
    TheHeaderSlider,
    TheAboutSection: () => import('~/components/main-sections/TheAboutSection'),
    TheReferencesSection: () =>
      import('~/components/main-sections/TheReferencesSection'),
    TheFeedSection: () => import('~/components/main-sections/TheFeedSection'),
    TheCareersSection: () =>
      import('~/components/main-sections/TheCareersSection')
  }
};
</script>
