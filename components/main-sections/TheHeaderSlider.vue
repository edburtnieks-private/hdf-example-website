<template>
  <section ref="headerSlider" class="header-slider">
    <TheSidebar />

    <div ref="slideImages" class="slides">
      <img
        src="~/assets/images/header-slider/slider-1.png"
        srcset="~/assets/images/header-slider/375/slider-1.png  375w,
                ~/assets/images/header-slider/768/slider-1.png  768w,
                ~/assets/images/header-slider/1024/slider-1.png 1024w,
                ~/assets/images/header-slider/slider-1.png      1366w"
        sizes="(max-width: 375px)   375px,
               (max-width: 768px)   768px,
               (max-width: 1024px)  1024px,
                                    1366px"
        alt="Slider Image 1"
      >
      <img
        :data-src="headerSlider2"
        :data-srcset="`${headerSlider2Mobile}  375w
                       ${headerSlider2Tablet}  768w
                       ${headerSlider2Desktop} 1024w
                       ${headerSlider2}        1366w`"
        sizes="(max-width: 375px)   375px,
               (max-width: 768px)   768px,
               (max-width: 1024px)  1024px,
                                    1366px"
        alt="Slider Image 2"
      >
      <img
        :data-src="headerSlider3"      
        :data-srcset="`${headerSlider3Mobile}  375w
                       ${headerSlider3Tablet}  768w
                       ${headerSlider3Desktop} 1024w
                       ${headerSlider3}        1366w`"
        sizes="(max-width: 375px)   375px,
               (max-width: 768px)   768px,
               (max-width: 1024px)  1024px,
                                    1366px"
        alt="Slider Image 3"
      >

      <button @click="nextSlideClick">
        <div class="arrow-wrapper">
          <div class="arrow" />
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import TheSidebar from '~/components/TheSidebar';
import headerSlider2 from '~/assets/images/header-slider/slider-2.png';
import headerSlider2Mobile from '~/assets/images/header-slider/375/slider-2.png';
import headerSlider2Tablet from '~/assets/images/header-slider/768/slider-2.png';
import headerSlider2Desktop from '~/assets/images/header-slider/1024/slider-2.png';
import headerSlider3 from '~/assets/images/header-slider/slider-3.png';
import headerSlider3Mobile from '~/assets/images/header-slider/375/slider-3.png';
import headerSlider3Tablet from '~/assets/images/header-slider/768/slider-3.png';
import headerSlider3Desktop from '~/assets/images/header-slider/1024/slider-3.png';

export default {
  components: {
    TheSidebar
  },

  data: () => ({
    active: true,
    activeImage: 0,
    slideImages: [],
    slideInterval: 0,
    headerSlider2,
    headerSlider2Mobile,
    headerSlider2Tablet,
    headerSlider2Desktop,
    headerSlider3,
    headerSlider3Mobile,
    headerSlider3Tablet,
    headerSlider3Desktop
  }),

  mounted() {
    this.slideImages = this.$refs.slideImages.querySelectorAll('img');

    // Making slider button fade in together with images on inital load
    this.$refs.slideImages.querySelector('button').style.opacity = 1;

    // Making only active image visible on initial load
    this.slideImages.forEach((image, i) => {
      i === this.activeImage
        ? image.classList.add('active')
        : (image.style.display = 'none');
    });

    // Changing image every 5 seconds
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },

  methods: {
    nextSlide() {
      // Setting image for all slides that are not yet loaded
      this.slideImages.forEach((image, i) => {
        if (i !== this.activeImage) {
          image.setAttribute('src', image.getAttribute('data-src'));
          image.setAttribute('src-set', image.getAttribute('data-srcset'));
        }
      });

      // Fading image out
      this.slideImages[this.activeImage].classList.remove('active');

      // Removing and adding image after fading it out
      this.transitionDelay(500)
        .then(() => {
          this.slideImages[this.activeImage].style.display = 'none';

          if (++this.activeImage === this.slideImages.length)
            this.activeImage = 0;

          this.slideImages[this.activeImage].style.display = 'block';
        })
        .then(() => {
          // After image is added, fading it in
          this.transitionDelay(500).then(() => {
            this.slideImages[this.activeImage].classList.add('active');
          });
        });
    },

    nextSlideClick() {
      clearInterval(this.slideInterval);

      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);

      this.nextSlide();
    },

    transitionDelay(t, v) {
      return new Promise(resolve => setTimeout(resolve.bind(null, v), t));
    }
  }
};
</script>

<style lang="scss">
.header-slider {
  max-height: 768px;
  position: relative;
  right: 0;
  top: 80px;

  @include desktop {
    padding-left: 200px;
    top: 0;
  }

  @include desktop-big-image {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .slides {
    position: relative;

    @include desktop-big-image {
      margin-left: auto;
    }

    img {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      width: 100%;

      &.active {
        opacity: 1;
      }
    }

    button {
      border: 2px solid $c-blue-dianne;
      bottom: 10px;
      left: 10px;
      opacity: 0;
      padding: 5px;
      position: absolute;
      transition: opacity 0.5s ease-in-out;

      @include tablet {
        bottom: 20px;
        left: 20px;
        padding: 15px;
      }

      @include desktop {
        bottom: 70px;
        left: 70px;
      }

      @include desktop-big {
        left: 80px;
      }

      &::before {
        background-color: $c-blue-dianne;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform-origin: top;
        transform: scaleY(0);
        transition: transform 0.2s ease-in-out;
        width: 100%;
      }

      &:hover,
      &:focus {
        &::before {
          transform: scaleY(1);
        }

        .arrow {
          &::before,
          &::after {
            background-color: $c-white;
          }
        }
      }

      .arrow-wrapper {
        transform: scale(0.5);

        @include tablet {
          transform: scale(0.7);
        }

        @include desktop {
          transform: scale(1);
        }

        .arrow {
          transform: rotate(-90deg) scale(0.5);

          &::before,
          &::after {
            transition: background-color 0.2s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
