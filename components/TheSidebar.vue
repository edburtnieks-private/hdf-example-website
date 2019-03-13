<template>
  <aside class="page-sidebar">
    <nav class="secondary-navigation">
      <ul>
        <NavigationLink button text="En" />

        <NavigationLink link="#careers-section" text="Careers" />

        <NavigationLink link="#feed" text="Blog" />

        <NavigationLink link="#feed" text="News & Press" />
      </ul>
    </nav>

    <ul class="social-icons">
      <NavigationLink :image="facebookIcon" alt-text="Facebook Button" />

      <NavigationLink :image="youtubeIcon" alt-text="Youtube Button" />

      <NavigationLink :image="instagramIcon" alt-text="Instagram Button" />

      <NavigationLink :image="linkedinIcon" alt-text="LinkedIn Button" />
    </ul>
  </aside>
</template>

<script>
import facebookIcon from '~/assets/images/icons/facebook.svg';
import youtubeIcon from '~/assets/images/icons/youtube.svg';
import instagramIcon from '~/assets/images/icons/instagram.svg';
import linkedinIcon from '~/assets/images/icons/linkedin.svg';

export default {
  data: () => ({
    facebookIcon,
    youtubeIcon,
    instagramIcon,
    linkedinIcon
  })
};
</script>


<style lang="scss">
.page-sidebar {
  flex-direction: column;
  padding: 30px 0 0 20px;
  position: fixed;
  z-index: 1;

  @include desktop {
    align-items: center;
    left: 70px;
    padding: 0 0 0 70px;
    position: absolute;
    top: 100%;
    transform-origin: left top;
    transform: rotate(-90deg);
  }

  @include desktop-big {
    flex-direction: row-reverse;
    left: 80px;
    top: 100%;
    width: 540px;
  }

  .secondary-navigation ul,
  .social-icons {
    list-style-type: none;
    margin: 0;
    padding: 0;

    @include desktop {
      display: flex;
      flex-direction: row-reverse;
    }
  }

  .secondary-navigation {
    line-height: 12px;

    @include desktop {
      margin-bottom: 20px;
    }

    @include desktop-big {
      margin-bottom: 0;
      margin-left: auto;
    }

    ul {
      display: flex;
      flex-direction: column-reverse;

      @include desktop {
        flex-direction: row-reverse;
      }

      li {
        margin: 10px 0;

        @include desktop {
          margin: 0 calc(35px / 2);
        }

        &:last-of-type {
          margin-top: 0;

          @include desktop {
            margin-left: 0;
          }
        }

        &:first-of-type {
          margin-bottom: 30px;

          @include desktop {
            margin: 0 0 0 calc(35px / 2);
          }
        }

        a,
        .link {
          font-size: $fs-12;
        }
      }
    }
  }

  .social-icons {
    li {
      display: inline-block;
      margin: 0 10px;

      &:first-of-type {
        margin-left: 0;

        @include desktop {
          margin: 0 0 0 calc(35px / 2);
        }
      }

      &:last-of-type {
        margin-right: 0;

        @include desktop {
          margin: 0 calc(35px / 2) 0 0;
        }
      }

      @include desktop {
        margin: 0 calc(35px / 2);
        transform: rotate(90deg);
      }
    }
  }
}
</style>
