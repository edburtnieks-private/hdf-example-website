<template>
  <main class="container">
    <TheHeaderSlider />

    <TheAboutSection />
    
    <TheReferencesSection />

    <TheFeedSection />

    <TheCareersSection />
  </main>
</template>

<script>
import TheHeaderSlider from '~/components/main-sections/TheHeaderSlider';
import TheAboutSection from '~/components/main-sections/TheAboutSection';
import TheReferencesSection from '~/components/main-sections/TheReferencesSection';
import TheFeedSection from '~/components/main-sections/TheFeedSection';
import TheCareersSection from '~/components/main-sections/TheCareersSection';

export default {
  components: {
    TheHeaderSlider,
    TheAboutSection,
    TheReferencesSection,
    TheFeedSection,
    TheCareersSection
  }
};
</script>
