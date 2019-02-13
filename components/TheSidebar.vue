<template>
  <aside class="page-sidebar">
    <nav class="secondary-navigation">
      <ul>
        <li>
          <button class="link">
            En
          </button>
        </li>
        <li>
          <n-link to="/">
            News &and; Press
          </n-link>
        </li>
        <li>
          <n-link to="/">
            Careers
          </n-link>
        </li>
        <li>
          <n-link to="/">
            Blog
          </n-link>
        </li>
      </ul>
    </nav>

    <ul class="social-icons">
      <li>
        <n-link to="/">
          <img src="~/assets/images/icons/facebook.svg" alt="Facebook Button">
        </n-link>
      </li>
      <li>
        <n-link to="/">
          <img src="~/assets/images/icons/youtube.svg" alt="YouTube Button">
        </n-link>
      </li>
      <li>
        <n-link to="/">
          <img src="~/assets/images/icons/instagram.svg" alt="Instagram Button">
        </n-link>
      </li>
      <li>
        <n-link to="/">
          <img src="~/assets/images/icons/linkedin.svg" alt="LinkedIn Button">
        </n-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.page-sidebar {
  flex-direction: column;
  padding-left: 20px;
  position: absolute;
  top: calc(100px - 60px);
  z-index: 1;

  @include desktop {
    align-items: center;
    left: 70px;
    padding-left: 70px;
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
      li {
        margin: 10px 0;

        @include desktop {
          margin: 0 calc(35px / 2);
        }

        &:first-of-type {
          margin-top: 0;

          @include desktop {
            margin-right: 0;
          }
        }

        &:last-of-type {
          margin-bottom: 30px;

          @include desktop {
            margin: 0 calc(35px / 2) 0 0;
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
