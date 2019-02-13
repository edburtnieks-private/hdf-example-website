<template>
  <section ref="referencesSection" class="references-section">
    <main>
      <section id="references-slider" ref="referencesSlider" class="references-slider">
        <references-slide
          image="references/reference-1.png"
          image-mobile="references/375/reference-1.png"
          image-tablet="references/768/reference-1.png"
          image-desktop="references/1024/reference-1.png"
          image-alt="Reference Image 1"
        >
          <template v-slot:title>
            Project management and consulting
          </template>

          <template v-slot:subtitle>
            Ferry terminal Gaženica Zadar
          </template>

          <template v-slot:paragraph>
            Donec consectetur eu tortor tincidunt urna dui, sit amet dignis quam fermentum sed.
          </template>
        </references-slide>

        <references-slide
          image="references/reference-2.png"
          image-mobile="references/375/reference-2.png"
          image-tablet="references/768/reference-2.png"
          image-desktop="references/1024/reference-2.png"
          image-alt="Reference Image 2"
        >
          <template v-slot:title>
            Project management and consulting
          </template>

          <template v-slot:subtitle>
            Ferry terminal Gaženica Zadar
          </template>

          <template v-slot:paragraph>
            Donec consectetur eu tortor tincidunt urna dui, sit amet dignis quam fermentum sed.
          </template>
        </references-slide>
      </section>

      <h2 ref="referencesText">
        References
      </h2>

      <div id="reference-slider-controls" class="action" :class="{behind: isBehindSlides}">
        <button @click="nextSlide">
          <div class="arrow-wrapper">
            <div class="arrow" />
          </div>
        </button>
        <span />
        <h4 class="slide-counter" v-text="slideNumber" />
      </div>
    </main>
  </section>
</template>

<script>
import ReferencesSlide from '~/components/references-slider/ReferencesSlide';

export default {
  components: {
    ReferencesSlide
  },
  data: () => ({
    sliderInfo: {},
    activeSlide: 1,
    isBehindSlides: false,
    cardBottom: 0
  }),
  computed: {
    slideNumber() {
      return `0${this.activeSlide}`;
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      const { tns } = require('tiny-slider/src/tiny-slider');

      const referencesSlider = tns({
        container: '#references-slider',
        nav: false,
        controlsPosition: 'bottom',
        controlsContainer: '#reference-slider-controls',
        lazyload: true,
        startIndex: this.activeSlide - 1,
        touch: false,
        responsive: {
          1173: {
            fixedWidth: 1173,
            gutter: 200
          }
        },
        onInit: info => {
          this.sliderInfo = info;
          this.sliderInfo.nextButton.style.display = 'none';
          this.$nuxt.$emit('set-card-bottom');
        }
      });

      referencesSlider.events.on(
        'transitionStart',
        () => (this.isBehindSlides = true)
      );

      referencesSlider.events.on(
        'transitionEnd',
        () => (this.isBehindSlides = false)
      );

      this.getMinReferencesSectionHeight();

      window.onresize = () => {
        this.$nuxt.$emit('set-card-bottom');
        this.getMinReferencesSectionHeight();
      };
    }
  },
  created() {
    this.$on('get-card-bottom', cardBottom => {
      this.cardBottom = cardBottom;
    });
  },
  methods: {
    nextSlide() {
      this.slideCounter = `0${
        this.activeSlide !== this.sliderInfo.slideCount
          ? ++this.activeSlide
          : (this.activeSlide = 1)
      }`;
    },
    getMinReferencesSectionHeight() {
      const referencesSection = this.$refs.referencesSection;
      const referencesSlider = this.$refs.referencesSlider;
      const referencesText = this.$refs.referencesText;

      const sliderHeight = referencesSlider.clientHeight;
      const sliderBottom = referencesSlider.getBoundingClientRect().bottom;
      const textBottom = referencesText.getBoundingClientRect().bottom;

      let referencesSectionMinHeight;

      if (window.innerWidth <= 768) {
        referencesSectionMinHeight = this.cardBottom - sliderBottom;
      }

      if (window.innerWidth > 768 && window.innerWidth <= 1366) {
        referencesSectionMinHeight = this.cardBottom + 60 - sliderBottom;
      }

      if (window.innerWidth > 1366) {
        referencesSectionMinHeight = textBottom - sliderBottom;
      }

      referencesSection.style.minHeight = `
        ${sliderHeight + referencesSectionMinHeight}px
      `;
    }
  }
};
</script>

<style lang="scss">
.references-section {
  overflow: hidden;

  main {
    max-height: 660px;
    position: relative;

    .tns-outer {
      max-height: 660px;
    }

    .tns-ovh {
      overflow: visible;
    }

    > h2 {
      display: none;

      @include desktop-big {
        color: $c-botticelli;
        display: block;
        font-size: 152px;
        line-height: 86px;
        margin: 0 auto;
        max-width: $bp-container-inner;
        position: relative;
        top: 210px;
        transform-origin: left top;
        transform: rotate(-90deg);
      }
    }
  }

  .action {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: 20px 0;
    outline: 0;
    text-align: center;

    @media (min-width: 580px) {
      bottom: -100px;
      margin: 60px 82px 0;
      position: absolute;
      right: 0;
    }

    @include desktop-big {
      bottom: 0;
      flex-direction: column-reverse;
      left: 1173px;
      margin: 0 82px 60px;
      right: auto;
    }

    .slide-counter {
      display: inline-block;
      margin-right: 20px;

      @include desktop-big {
        display: block;
        margin: 0 0 60px;
      }
    }

    .arrow-wrapper {
      @include desktop-big {
        display: inline-block;
      }
    }

    &.behind {
      z-index: -1;
    }
  }
}
</style>
