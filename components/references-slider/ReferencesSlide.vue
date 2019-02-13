<template>
  <section class="image-wrapper">
    <img
      class="tns-lazy-img"
      :src="image"
      :srcset="`${imageMobile}  375w,
                ${imageTablet}  768w,
                ${imageDesktop} 1024w,
                ${image}        1173w`"
      sizes="(max-width: 375px)   375px,
             (max-width: 768px)   768px,
             (max-width: 1024px)  1024px,
                                  1173px"
      :alt="imageAlt"
      :data-src="image"
    >

    <div ref="referencesCard" class="card">
      <div class="inner">
        <h2>
          <slot name="title" />
        </h2>

        <h3>
          <slot name="subtitle" />
        </h3>

        <p>
          <slot name="paragraph" />
        </p>

        <footer class="actions">
          <n-link to="/">
            Find out more
          </n-link>
          <div class="divider" />
          <n-link to="/">
            All projects
          </n-link>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    imageMobile: {
      type: String,
      required: true
    },
    imageTablet: {
      type: String,
      required: true
    },
    imageDesktop: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.sendCardBottomCoordinates();
  },
  created() {
    this.$nuxt.$on('set-card-bottom', () => {
      this.sendCardBottomCoordinates();
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('set-card-bottom');
  },
  methods: {
    sendCardBottomCoordinates() {
      this.$parent.$emit(
        'get-card-bottom',
        this.$refs.referencesCard.getBoundingClientRect().bottom
      );
    }
  }
};
</script>

<style lang="scss">
.image-wrapper {
  position: relative;

  img {
    width: 100%;
  }

  .card {
    background-color: $c-white;
    padding: 20px 20px 0;
    position: absolute;
    top: calc(100% + 83px);
    width: 100%;

    @media (min-width: 580px) {
      top: auto;
      width: auto;
    }

    @include tablet {
      bottom: -180px;
      box-shadow: 0 90px 60px -60px $c-porcelain;
      padding: 40px;
      right: 364px;
    }

    @media (min-width: 1173px) {
      bottom: -90px;
      right: 430px;
    }

    .inner {
      margin: 0 auto;
      max-width: 290px;

      @media (min-width: 580px) {
        margin: 0;
      }
    }

    h2 {
      margin-bottom: 25px;

      @include tablet {
        margin-bottom: 50px;
      }
    }

    h3 {
      margin-bottom: 30px;

      @include tablet {
        margin-bottom: 60px;
      }
    }

    p {
      margin-bottom: 40px;

      @include tablet {
        margin-bottom: 85px;
      }
    }

    .actions {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .divider {
        background-color: $c-bali-hai;
        height: 22px;
        width: 1px;
      }
    }
  }
}
</style>
