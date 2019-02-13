<template>
  <section class="header-slider">
    <TheSidebar />

    <div ref="slideImages" class="slides">
      <img
        src="~/assets/images/header-slider/slider-image-1.png"
        srcset="~/assets/images/header-slider/375/slider-image-1.png  375w,
                ~/assets/images/header-slider/768/slider-image-1.png  768w,
                ~/assets/images/header-slider/1024/slider-image-1.png 1024w,
                ~/assets/images/header-slider/slider-image-1.png      1366w"
        sizes="(max-width: 375px)   375px,
               (max-width: 768px)   768px,
               (max-width: 1024px)  1024px,
                                    1366px"
        alt="Slider Image 1"
      >
      <img
        src="~/assets/images/header-slider/slider-image-2.png"
        srcset="~/assets/images/header-slider/375/slider-image-2.png  375w,
                ~/assets/images/header-slider/768/slider-image-2.png  768w,
                ~/assets/images/header-slider/1024/slider-image-2.png 1024w,
                ~/assets/images/header-slider/slider-image-2.png      1366w"
        sizes="(max-width: 375px)   375px,
               (max-width: 768px)   768px,
               (max-width: 1024px)  1024px,
                                    1366px"
        alt="Slider Image 2"
      >
      <img
        src="~/assets/images/header-slider/slider-image-3.png"
        srcset="~/assets/images/header-slider/375/slider-image-3.png  375w,
                ~/assets/images/header-slider/768/slider-image-3.png  768w,
                ~/assets/images/header-slider/1024/slider-image-3.png 1024w,
                ~/assets/images/header-slider/slider-image-3.png      1366w"
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

export default {
  components: {
    TheSidebar
  },
  data: () => ({
    active: true,
    activeImage: 0,
    slideImages: [],
    slideInterval: 0
  }),
  mounted() {
    this.slideImages = this.$refs.slideImages.querySelectorAll('img');

    this.slideImages.forEach((image, i) => {
      i === this.activeImage
        ? image.classList.add('active')
        : (image.style.display = 'none');
    });

    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
  methods: {
    nextSlide() {
      this.slideImages[this.activeImage].classList.remove('active');
      this.transitionDelay(500)
        .then(() => {
          this.slideImages[this.activeImage].style.display = 'none';
          if (++this.activeImage === this.slideImages.length)
            this.activeImage = 0;
          this.slideImages[this.activeImage].style.display = 'block';
        })
        .then(() => {
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
  position: relative;
  right: 0;

  @include desktop {
    padding-left: 200px;
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
      padding: 5px;
      position: absolute;

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
