<template>
  <div ref="mobileNavigationWrapper" class="mobile-navigation-wrapper">
    <input
      id="mobile-navigation-trigger"
      ref="mobileNavigationTrigger"
      type="checkbox"
      class="mobile-navigation-trigger"
      name="mobile-navigation-trigger"
    >

    <label class="mobile-navigation-button" for="mobile-navigation-trigger" @click="toggleMobileNavigation">
      <div class="bars" />
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMobileNavigation() {
      this.$refs.mobileNavigationWrapper.classList.toggle('active');
      document.body.classList.toggle('overlay');
    }
  }
};
</script>

<style lang="scss">
.mobile-navigation-wrapper {
  .mobile-navigation-trigger {
    display: none;
  }

  .mobile-navigation-button {
    background-color: transparent;
    cursor: pointer;
    padding: 20px;
    position: fixed;
    right: 0;
    top: 20px;
    z-index: 2;

    @include desktop {
      display: none;
      right: 30px;
    }

    .bars,
    .bars::before,
    .bars::after {
      background-color: $c-blue-dianne;
      content: '';
      height: 2px;
      transition: transform 0.2s;
      width: 20px;
    }

    .bars {
      &::before {
        position: absolute;
        top: 14px;
      }

      &::after {
        bottom: 14px;
        position: absolute;
      }
    }
  }

  ~ .page-header .primary-navigation-container,
  ~ .container .page-sidebar {
    display: none;

    @include desktop {
      display: flex;
    }
  }

  &.active {
    .mobile-navigation-button {
      .bars {
        height: 0;

        &::before {
          top: 20px;
          transform: rotate(45deg);
        }

        &::after {
          top: 20px;
          transform: rotate(-45deg);
        }
      }
    }

    ~ .page-header .primary-navigation-container {
      display: flex;
    }

    ~ .container .page-sidebar {
      display: flex;
    }
  }
}
</style>
