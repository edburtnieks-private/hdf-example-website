<template>
  <section class="feed-section">
    <svg
      class="circle-dotted"
      width="100%"
      height="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50%"
        cy="1056"
        r="1053"
        stroke-width="3"
        stroke-dasharray="0 20"
        stroke-linecap="round"
      />
    </svg>

    <div class="inner">
      <section class="news">
        <div class="inner">
          <h2>News</h2>

          <h3>Vestibulum nibh ligula, tempus eu porttitor sit amet</h3>

          <h2>April 27th</h2>

          <p>
            Nam sollicitudin libero eget risus elementum blandit. Integer
            efficitur quis nisl et venenatis. Nullam iaculis tempor
            molestie. Praesent lectus ligula, consectetur eu tortor id,
            pretium molestie ante. Donec consectetur eu tortor tincidunt
            urna dui, sit amet dignissim quam fermentum sed.
          </p>

          <footer class="actions">
            <n-link to="/">
              Read More
            </n-link>
            <div class="divider" />
            <n-link to="/">
              All News
            </n-link>
          </footer>
        </div>
      </section>

      <section class="blog">
        <div class="inner">
          <h2>Blog</h2>

          <blog-post>
            <template v-slot:date>
              April 27th
            </template>

            <template v-slot:title>
              Interdum et malesuada fames ac ante ipsum primis in faucibus
            </template>
          </blog-post>

          <blog-post>
            <template v-slot:date>
              April 27th
            </template>

            <template v-slot:title>
              Interdum et malesuada fames ac ante ipsum primis in faucibus
            </template>
          </blog-post>

          <n-link to="/" class="visit-blog">
            Visit Blog
          </n-link>
        </div>
      </section>

      <section class="instagram">
        <div class="inner">
          <header>
            <n-link class="intagram-icon" to="/">
              <img
                src="~/assets/images/icons/instagram-2.png"
                alt="Instagram Button"
              >
            </n-link>

            <h2>April 27th</h2>
          </header>

          <img
            src="~assets/images/feed/instagram-post.png"
            alt="Instagram Post"
          >
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import BlogPost from '~/components/feed-section/BlogPost';

export default {
  components: {
    BlogPost
  }
};
</script>

<style lang="scss">
.feed-section {
  margin: 80px 0 0;
  overflow: hidden;
  position: relative;

  &::before {
    @include circle-gradient(150px) {
      display: none;

      @include tablet {
        display: block;
        left: 70%;
      }

      @include container-inner {
        left: 65%;
        top: 15px;
      }
    }
  }

  > .inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 100px auto 0;
    max-width: $bp-tablet;
    padding: 0 20px;

    @include tablet {
      flex-direction: row;
      margin: 200px auto 0;
    }

    @include desktop {
      padding: 0 50px;
    }

    @include container-inner {
      margin: 0 auto;
      max-width: $bp-container-inner;
      padding: 310px 0 0;
    }

    .news {
      margin-bottom: 92px;
      width: 100%;

      @include container-inner {
        margin-bottom: 0;
        width: auto;
      }

      .inner {
        margin: 0 auto;
        max-width: 355px;

        @include tablet {
          margin: 0;
        }
      }

      h2 {
        &:first-of-type {
          margin-bottom: 55px;
        }

        &:last-of-type {
          margin: 20px 0 60px;
        }
      }

      p {
        margin-bottom: 60px;
      }

      .actions {
        align-items: center;
        display: flex;

        a {
          &:first-of-type {
            margin-right: 35px;
          }

          &:last-of-type {
            margin-left: 35px;
          }
        }

        .divider {
          background-color: $c-bali-hai;
          height: 22px;
          width: 1px;
        }
      }
    }

    .blog {
      width: 100%;

      @include tablet {
        width: auto;
      }

      .inner {
        margin: 0 auto;
        max-width: 355px;

        @include tablet {
          max-width: 252px;
        }

        .visit-blog {
          line-height: 23px;
        }
      }

      .inner > h2 {
        margin-bottom: 70px;
      }
    }

    .instagram {
      margin-top: 92px;
      width: 100%;

      @include tablet {
        width: auto;
      }

      .inner {
        margin: 0 auto;
        max-width: 270px;
      }

      header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
