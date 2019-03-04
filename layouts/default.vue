<template>
  <div>
    <TheMobileNavigationTrigger />
  
    <TheHeader />

    <nuxt />

    <LazyHydrate :when-visible="{ rootMargin: '500px' }">    
      <TheFooter />
    </LazyHydrate>

    <LazyHydrate :when-visible="{ rootMargin: '500px' }">
      <TheCopyright />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import TheMobileNavigationTrigger from '~/components/TheMobileNavigationTrigger';
import TheHeader from '~/components/TheHeader';

export default {
  components: {
    LazyHydrate,
    TheMobileNavigationTrigger,
    TheHeader,
    TheFooter: () => import('~/components/TheFooter'),
    TheCopyright: () => import('~/components/TheCopyright')
  }
};
</script>
