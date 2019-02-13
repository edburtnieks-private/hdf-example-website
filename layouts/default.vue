<template>
  <div>
    <TheMobileNavigationTrigger />

    <TheHeader />

    <nuxt />

    <TheFooter />

    <TheCopyright />
  </div>
</template>

<script>
import TheMobileNavigationTrigger from '~/components/TheMobileNavigationTrigger';
import TheHeader from '~/components/TheHeader';
import TheFooter from '~/components/TheFooter';
import TheCopyright from '~/components/TheCopyright';

export default {
  components: {
    TheMobileNavigationTrigger,
    TheHeader,
    TheFooter,
    TheCopyright
  }
};
</script>
